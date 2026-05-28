import cron from 'node-cron';
import 'dotenv/config';
import db from '../db.js';
import https from 'https';

const BASE_URL = process.env.WP_API_URL;
process.on('unhandledRejection', (reason) => console.error('[monitor] unhandled:', reason));

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let raw = '';
      res.on('data', (chunk) => {
        raw += chunk;
      });
      res.on('end', () => {
        resolve({
          ok: res.statusCode >= 200 && res.statusCode < 300,
          status: res.statusCode,
          headers: res.headers,
          json: () => JSON.parse(raw),
        });
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => req.destroy(new Error('Timeout')));
  });
}

function upsertPosts(posts) {
  const stmt = db.prepare(`
    INSERT INTO posts (id, title, slug, date, link, excerpt, content, thumbnail, categories, tags, synced_at)
    VALUES (@id, @title, @slug, @date, @link, @excerpt, @content, @thumbnail, @categories, @tags, @synced_at)
    ON CONFLICT(id) DO UPDATE SET
      title=excluded.title, slug=excluded.slug, date=excluded.date,
      link=excluded.link, excerpt=excluded.excerpt, content=excluded.content,
      thumbnail=excluded.thumbnail, categories=excluded.categories,
      tags=excluded.tags, synced_at=excluded.synced_at
  `);

  const upsertMany = db.transaction((posts) => {
    for (const p of posts) stmt.run(p);
  });

  const now = new Date().toISOString();

  const mapped = posts.map((p) => ({
    id: p.id,
    title: p.title?.rendered ?? '',
    slug: p.slug,
    date: p.date,
    link: p.link,
    excerpt: p.excerpt?.rendered ?? '',
    content: p.content?.rendered ?? '',
    thumbnail: p._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null,
    categories: JSON.stringify(p.categories ?? []),
    tags: JSON.stringify(p.tags ?? []),
    synced_at: now,
  }));

  upsertMany(mapped);
  return mapped.length;
}

async function syncPosts() {
  // If we have existing posts, only fetch newer ones
  const latest = db.prepare('SELECT date FROM posts ORDER BY date DESC LIMIT 1').get();
  const after = latest ? `&after=${encodeURIComponent(latest.date)}` : '';

  let page = 1;
  let totalPages = 1;
  let totalSynced = 0;

  do {
    const res = await getJSON(`${BASE_URL}/posts?per_page=100&page=${page}&_embed=wp:featuredmedia${after}`);
    if (!res.ok) throw new Error(`WP API error: ${res.status}`);

    totalPages = parseInt(res.headers['x-wp-totalpages'] ?? '1', 10);
    console.log(`[monitor] page ${page}/${totalPages}`);

    const data = res.json();
    if (data.length) {
      totalSynced += upsertPosts(data);
    }
    page++;
  } while (page <= totalPages);

  return totalSynced;
}

async function sync() {
  try {
    console.log('[monitor] Syncing WP posts...');
    const count = await syncPosts();
    console.log(`[monitor] Synced ${count} posts`);
  } catch (err) {
    console.error('[monitor] Sync failed:', err.message);
  }
}

// Run immediately on start, then every 30 minutes
sync();
cron.schedule('*/30 * * * *', sync);