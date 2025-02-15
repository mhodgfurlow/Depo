
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    if (err.response && err.response.data) {
        res.status(err.response.status || 500).json({
            message: err.response.data.message || 'External service error'
        });
    } else {
        res.status(err.status || 500).json({
            message: err.message || 'Internal Server Error'
        });
    }
};

module.exports = errorHandler;
