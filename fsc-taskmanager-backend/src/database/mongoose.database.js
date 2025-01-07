const mongoose = require('mongoose');

// Efetua conexão com o banco de dados MongoDB Cloud usando as enviroments
const connectToDatabase = async () => {

   try {
      await mongoose.connect(process.env.DB_URL).then(console.log('MongoDB conectando...'))
      console.log("MongoDB conectado!");
   } catch (error) {
      console.error(`Erro ao conectar-se com o MongoDB: ${error}`);
   }
}

// Exporta o módulo
module.exports = connectToDatabase;