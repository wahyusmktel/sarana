const express = require('express');
const router = express.Router();
const KategoriAlatController = require('../controllers/KategoriAlatController');

router.post('/', KategoriAlatController.create);
router.put('/:id', KategoriAlatController.update);
router.delete('/:id', KategoriAlatController.delete);
router.get('/', KategoriAlatController.findAll);
router.get('/search', KategoriAlatController.search);

module.exports = router;
