const express = require('express');
const router = express.Router();
const KategoriRuangController = require('../controllers/KategoriRuangController');

router.post('/', KategoriRuangController.create);
router.put('/:id', KategoriRuangController.update);
router.delete('/:id', KategoriRuangController.delete);
router.get('/', KategoriRuangController.findAll);
router.get('/search', KategoriRuangController.search);

module.exports = router;
