import axios from 'axios';

// Axios instance for API calls
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

// Send wallet address to backend to mint a token
export const mintToken = async (walletAddress) => {
    try {
        const response = await api.post('/tokens/mint', { walletAddress });
        return response.data;  // Transaction details returned from backend
    } catch (error) {
        throw new Error(error.response ? error.response.data.error : 'Failed to mint token');
    }
};

// Send wallet address to backend to add to the waitlist
export const addToWaitlist = async (walletAddress) => {
    try {
        const response = await api.post('/tokens/waitlist', { walletAddress });
        return response.data;  // Transaction details returned from backend
    } catch (error) {
        throw new Error(error.response ? error.response.data.error : 'Failed to add to waitlist');
    }
};
