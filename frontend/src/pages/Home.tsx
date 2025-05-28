import {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';

type Entry = {
    name: string;
    isDirectory: boolean;
};

export default function Home() {
    const [path, setPath] = useState('C:\\');
    const [entries, setEntries] = useState<Entry[]>([]);

    const fetchData = async (targetPath: string) => {
        try {
            const res = await axios.get('http://localhost:3001/api/explore', {
                params: {path: targetPath}
            });
            setPath(res.data.path);
            setEntries(res.data.entries);
        } catch (err) {
            alert('Error reading folder');
        }
    };

    useEffect(() => {
        fetchData(path);
    }, []);

    const handleClick = (entry: Entry) => {
        if (entry.isDirectory) {
            fetchData(path + '\\' + entry.name);
        }
    };

    const goBack = () => {
        const parent = path.split('\\').slice(0, -1).join('\\') || 'C:\\';
        fetchData(parent);
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
        </div>
    );
}
