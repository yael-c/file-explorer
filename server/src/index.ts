import express from 'express';
import cors from 'cors';
import exploreRoutes from './routes/explore';
import folderRoutes from './routes/create-folder';


const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/create-folder', folderRoutes);
app.use('/api/explore', exploreRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
