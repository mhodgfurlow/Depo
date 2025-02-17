import { useState } from 'react';
import { addToWaitlist } from '../services/api';

const useWaitlistForm = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setWalletAddress(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage('');

        try {
            const data = await addToWaitlist(walletAddress);  // Sending request to backend
            setSuccessMessage(data.message);  // Transaction details returned from backend
        } catch (error) {
            setError(error.message);  // Handle error if backend call fails
        } finally {
            setLoading(false);
        }
    };

    return {
        walletAddress,
        loading,
        error,
        successMessage,
        handleChange,
        handleSubmit,
    };
};

export default useWaitlistForm;
