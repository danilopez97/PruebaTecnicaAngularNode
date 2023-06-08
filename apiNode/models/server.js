const express = require('express')
const app = express()
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.todosPath = '/api/todos';

        this.app.use(cors());

        // PARSEO Y LECTURA DEL BODY CON JSON
        this.app.use(express.json());


        // rutas de la aplicacion
        this.routes();

    }



    routes() {
        this.app.use(this.todosPath, require('../routes/todo.routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corrigendo', this.port);
        });
    }


}

module.exports = Server;