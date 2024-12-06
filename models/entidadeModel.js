const mongoose = require('mongoose');

const EntidadeSchema = mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entidade', EntidadeSchema);
