const axios = require('axios');

// Upload data to Arweave
const uploadToArweave = async (data) => {
    try {
        const response = await axios.post('https://arweave.net', data);
        return response.data;
    } catch (err) {
        throw new Error('Failed to upload to Arweave: ' + err.message);
    }
};

module.exports = { uploadToArweave };
