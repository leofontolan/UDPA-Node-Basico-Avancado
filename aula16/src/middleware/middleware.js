module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é um valor local';
    next();
}