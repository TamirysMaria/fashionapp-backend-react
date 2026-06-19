const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API do Fashion App funcionando.' }));

app.use('/api/entries', require('./routes/fashionRoutes'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fashion_app_backend_final')
  .then(() => {
    console.log("MongoDB conectado com sucesso");

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log("Erro ao conectar no MongoDB:");
    console.log(err);
  });
