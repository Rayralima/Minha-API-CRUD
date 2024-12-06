const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/dbConfig');
const entidadeRoutes = require('./routes/entidadeRoutes');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/entidades', entidadeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/minha-api';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB conectado!'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

mongoose.connect(MONGO_URI);

