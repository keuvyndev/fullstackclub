const mongoose = require('mongoose');

const connectToDatabase = async () => {

   try {
      await mongoose.connect(process.env.DB_URL).then(console.log('MongoDB conectando...'))
      console.log("MongoDB conectado!");
   } catch (error) {
      console.error(`Erro ao conectar-se com o MongoDB: ${error}`);
   }
}

module.exports = connectToDatabase;