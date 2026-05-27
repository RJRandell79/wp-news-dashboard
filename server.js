import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import db from './db.js';
import { PRESTON_GAZETTEER, REGEN_KEYWORDS } from './data/gazetteer.js';

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
  const text = `${post.title} ${post.content}`.toLowerCase();
  for (const entry of PRESTON_GAZETTEER) {
    const terms = [entry.name, ...entry.aliases].map(t => t.toLowerCase());
    if (terms.some(t => text.includes(t))) return entry;
  }
  return null;
}

function regenScore(post) {
  const text = `${post.title} ${post.excerpt}`.toLowerCase();
  return Object.entries(REGEN_KEYWORDS).reduce(
    (sum, [keyword, weight]) => text.includes(keyword) ? sum + weight : sum, 0
  );
}

app.get('/posts/geo', (req, res) => {
  const posts = db.prepare('SELECT id, title, link, excerpt, content FROM posts ORDER BY date DESC').all();
  const features = posts.flatMap(post => {
    if (regenScore(post) < MIN_REGEN_SCORE) return [];
    const match = matchGazetteer(post);
    if (!match) return [];
    return [{
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [match.lon, match.lat] },
      properties: { id: post.id, title: post.title, link: post.link, location: match.name, category: match.category },
    }];
  });
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