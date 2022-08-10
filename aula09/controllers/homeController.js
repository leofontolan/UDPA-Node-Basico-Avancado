exports.paginaInicial = (req, res) => {
    res.send(`
          <form action="/" method="post">
          Nome: <input type="text" name="name" placeholder="name">
          <button type="submit">Enviar Nome</button>
      `);
};

exports.trataPost = (req, res) => {
    res.send(`
        <h1>Ola ${req.body.name}</h1>
    `);
};