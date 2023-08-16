const express = require('express');
const router = express.Router();
const JenisAlatController = require('../controllers/JenisAlatController');

router.post('/', JenisAlatController.create);
router.put('/:id', JenisAlatController.update);
router.delete('/:id', JenisAlatController.delete);
router.get('/', JenisAlatController.findAll);
router.get('/search', JenisAlatController.search);

module.exports = router;
