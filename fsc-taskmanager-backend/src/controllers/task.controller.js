const TaskModel = require("../models/task.model")

class TaskController {

   // --- PARÂMETROS DA CLASSE

   constructor(req, res) {
      this.req = req;
      this.res = res;
   }

   // --- MÉTODOS DA CLASSE

   /* 
   * Objetivo: Capturar todas as Tasks.
   * Descrição: Efetua requisição GET e retornando todas as tasks.
   */

   async getTasks() {
      try {
         const tasks = await TaskModel.find({});
         res.status(200).send(tasks);
      } catch (error) {
         res.status(500).send(error.message);
         //console.error(error);
      }
   }
}

module.exports = TaskController;