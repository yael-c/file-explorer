import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import apiRouter from './routes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI!, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err));

app.use('/api', apiRouter);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
