require('dotenv').config();

module.exports = {
    SOLANA_RPC_URL: process.env.SOLANA_RPC_URL,
    ARWEAVE_API_URL: process.env.ARWEAVE_API_URL,
    SECRET_KEY: process.env.SECRET_KEY ? JSON.parse(process.env.SECRET_KEY) : null,
};
