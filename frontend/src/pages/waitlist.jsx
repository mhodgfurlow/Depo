import React from 'react';
import useWaitlistForm from '../hooks/useWaitlistForm';

const WaitlistPage = () => {
    const {
        walletAddress,
        loading,
        error,
        successMessage,
        handleChange,
        handleSubmit,
    } = useWaitlistForm();

    return (
        <div>
            <h2>Join the Waitlist</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={walletAddress}
                    onChange={handleChange}
                    placeholder="Enter your Solana wallet address"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Join Waitlist'}
                </button>
            </form>
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
        </div>
    );
};

export default WaitlistPage;
