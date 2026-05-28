import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import db from './db.js';
import { PRESTON_GAZETTEER, REGEN_KEYWORDS, NEGATIVE_KEYWORDS } from './data/gazetteer.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const MIN_REGEN_SCORE = 3;

app.use(express.json());
app.use(express.static('public'));

// List posts — supports ?page=1&limit=20&search=
app.get('/posts', (req, res) => {
  const limit = Math.min(parseInt(req.query.limit ?? '20', 10), 100);
  const offset = (Math.max(parseInt(req.query.page ?? '1', 10), 1) - 1) * limit;
  const search = req.query.search ? `%${req.query.search}%` : null;

  const rows = search
    ? db.prepare('SELECT * FROM posts WHERE title LIKE ? ORDER BY date DESC LIMIT ? OFFSET ?').all(search, limit, offset)
    : db.prepare('SELECT * FROM posts ORDER BY date DESC LIMIT ? OFFSET ?').all(limit, offset);

  const total = search
    ? db.prepare('SELECT COUNT(*) as c FROM posts WHERE title LIKE ?').get(search).c
    : db.prepare('SELECT COUNT(*) as c FROM posts').get().c;

  res.json({ total, page: req.query.page ?? 1, limit, posts: rows });
});

function matchGazetteer(post) {
  const title = post.title.toLowerCase();
  const full  = `${post.title} ${post.content}`.toLowerCase();

  // Try title first — the subject of the article is almost always named there.
  // Only fall back to full content if the title has no gazetteer match.
  for (const scope of [title, full]) {
    let best = null;
    let bestLen = 0;
    for (const entry of PRESTON_GAZETTEER) {
      for (const term of [entry.name, ...entry.aliases]) {
        const t = term.toLowerCase();
        if (t.length > bestLen && scope.includes(t)) {
          best = entry;
          bestLen = t.length;
        }
      }
    }
    if (best) return best;
  }
  return null;
}

function hasNegativeSignal(post) {
  const title = post.title.toLowerCase();
  return NEGATIVE_KEYWORDS.some(k => title.includes(k));
}

function regenScore(post) {
  const text = `${post.title} ${post.excerpt}`.toLowerCase();
  return Object.entries(REGEN_KEYWORDS).reduce(
    (sum, [keyword, weight]) => text.includes(keyword) ? sum + weight : sum, 0
  );
}

app.get('/posts/geo', (req, res) => {
  const since = req.query.since ?? null;
  const posts = since
    ? db.prepare('SELECT id, title, link, excerpt, content, date, thumbnail FROM posts WHERE date >= ? ORDER BY date DESC').all(since)
    : db.prepare('SELECT id, title, link, excerpt, content, date, thumbnail FROM posts ORDER BY date DESC').all();

  const locationMap = new Map();
  for (const post of posts) {
    if (regenScore(post) < MIN_REGEN_SCORE) continue;
    if (hasNegativeSignal(post)) continue;
    const match = matchGazetteer(post);
    if (!match || match.category === 'street') continue;
    if (!locationMap.has(match.id)) locationMap.set(match.id, { entry: match, articles: [] });
    locationMap.get(match.id).articles.push({ id: post.id, title: post.title, link: post.link, date: post.date, excerpt: post.excerpt, thumbnail: post.thumbnail });
  }

  const features = Array.from(locationMap.values()).map(({ entry, articles }) => ({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [entry.lon, entry.lat] },
    properties: {
      location: entry.name,
      category: entry.category,
      count: articles.length,
      articles: JSON.stringify(articles),
    },
  }));

  res.json({ type: 'FeatureCollection', features });
});

app.get('/map', (req, res) => {
  res.json({ accessToken: process.env.MAPBOX_ACCESS_TOKEN });
});

// Single post by ID — must come after /posts/geo to avoid catching "geo" as an id
app.get('/posts/:id', (req, res) => {
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json(post);
});

io.on('connection', (socket) => {
  console.log('[socket] client connected');
});

const PORT = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`[server] listening on :${PORT}`));