const express = require("express");
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');



//ROTAS DA HOME
router.get("/", homeController.paginaInicial);
router.post("/", homeController.trataPost);



//ROTAS DE CONTATO
router.get("/contato", contatoController.paginaInicial);

module.exports = router;