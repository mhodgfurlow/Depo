const { uploadToArweave } = require('../backend/services/areweaveService');
const axios = require('axios');
jest.mock('axios');

describe('Arweave Service', () => {
  it('should upload data to Arweave successfully', async () => {
    const mockResponse = { data: 'arweave_transaction_hash' };
    axios.post.mockResolvedValue(mockResponse);

    const result = await uploadToArweave({ data: 'test_data' });

    expect(result.data).toBe('arweave_transaction_hash');
  });

  it('should handle errors in uploading to Arweave', async () => {
    axios.post.mockRejectedValue(new Error('Failed to upload to Arweave'));

    try {
      await uploadToArweave({ data: 'test_data' });
    } catch (e) {
      expect(e.message).toBe('Failed to upload to Arweave');
    }
  });
});
