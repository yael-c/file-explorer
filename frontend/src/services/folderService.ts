import axios from 'axios';

export const fetchFolder = (path: string) =>
    axios.get('http://localhost:3001/api/explore', {params: {path}});

export const createFolder = (path: string, name: string) =>
    axios.post('http://localhost:3001/api/create-folder', {path, name});