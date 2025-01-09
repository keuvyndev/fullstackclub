const TaskModel = require("../models/task.model")

class TaskController {

   // --- PARÂMETROS DA CLASSE

   constructor(req, res) {
      this.req = req;
      this.res = res;
   }

   // --- MÉTODOS DA CLASSE

   /* 
   * Objetivo do método: Capturar todas as Tasks.
   * Descrição: Efetua requisição GET e retornando todas as tasks.
   */

   async getAll() {
      try {
         const tasks = await TaskModel.find({});
         this.res.status(200).send(tasks);
      } catch (error) {
         this.res.status(500).send(error.message);
         //console.error(error);
      }
   }

   /* 
   * Objetivo do método: Captura uma task através da ID.
   * Descrição: Efetua requisição do tipo GET e retorna apenas a task que corresponda com a 'id' caso exista.
   */

   async getById() {
      try {
         const taskId = (this.req.params.id);
         const task = await TaskModel.findById(taskId);
         if (!task) {
            this.res.status(404).send("Task não encontrada!");
         }
         this.res.status(200).send(task);
      } catch (error) {
         this.res.status(500).send(error.message);
      }
   }


   /* 
   * Objetivo do método: Criar nova task.
   * Descrição: Efetua requisição do tipo POST criando uma nova task apartir do body.
   */

   async post() {
      try {
         const newTask = new TaskModel(this.req.body);
         await newTask.save();
         this.res.status(201).send(newTask) // HTTP 201: Criação realizada com sucesso!
      } catch (error) {
         this.res.status(500).send(error.message);
      }
   }

   /* 
   * Objetivo do método: Atualizar o 'isComplete' de uma task.
   * Descrição: Efetua requisição do tipo PATCH atribuindo o novo status a task através da ID.
   */

   async patch() {

      try {
         const taskParamId = this.req.params.id;
         const taskData = this.req.body;
         const taskToUpdate = await TaskModel.findById(taskParamId);

         // Validando chaves de update do body
         const allowedUpdate = ['isCompleted']
         const requestedUpdates = Object.keys(taskData); // Retorna as chaves do JSON do body

         for (keyToUpdate of requestedUpdates) {
            if (allowedUpdate.includes(keyToUpdate)) {
               taskToUpdate[keyToUpdate] = this.req.body[keyToUpdate]
            } else {
               return this.res.status(500).send(`${keyToUpdate} não pode ser alterado!`)
            }
         }
         await taskToUpdate.save();
         this.res.status(200).send(taskToUpdate)

      } catch (error) {
         this.res.status(500).send(error.message)
      }
   }

   /* 
   * Objetivo do método: Deletar uma task através da ID.
   * Descrição: Efetua requisição do tipo DELETE deletando a task que corersponda a ID caso exista.
   */

   async delete() {
      try {
         const taskId = this.req.params.id;
         const taskToDelete = await TaskModel.findById(taskId);
         // Trata retorno caso ID não exista
         if (!taskToDelete) {
            return this.res.status(404).send('Esta tarefa não foi encontrada!') // HTTP 404: Não encontrado
         }
         const deletedTask = await TaskModel.findByIdAndDelete(taskId);
         this.res.status(200).send(deletedTask)
      } catch (error) {
         this.res.status(500).send(error.message)
      }
   }
}

module.exports = TaskController;