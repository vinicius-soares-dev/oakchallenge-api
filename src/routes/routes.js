// Importar o Express e criar um objeto Router
const express = require("express");
const router = express.Router();

// Importar o controlador e o middleware
const registerController = require("../controllers/RegisterController");
const Validation = require("../middleware/validation");

// Definir rotas e associar a funções de controlador
router.get("/", registerController.read); // Rota para ler todos os registros 

router.post("/", Validation, registerController.create); // Rota para criar um novo registro com validação

router.delete("/:id", registerController.delete); // Rota para excluir um registro por ID

module.exports = router;