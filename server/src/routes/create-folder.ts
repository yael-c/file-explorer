import {Router} from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

router.post('/', (req: any, res: any) => {
    console.log('POST request received');
    const {path: targetPath, name} = req.body;
    if (!targetPath || !name) return res.status(400).json({error: 'Missing path or name'});

    const newFolderPath = path.join(targetPath, name);
    try {
        if (fs.existsSync(newFolderPath)) {
            return res.status(400).json({error: 'Folder already exists'});
        }
        fs.mkdirSync(newFolderPath);
        res.json({success: true});
    } catch {
        res.status(500).json({error: 'Failed to create folder'});
    }
});

export default router;
