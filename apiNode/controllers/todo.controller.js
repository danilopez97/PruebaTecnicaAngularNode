const { response, request } = require("express");
const Todo  = require("../models/Todo.model");

const getTodos = (req= request, res= response) => {

    const todos = Todo.getAllTodos();



    res.status(201).json({
        status: true,
        message:'Creado correctamente' ,
        data: todos
      });

}

const postTodos = (req= request, res= response) => {

    const { name, description } = req.body;


    const todoId = Todo.getSize();
    Todo.add(todoId, name, description);



    res.status(201).json({
        status: true,
        message:'Creado correctamente' ,
      });

}



module.exports = {
    postTodos,
    getTodos
};