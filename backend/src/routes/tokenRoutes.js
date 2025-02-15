const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

// Token routes
router.post('/mint', tokenController.mintToken); // Mint a token
router.post('/waitlist', tokenController.addToWaitlist); // Add to waitlist

module.exports = router;
