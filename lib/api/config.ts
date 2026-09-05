import axios from "axios";

export const api = axios.create({
    baseURL: process.env.VITE_TMDB_BASE_URL,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.VITE_TMDB_TOKEN}`,
    }
})