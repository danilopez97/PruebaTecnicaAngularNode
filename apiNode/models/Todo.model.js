const todos = [];

class Todo {
    constructor(todoId, name, description) {
      this.todoId = todoId;
      this.name = name;
      this.description = description;
    }

    static getAllTodos() {
        return todos;
    }

    static getById() {
        todos.find(item => {
            if(item.todoId === id) {
                return item
            }
        });
        return null;
    }

    static getSize() {
        return todos.length + 1
    }

    static add(todoId,title, description) {
   
        const todo = new Todo(todoId, title, description);
        todos.push(todo);
      }

}

module.exports = Todo;