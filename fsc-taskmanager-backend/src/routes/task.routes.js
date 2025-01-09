//Importando módulos
const express = require('express');
const TaskController = require('../controllers/task.controller')
const TaskModel = require('../models/task.model')

// Definindo rota express
const router = express.Router();

// Efetua requisição GET e exporta na rota 'localhost:8000/tasks'
// Função: Retorna todas as tasks
router.get("/", async (req, res) => {
   return new TaskController(req, res).getAll();
});

// Efetua requisição GET e exporta na rota 'localhost:8000/tasks' com 'id' dinâmico
// Função: Retorna dados de uma task
router.get("/:id", async (req, res) => {
   return new TaskController(req, res).getById();
});

// Efetua requisição POST e exporta na rota 'localhost:8000/tasks'
// Função: Criar uma nova task
router.post("/", async (req, res) => {
   return new TaskController(req, res).create();
});

// Efetua requisição PATCH e exporta na rota 'localhost:8000/tasks' com 'id' dinâmico
// Função: Retorna uma task atualizada
router.patch("/:id", async (req, res) => {
   return new TaskController(req, res).update();
});

// Efetua requisição DELETE e exporta na rota 'localhost:8000/tasks' com 'id' dinâmico
// Função: Deleta uma nova task
router.delete("/:id", async (req, res) => {
   return new TaskController(req, res).delete();
});

module.exports = router;