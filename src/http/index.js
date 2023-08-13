import axios from 'axios';

export const API_URL = "https://api.escuelajs.co/api/v1"

const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (true) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/refresh-token`, { headers: {"Authorization" : `Bearer ${localStorage.refresh_token}`} })
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export default $api;
