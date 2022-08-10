const express = require("express");
const router = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');


//ROTAS DA HOME
router.get("/", homeController.paginaInicial);
router.post("/", homeController.trataPost);



//ROTAS DE CONTATO
router.get("/contato", contatoController.paginaInicial);

module.exports = router;