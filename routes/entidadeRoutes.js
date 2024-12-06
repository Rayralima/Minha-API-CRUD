const express = require('express');
const router = express.Router();
const {
    createEntidade,
    getEntidades,
    getEntidadeById,
    updateEntidade,
    deleteEntidade
} = require('../controllers/entidadeController');

router.post('/', createEntidade);
router.get('/', getEntidades);
router.get('/:id', getEntidadeById);
router.put('/:id', updateEntidade);
router.delete('/:id', deleteEntidade);

module.exports = router;
