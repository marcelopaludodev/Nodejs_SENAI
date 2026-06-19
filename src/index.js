const express = require("express");
const app = express();

const rotas = require("./routes") // puxando o roteador (rotas)

app.use(express.json()) // formatador de json
app.use("/", rotas)

app.listen(3000, () =>{
    console.log("Servidor Rodando!")
});

