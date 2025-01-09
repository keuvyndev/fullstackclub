// Importa os módulos externos
const express = require("express");
const dotenv = require("dotenv");
const TaskRouter = require('./src/routes/task.routes')

// Importa os módulos internos
const connectToDatabase = require('./src/database/mongoose.database')
const TaskModel = require('./src/models/task.model')

// Carrega as variáveis de ambiente
dotenv.config();

// Inicializa o express e permite uso de JSON no body
const app = express();
app.use(express.json());

connectToDatabase();

// Recebe rotas tercerizadas
app.use('/tasks', TaskRouter);

// Se não encontrar PORT nas variáveis de ambiente, usará 8000
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}!`));