const solanaService = require('../services/solanaService');

// Mint a token
const mintToken = async (req, res) => {
    const { walletAddress } = req.body;

    try {
        const { transactionSignature, tokenAddress, status } = await solanaService.mintToken(walletAddress);
        res.status(200).send({
            message: 'Token minted successfully!',
            transactionSignature,
            tokenAddress,
            status
        });
    } catch (err) {
        res.status(500).send({
            error: 'Minting failed',
            details: err.message,
        });
    }
};

// Add to waitlist
const addToWaitlist = async (req, res) => {
    const { walletAddress } = req.body;

    try {
        const { transactionSignature, waitlistAccount, status } = await solanaService.addToWaitlist(walletAddress);
        res.status(200).send({
            message: 'Added to waitlist successfully!',
            transactionSignature,
            waitlistAccount,
            status
        });
    } catch (err) {
        res.status(500).send({
            error: 'Failed to add to waitlist',
            details: err.message,
        });
    }
};

module.exports = { mintToken, addToWaitlist };
