const Entidade = require('../models/entidadeModel');

// Criar uma nova entidade
exports.createEntidade = async (req, res) => {
    try {
        const entidade = new Entidade(req.body);
        const savedEntidade = await entidade.save();
        res.status(201).json(savedEntidade);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Ler todas as entidades
exports.getEntidades = async (req, res) => {
    try {
        const entidades = await Entidade.find();
        res.json(entidades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ler uma entidade por ID
exports.getEntidadeById = async (req, res) => {
    try {
        const entidade = await Entidade.findById(req.params.id);
        if (!entidade) return res.status(404).json({ message: 'Entidade não encontrada' });
        res.json(entidade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar uma entidade
exports.updateEntidade = async (req, res) => {
    try {
        const updatedEntidade = await Entidade.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEntidade) return res.status(404).json({ message: 'Entidade não encontrada' });
        res.json(updatedEntidade);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Excluir uma entidade
exports.deleteEntidade = async (req, res) => {
    try {
        const deletedEntidade = await Entidade.findByIdAndDelete(req.params.id);
        if (!deletedEntidade) return res.status(404).json({ message: 'Entidade não encontrada' });
        res.json({ message: 'Entidade excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
