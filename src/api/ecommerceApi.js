import axios from 'axios';

const VITE_API_URL = "https://e-commerce-backend-production-74d1.up.railway.app/api";

const ecommerceAPI = axios.create({
    baseURL: VITE_API_URL
});

// INTERCEPTORES
ecommerceAPI.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default ecommerceAPI;