exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é um valor local !!!!';
    next();
};

exports.checkCsfrError = (err, req, res, next) => {
    console.log('checkCsfrError');  
    if (err && 'EBADCSRFTOKEN' === err.code ) {
        return res.render('404');
    }
    next();
}

