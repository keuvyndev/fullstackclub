// Importa bibliotecas externas
const express = require("express");
const dotenv = require("dotenv");

//Importa bibliotecas internas
const connectToDatabse = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

// Configura variáveis de ambiente
dotenv.config();
const app = express();
app.use(express.json()); //Permite receber JSON na body das requisições

connectToDatabse();

// Efetua requisição GET e exporta na rota 'localhost:8000/tasks'
// Função: Capturar tasks pendentes
app.get("/tasks", async (req, res) => {

   try {

      const tasks = await TaskModel.find({});
      res.status(200).send(tasks);

   } catch (error) {

      res.status(500).send(error.message);
      //console.error(error);

   }

});

// Efetua requisição POST e exporta na rota 'localhost:8000/tasks'
// Função: Criar uma nova task
app.post("/tasks", async (requisicao, resultado) => {
   try {

      const newTask = new TaskModel(requisicao.body);
      await newTask.save();
      resultado.status(201).send(newTask) // HTTP 201: Criação realizada com sucesso!

   } catch (error) {

      resultado.status(500).send(error.message)

   }
});

// Efetua requisição DELETE e exporta na rota 'localhost:8000/tasks' com 'id' dinâmico
// Função: Deleta uma nova task
app.delete("/tasks/:id", async (requisicao, resultado) => {

   try {

      const taskId = requisicao.params.id

      const taskToDelete = await TaskModel.findById(taskId);

      // Trata retorno caso ID não exista
      if (!taskToDelete) {
         return resultado.status(500).send('Esta tarefa não foi encontrada!')
      }

      const deletedTask = await TaskModel.findByIdAndDelete(taskId);
      resultado.status(200).send(deletedTask)

   } catch (error) {

      resultado.status(500).send(error.message)

   }

});

app.listen(8000, () => console.log("Listening on port 8000!"));