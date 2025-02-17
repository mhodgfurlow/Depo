// Validation for Solana wallet address
export const validateWalletAddress = (address) => {
    return address && address.length === 42; // Solana wallet address length check
};
