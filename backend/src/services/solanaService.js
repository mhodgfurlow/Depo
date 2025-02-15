const { Connection, PublicKey, Transaction, SystemProgram, Keypair } = require('@solana/web3.js');
const { SECRET_KEY } = require('../config');

// Solana Connection Setup
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

// Placeholder wallet (use a real wallet or keypair in production)
const payer = Keypair.fromSecretKey(Uint8Array.from(SECRET_KEY));

// Public key for the waitlist (simulated for now)
const waitlistAccountPubKey = new PublicKey('8hf9wz82szfZyBB9eq7bqZBe2cZ2E5ndbk8y8i5DAW74'); // Replace with actual program account

// Add Wallet to Waitlist Logic
const addToWaitlist = async (walletAddress) => {
    try {
        // Create transaction to add wallet address to the waitlist account
        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: payer.publicKey,
                newAccountPubkey: waitlistAccountPubKey,
                lamports: await connection.getMinimumBalanceForRentExemption(100),
                space: 100, // Space for account data
                programId: waitlistAccountPubKey, // Use program's public key (mocked in this case)
            }),
            SystemProgram.transfer({
                fromPubkey: payer.publicKey,
                toPubkey: waitlistAccountPubKey,
                lamports: 100, // Some token amount or data for transaction
            })
        );

        // Send transaction to Solana
        const signature = await connection.sendTransaction(transaction, [payer]);

        // Wait for the transaction to confirm
        await connection.confirmTransaction(signature);

        return {
            transactionSignature: signature,
            waitlistAccount: waitlistAccountPubKey.toBase58(),
            status: "Waitlist added successfully"
        };
    } catch (err) {
        console.error('Failed to add wallet to waitlist: ', err);
        throw new Error('Failed to add wallet to waitlist: ' + err.message);
    }
};

// Mint Token Logic (simplified for demonstration)
const mintToken = async (walletAddress) => {
    try {
        // Create a new transaction for minting token (mocked here for simplicity)
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: payer.publicKey,
                toPubkey: new PublicKey(walletAddress),
                lamports: 1000000, // Minting some amount of "tokens" (lamports as a placeholder)
            })
        );

        // Send the transaction
        const signature = await connection.sendTransaction(transaction, [payer]);

        // Wait for the transaction to confirm
        await connection.confirmTransaction(signature);

        return {
            transactionSignature: signature,
            tokenAddress: walletAddress,
            status: "Token minted successfully"
        };
    } catch (err) {
        console.error('Minting token failed: ', err);
        throw new Error('Minting failed: ' + err.message);
    }
};

module.exports = { mintToken, addToWaitlist };
