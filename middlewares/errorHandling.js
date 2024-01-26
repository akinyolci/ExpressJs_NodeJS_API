module.exports = (err, req, res, next) => {
    //const statusCode = err.statusCode || 500; // Varsayılan olarak 500 kullan
    res.status(err.statusCode).json(err);
};
