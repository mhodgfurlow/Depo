const { getRepoData } = require('../backend/services/githubService');
const axios = require('axios');
jest.mock('axios');

describe('GitHub Service', () => {
  it('should fetch data from GitHub successfully', async () => {
    const mockResponse = { data: { repo: 'Depo' } };
    axios.get.mockResolvedValue(mockResponse);

    const result = await getRepoData('https://api.github.com/repos/Depo');

    expect(result.repo).toBe('Depo');
  });

  it('should handle errors when fetching GitHub data', async () => {
    axios.get.mockRejectedValue(new Error('GitHub API error'));

    try {
      await getRepoData('https://api.github.com/repos/Depo');
    } catch (e) {
      expect(e.message).toBe('GitHub API error');
    }
  });
});
