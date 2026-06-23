// IMPORTAÇÕES //

const express = require("express");
const memory = require("./data/memory");

// ROTEADOR //

const router = express.Router(); 

// ROTAS //

router.get("/todos", (req, res) => { 
    return res.status(200).json({ tarefas: memory.todos })
});

router.post("/todos", (req, res) => { 
    const { titulo, descricao } = req.body

    if(!titulo){ return res.status(400).json({mensagem: "Titulo é obrigatório"}) } 
    
    const novaTarefa = {
        id: memory.nextId++,
        titulo,
        descricao,
        feito: false
    } 

    memory.todos.push(novaTarefa); 

    return res.status(201).json({ 
        mensagem: "Tarefa criada com sucesso",
        tarefaCriada: novaTarefa
    });
});

router.put("/todos/:id", (req, res) => {
    const { id } = req.params; 
    const { titulo, descricao, feito } = req.body 

    const tarefa = memory.todos.find((i) => i.id === parseInt(id));

    if(!tarefa){
        return res.status(404).json({mensagem: "Tarefa não encontrada"})
    }

    if(!titulo && !descricao && feito === undefined){
        return res.status(400).json({mensagem: "Nenhuma informação para atualizar"})
    }

    if(titulo){ tarefa.titulo = titulo };
    if(descricao){ tarefa.descricao = descricao };

    if(feito !== undefined){ tarefa.feito = feito };

    return res.status(200).json({
        mensagem: "Tarefa editada com sucesso",
        tarefaEditada: tarefa
    })
});

router.delete("/todos/:id", (req, res) => {
    const { id } = req.params; 

    if(!id){
        return res.status(400).json({mensagem: "ID é obrigatório"})
    } 

    const deletar = memory.todos.findIndex((i) => i.id === parseInt(id));

    if(deletar === -1){ // o findIndex retorna -1 caso não encontre o item no array
        return res.status(404).json({mensagem: "Tarefa não encontrada"})
    }

    memory.todos.splice(deletar, 1)

    return res.status(200).json({
        mensagem: "Tarefa deletada com sucesso",
    }) 
});

// EXPORTAÇÕES //

module.exports = router; 
