import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import db from '../db.js';

const router = express.Router();

// ✅ Multer configuratie met categorie-validatie
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body.category;

    if (!category) {
      return cb(new Error('Geen categorie ontvangen'), null);
    }

    const folder = path.join('uploads', category);
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// 📥 **Upload endpoint**
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    const { category, title } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ error: 'Geen bestand ontvangen' });
    }

    const filepath = `/uploads/${category}/${req.file.filename}`;

    db.prepare(
      'INSERT INTO photos (title, category, filepath) VALUES (?, ?, ?)'
    ).run(title, category, filepath);

    res.status(201).json({ success: true, filepath });
  } catch (err) {
    console.error('Fout bij upload:', err);
    res.status(500).json({ error: 'Upload mislukt' });
  }
});

// 📤 **Foto's ophalen**
router.get('/photos', (req, res) => {
  try {
    const photos = db.prepare('SELECT * FROM photos ORDER BY id DESC').all();
    res.json(photos);
  } catch (err) {
    console.error('Fout bij ophalen van foto’s:', err);
    res.status(500).json({ error: 'Kon geen foto’s laden' });
  }
});

export default router;
