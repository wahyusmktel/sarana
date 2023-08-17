const express = require('express');
const router = express.Router();
const BukuController = require('../controllers/BukuController');

router.post('/', BukuController.create);
router.put('/:id', BukuController.update);
router.delete('/:id', BukuController.delete);
router.get('/', BukuController.findAll);
router.get('/search', BukuController.search);

module.exports = router;
