function errors (err, req, res, next) { // eslint-disable-line no-unused-vars
    const status = err.status || 404;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
}
module.exports= errors;