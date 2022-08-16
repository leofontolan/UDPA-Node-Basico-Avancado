exports.paginaInicial = (req, res) => {

  res.render("index", {
    title: 'Esse será o título da página',
    numbers: [1, 2, 3, 4, 5]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(`
        <h1>Ola ${req.body.name}</h1>
    `);
  return;
};
