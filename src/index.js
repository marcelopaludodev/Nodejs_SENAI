// CRIANDO O SERVIDOR //

const express = require("express");
const servidor = express();
const middlewares = require("./auth.js")

// IMPORTAÇÕES //

const rotas = require("./routes")

// USES //

servidor.use(middlewares.middlewareSenha)
servidor.use(express.json())
servidor.use("/", rotas)

// RODANDO O SERVIDOR //

servidor.listen(3000, () =>{
    console.log("Servidor Rodando!")
});

