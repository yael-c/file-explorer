import express from 'express';
import cors from 'cors';
import exploreRoutes from './routes/explore';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/explore', exploreRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
