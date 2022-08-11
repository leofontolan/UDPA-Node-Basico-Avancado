module.exports = (req, res, next) => {
    console.log();
    console.log('Middleware Global executado');
    console.log();
    next();
}