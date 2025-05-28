import {Router} from 'express';
import fs from 'fs';

const router = Router();

router.get('/', (req, res) => {
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

export default router;
