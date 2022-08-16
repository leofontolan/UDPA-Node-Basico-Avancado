exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(`
        <h1>Ola ${req.body.name}</h1>
    `);
    return;
};