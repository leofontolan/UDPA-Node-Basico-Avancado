const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "Um título de teste",
  descricao: "Uma descrição de teste",
})
  .then((dados) => console.log(dados))
  .catch((erro) => console.log(erro));

exports.paginaInicial = (req, res) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(`
        <h1>Ola ${req.body.name}</h1>
    `);
  return;
};
