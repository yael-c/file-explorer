import {Router, Request, Response} from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const {path: targetPath, name} = req.body;
    if (!targetPath || !name) {
        res.status(400).json({error: 'Missing path or name'});
        return;
    }

    const newFolderPath = path.join(targetPath, name);
    try {
        if (fs.existsSync(newFolderPath)) {
            res.status(400).json({error: 'Folder already exists'});
            return;
        }
        fs.mkdirSync(newFolderPath);
        res.json({success: true});
    } catch {
        res.status(500).json({error: 'Failed to create folder'});
    }
});

export default router;
