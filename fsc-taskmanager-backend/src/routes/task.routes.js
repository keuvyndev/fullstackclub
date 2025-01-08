//Importando módulos
const express = require('express');
const TaskModel = require('../models/task.model')

// Definindo rota express
const router = express.Router();

// Efetua requisição GET e exporta na rota 'localhost:8000/tasks'
// Função: Capturar tasks pendentes
router.get("/", async (req, res) => {

   try {

      const tasks = await TaskModel.find({});
      res.status(200).send(tasks);

   } catch (error) {

      res.status(500).send(error.message);
      //console.error(error);

   }

});

// Efetua requisição GET e exporta na rota 'localhost:8000/tasks' com 'id' dinâmico
// Função: Retorna dados de uma task
router.get("/:id", async (req, res) => {
   try {
      const taskParamId = (req.params.id);
      const task = await TaskModel.findById(taskParamId);

      if (!task) {
         return res.status(404).send("Task não encontrada!") // HTTP 404: Não encontrado
      }

      res.status(200).send(task);
   } catch (error) {
      res.send(500).send(error.message);
   }

});

// Efetua requisição POST e exporta na rota 'localhost:8000/tasks'
// Função: Criar uma nova task
router.post("/", async (requisicao, resultado) => {

   try {

      const newTask = new TaskModel(requisicao.body);
      await newTask.save();
      resultado.status(201).send(newTask) // HTTP 201: Criação realizada com sucesso!

   } catch (error) {

      resultado.status(500).send(error.message);

   }

});

// Efetua requisição PATCH e exporta na rota 'localhost:8000/tasks' com 'id' dinâmico
// Função: Retorna uma task atualizada
router.patch("/:id", async (req, res) => {

   try {

      const taskParamId = req.params.id;
      const taskData = req.body;
      const taskToUpdate = await TaskMode.findById(taskParamId);

      // Validando chaves de update do body
      const allowedUpdate = ['isCompleted']
      const requestedUpdates = Object.keys(taskData); // Retorna as chaves do JSON do body

      for (keyToUpdate of requestedUpdates) {
         if (allowedUpdate.includes(keyToUpdate)) {
            taskToUpdate[keyToUpdate] = req.body[keyToUpdate]
         } else {
            return res.status(500).send(`${keyToUpdate} não pode ser alterado!`)
         }
      }
      await taskToUpdate.save();
      res.status(200).send(taskToUpdate)

   } catch (error) {
      res.status(500).send(error.message)
   }

});

// Efetua requisição DELETE e exporta na rota 'localhost:8000/tasks' com 'id' dinâmico
// Função: Deleta uma nova task
router.delete("/:id", async (requisicao, resultado) => {

   try {

      const taskId = requisicao.params.id;
      const taskToDelete = await TaskModel.findById(taskId);

      // Trata retorno caso ID não exista
      if (!taskToDelete) {
         return resultado.status(404).send('Esta tarefa não foi encontrada!') // HTTP 404: Não encontrado
      }

      const deletedTask = await TaskModel.findByIdAndDelete(taskId);
      resultado.status(200).send(deletedTask)

   } catch (error) {

      resultado.status(500).send(error.message)

   }

});

module.exports = router;