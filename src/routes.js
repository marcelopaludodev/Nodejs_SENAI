// CRIANDO SERVIDOR COM EXPRESS //

const express = require("express");
const { todos } = require("./data/memory.js");

const router = express.Router(); // ROTEADOR

router.get("/todos", (req, res) => { // GET
    return res.status(200).json({
        tarefa: todos
    }) // listar todos as tarefas
})

router.post("/todos", (req, res) => { // POST
    const { titulo, descricao } = req.body // puxando dados

    if(!titulo){
        return res.status(400).json({mensagem: "Titulo é obrigatório"})
    } // erro se não tiver titulo
    
    const novaTarefa = {
        id: new Date().toString(),
        titulo,
        descricao,
        feito: false
    } // criar nova tarefa

    todos.push(novaTarefa); // colocar nova tarefa no array

    return res.status(201).json({ 
        mensagem: "Tarefa criada com sucesso",
        tarefaCriada: novaTarefa
    }) // informar que a tarefa foi criada com sucesso
})

router.put("/todos:titulo", (req, res) => {
    const { titulo } = req.body

    if(!titulo){ 
        return res.status(400).json({mensagem: "Titulo é obrigatório"})
    } // erro se não tiver titulo

    if(titulo === titulo){

    } // verificar se o titulo conferente com o titulo da tarefa que deseja editar

    return res.status(200).json({
        mensagem: "Tarefa editada com sucesso",
        
    }) // informar que a tarefa foi editada com sucesso
});

router.delete("/todos:titulo", (req, res) => {
    const { titulo } = req.body;

    if(!titulo){

    } // erro se não tiver titulo

    if(titulo === titulo){

    }

    return res.status(200).json({
        mensagem: "Tarefa deletada com sucesso"
    }) // informar que a tarefa foi deletada com sucesso
});


module.exports = router; // EXPORTAR ROTEADOR
