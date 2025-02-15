const express = require('express');
const router = express.Router();

const tokenRoutes = require('./tokenRoutes');

router.use('/tokens', tokenRoutes);

module.exports = router;
