// CRIANDO O SERVIDOR //

const express = require("express");
const app = express();

// IMPORTAÇÕES //

const rotas = require("./routes")

// MIDDLEWARES //

app.use(express.json()) // formatador de json
app.use("/", rotas)

// RODANDO O SERVIDOR //

app.listen(3000, () =>{
    console.log("Servidor Rodando!")
});

