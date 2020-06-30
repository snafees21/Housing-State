import cors from 'cors';
import express from 'express';
import { test } from './routes/index';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use('/api/test', test);

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
