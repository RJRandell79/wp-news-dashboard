import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import db from './db.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json());

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

// Single post by ID
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