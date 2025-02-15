const axios = require('axios');

// Pull repository data from GitHub
const getRepoData = async (repoUrl) => {
    try {
        const response = await axios.get(repoUrl);
        return response.data;
    } catch (err) {
        throw new Error('Failed to fetch data from GitHub: ' + err.message);
    }
};

module.exports = { getRepoData };
