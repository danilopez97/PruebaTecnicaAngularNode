
const Todo  = require("../models/Todo.model");




const existTodoById = async (id) => {
    const todo = Todo.getById(id);

    if (!todo) {
        throw new Error(`El id ${id}, no existe`);
    }

}



module.exports = {
    existTodoById,
}