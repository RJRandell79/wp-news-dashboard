import Database from 'better-sqlite3';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, 'data/data.db');
const db = new Database(dbPath);
console.log('[db] opening:', dbPath);


db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id          INTEGER PRIMARY KEY,
    title       TEXT,
    slug        TEXT,
    date        TEXT,
    link        TEXT,
    excerpt     TEXT,
    content     TEXT,
    thumbnail   TEXT,
    categories  TEXT,
    tags        TEXT,
    synced_at   TEXT
  )
`);

export default db;