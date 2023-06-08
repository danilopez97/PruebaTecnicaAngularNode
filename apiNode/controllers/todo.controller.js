const { response, request } = require("express");
const Todo = require("../models/Todo.model");

const getTodos = (req = request, res = response) => {

    try {
        const todos = Todo.getAllTodos();

        res.status(200).json({
            status: true,
            message: 'Datos cargados',
            data: todos
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            message: 'Ha ocurrido un error',

        });
    }



}

const postTodos = (req = request, res = response) => {

    try {
        const { name, description } = req.body;


        const todoId = Todo.getSize();
        Todo.add(todoId, name, description);



        res.status(201).json({
            status: true,
            message: 'Creado correctamente',
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Ha ocurrido un error',

        });
    }



}



module.exports = {
    postTodos,
    getTodos
};