// Helper functions like address validation
const validateAddress = (address) => {
    return address && address.length === 42; // Basic Solana wallet address check
};

module.exports = { validateAddress };
