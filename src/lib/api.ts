import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://10.1.1.243:3333';

export const api = axios.create({
    baseURL,
    headers: {
        'ngrok-skip-browser-warning': 'true',
    },
});
