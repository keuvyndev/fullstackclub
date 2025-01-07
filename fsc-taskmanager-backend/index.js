// Importa bibliotecas externas
const express = require("express");
const dotenv = require("dotenv");

//Importa bibliotecas internas
const connectToDatabse = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

// Configura variáveis de ambiente
dotenv.config();
const app = express();

connectToDatabse();

// Efetuando requisição e exportando na rota 'localhost:8000/tasks'
app.get("/tasks", async (req, res) => {

   const tasks = await TaskModel.find({});
   res.status(200).send(tasks);

});

app.listen(8000, () => console.log("Listening on port 8000!"));