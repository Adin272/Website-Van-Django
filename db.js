// db.js
import Database from 'better-sqlite3';

const db = new Database('./Portfolio.db');

// Maak de tabel aan (overslaat als hij al bestaat)
db.prepare(`
  CREATE TABLE IF NOT EXISTS photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    category TEXT,
    filepath TEXT,
    uploaded_at TEXT DEFAULT CURRENT_TIMESTAMP,
    filename TEXT
  )
`).run();

export default db;
