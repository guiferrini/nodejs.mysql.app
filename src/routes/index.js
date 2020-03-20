//guardar tds as rotas principais da aplicação
const express = require('express'); //solicita express p criar as rotas
const router = express.Router(); //metodo chamado Router(), armazeno o obejeto

router.get('/', (req, res) => { //definindo uma rota '/'
    res.send('Hello word');
});

module.exports = router; //exporta o objeto router

//tenho q ir em index.js, rotas e solicitar!