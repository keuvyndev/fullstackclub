const { Schema, model } = require("mongoose")

// Definindo estrutura do schema
const TaskSchema = Schema({
   description: {
      type: String,
      required: true,
   },
   isCompleted: {
      type: Boolean,
      default: false,
   },
})

// Define o nome da tabela como 'Task'
const TaskModel = model("Task", TaskSchema);

// Exporta o módulo
module.exports = TaskModel;