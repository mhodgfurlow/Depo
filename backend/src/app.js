const express = require('express');
const tokenRoutes = require('./routes/tokenRoutes');
const logger = require('./config/logger');
const errorHandler = require('./config/errorHandler');

const app = express();
app.use(express.json());

// Routes
app.use('/api/tokens', tokenRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
