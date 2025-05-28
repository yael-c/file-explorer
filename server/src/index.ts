import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/explore', (req, res) => {
    const targetPath = req.query.path as string || 'C:\\';
    try {
        const entries = fs.readdirSync(targetPath, {withFileTypes: true});
        const result = entries.map(entry => ({
            name: entry.name,
            isDirectory: entry.isDirectory()
        }));
        res.json({path: targetPath, entries: result});
    } catch (err) {
        res.status(500).json({error: `Cannot access path: ${targetPath}`});
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
