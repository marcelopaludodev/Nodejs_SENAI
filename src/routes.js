// SERVIDOR E IMPORTAÇÕES //

const express = require("express");
const { todos } = require("./data/memory.js");

// ROTEADOR //

const router = express.Router(); 

// ROTAS //

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

router.put("/todos/:titulo", (req, res) => {
    const { titulo } = req.params; // puxando o titulo da url
    const { novoTitulo } = req.body // puxando o novo titulo do body

    const tarefa = todos.find(tarefa => tarefa.titulo === titulo) // encontrar tarefa pelo titulo

    if(!tarefa){
        return res.status(404).json({mensagem: "Tarefa não encontrada"})
    }

    if(!novoTitulo){
        return res.status(400).json({mensagem: "Nenhuma informação para atualizar"})
    }

    tarefa.titulo = novoTitulo; // atualizar o titulo da tarefa

    return res.status(200).json({
        mensagem: "Tarefa editada com sucesso",
        tarefaEditada: tarefa
    })
});

router.delete("/todos/:titulo", (req, res) => {
    const { titulo } = req.params; // puxando o titulo da url

    if(!titulo){
        return res.status(400).json({mensagem: "Titulo é obrigatório"})
    } // erro se não tiver titulo

    const tarefaID = todos.findIndex(tarefa => tarefa.titulo === titulo) // encontrar tarefa pelo titulo

    if(tarefaID === -1){
        return res.status(404).json({mensagem: "Tarefa não encontrada"})
    }

    todos.splice(tarefaID, 1) // deletar tarefa do array

    return res.status(200).json({
        mensagem: "Tarefa deletada com sucesso",
        restantes: todos
    }) 
});

// EXPORTAÇÕES //

module.exports = router; 
