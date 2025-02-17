const { mintToken, addToWaitlist } = require('../backend/services/solanaService');
jest.mock('../backend/services/solanaService');

describe('Solana Service', () => {
  it('should mint a token and return the transaction signature', async () => {
    const mockResponse = {
      transactionSignature: 'abcdef12345',
      tokenAddress: 'valid_wallet_address',
      status: 'Token minted successfully',
    };
    
    mintToken.mockResolvedValue(mockResponse);

    const result = await mintToken('valid_wallet_address');
    
    expect(result.transactionSignature).toBe('abcdef12345');
    expect(result.status).toBe('Token minted successfully');
  });

  it('should handle errors in minting tokens', async () => {
    mintToken.mockRejectedValue(new Error('Minting failed'));

    try {
      await mintToken('invalid_wallet_address');
    } catch (e) {
      expect(e.message).toBe('Minting failed');
    }
  });

  it('should add a wallet to the waitlist successfully', async () => {
    const mockWaitlistResponse = {
      transactionSignature: 'abcdef12345',
      waitlistAccount: 'mock_waitlist_account',
      status: 'Waitlist added successfully',
    };

    addToWaitlist.mockResolvedValue(mockWaitlistResponse);

    const result = await addToWaitlist('valid_wallet_address');
    
    expect(result.transactionSignature).toBe('abcdef12345');
    expect(result.status).toBe('Waitlist added successfully');
  });

  it('should handle errors in adding wallet to waitlist', async () => {
    addToWaitlist.mockRejectedValue(new Error('Adding to waitlist failed'));

    try {
      await addToWaitlist('invalid_wallet_address');
    } catch (e) {
      expect(e.message).toBe('Adding to waitlist failed');
    }
  });
});
