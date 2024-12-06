const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');
const entidadeRoutes = require('./routes/entidadeRoutes');
const { router } = require('./routes/auth');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('MongoDB conectado'))
    .catch((err) => console.log('Erro de conexão com MongoDB:', err));

connectDB();

app.use('/api/entidades', entidadeRoutes);
app.use('/api/auth', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));