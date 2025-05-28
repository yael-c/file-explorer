import {useEffect, useState} from 'react';
import './Home.css';
import {fetchFolder, createFolder} from '../services/folderService';

type Entry = {
    name: string;
    isDirectory: boolean;
};

export default function Home() {
    const [path, setPath] = useState('C:\\');
    const [entries, setEntries] = useState<Entry[]>([]);

    const load = async (targetPath: string) => {
        try {
            const res = await fetchFolder(targetPath);
            setPath(res?.data?.path);
            setEntries(res?.data?.entries);
        } catch {
            alert('Failed to read folder');
        }
    };

    useEffect(() => {
        load(path);
    }, []);

    const handleClick = (entry: Entry) => {
        if (entry.isDirectory) {
            const newPath = path + '\\' + entry.name;
            load(newPath);
        }
    };

    const goBack = () => {
        const parent = path.split('\\').slice(0, -1).join('\\');
        load(parent);
    };

    const handleCreateFolder = async () => {
        const name = prompt('Enter new folder name:');
        if (!name) return;
        try {
            await createFolder(path, name);
            load(path);
        } catch {
            alert('Could not create folder');
        }
    };

    return (
        <div>
            <h2>Current Path: {path}</h2>
            <ul>
                {path !== 'C:\\' && <li key='[..]' onClick={() => goBack()} className={'folder'}>[..]</li>}
                {entries.map(e => (
                    <li key={e.name} onClick={() => handleClick(e)}
                        className={e.isDirectory ? 'folder' : 'file'}
                    >
                        {e.isDirectory ? `[${e.name}]` : e.name}
                    </li>
                ))}
            </ul>
            <button onClick={handleCreateFolder}>New Folder</button>
        </div>
    );
}
