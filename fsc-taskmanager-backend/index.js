const express = require("express");
const dotenv = require('dotenv');

const connectToDatabse = require('./src/database/mongoose.database');
dotenv.config();

const app = express();
connectToDatabse();

app.get("/tasks", (req, res) => {
   const tasks = [{ item: "Tarefa", realizada: true }]
   res.status(200).send(obj);
});

app.listen(8000, () => console.log("Listening on port 8000!"));