const request = require('supertest');
const app = require('../backend/app'); // Assuming app.js is the entry point for the backend server
const solanaService = require('../backend/services/solanaService');
const { mockSolanaMinting, mockWaitlistAddition } = require('./mockServices');

// Mock Solana service
jest.mock('../backend/services/solanaService');

describe('Token Routes', () => {
  
  // Test minting tokens
  describe('POST /api/tokens/mint', () => {
    it('should mint a token successfully for a valid wallet address', async () => {
      mockSolanaMinting.mockResolvedValue({
        transactionSignature: 'abcdef12345',
        tokenAddress: 'valid_wallet_address',
        status: 'Token minted successfully',
      });

      const res = await request(app)
        .post('/api/tokens/mint')
        .send({ walletAddress: 'valid_wallet_address' });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Token minted successfully!');
      expect(res.body.transactionSignature).toBe('abcdef12345');
    });

    it('should return an error for an invalid wallet address', async () => {
      const res = await request(app)
        .post('/api/tokens/mint')
        .send({ walletAddress: '' });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Invalid wallet address');
    });
  });

  // Test adding to the waitlist
  describe('POST /api/tokens/waitlist', () => {
    it('should add the wallet address to the waitlist', async () => {
      mockWaitlistAddition.mockResolvedValue({
        transactionSignature: 'abcdef12345',
        waitlistAccount: 'mock_waitlist_account',
        status: 'Waitlist added successfully',
      });

      const res = await request(app)
        .post('/api/tokens/waitlist')
        .send({ walletAddress: 'valid_wallet_address' });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Added to waitlist successfully!');
      expect(res.body.transactionSignature).toBe('abcdef12345');
    });

    it('should return an error for an invalid wallet address on waitlist', async () => {
      const res = await request(app)
        .post('/api/tokens/waitlist')
        .send({ walletAddress: '' });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Invalid wallet address');
    });
  });
});
