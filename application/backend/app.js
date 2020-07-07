import cors from 'cors';
import express from 'express';
import connectDB from './database/db';
import { test } from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api/test', test);

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
