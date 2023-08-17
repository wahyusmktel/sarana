const express = require('express');
const router = express.Router();
const KategoriBukuController = require('../controllers/KategoriBukuController');

router.post('/', KategoriBukuController.create);
router.put('/:id', KategoriBukuController.update);
router.delete('/:id', KategoriBukuController.delete);
router.get('/', KategoriBukuController.findAll);
router.get('/search', KategoriBukuController.search);

module.exports = router;
