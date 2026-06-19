const express = require("express");// iniciar servidor
const app = express();
const rotas = require("./routes")

// MIDDLEWARE //

app.use(express.json())

app.use("/", rotas)

app.listen(3000, () =>{
    console.log("Servidor Rodando!")
});

