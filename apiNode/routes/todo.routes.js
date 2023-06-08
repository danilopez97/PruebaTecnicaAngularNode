const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");

const {
    postTodos,
    getTodos
} = require("../controllers/todo.controller");

const { existTodoById } = require("../helpers/db-validators");


const router = Router();

router.get("/", getTodos);


router.post("/",[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('description', 'La descripción es obligatorio').not().isEmpty(),
    validarCampos
], postTodos); 

router.put("/:todoId",[
    check('id').custom(existTodoById),
]);


module.exports = router;
