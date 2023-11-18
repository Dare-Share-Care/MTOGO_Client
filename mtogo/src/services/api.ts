import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Base URL from environment variable
    // Other configurations like headers can go here
});

// Add any interceptors you need here, for example, for handling tokens
api.interceptors.request.use(config => {
    // Modify config or add authentication headers
    return config;
});

export default api;