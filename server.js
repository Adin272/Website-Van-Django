import express from 'express';
import cors from 'cors';
import path from 'path';
import uploadRoutes from './routes/upload.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Nodig voor FormData

app.use('/uploads', express.static(path.resolve('uploads')));
app.use('/api', uploadRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`✅ Server draait op http://localhost:${PORT}`);
});
