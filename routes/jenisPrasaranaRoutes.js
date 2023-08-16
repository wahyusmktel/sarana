const express = require('express');
const router = express.Router();
const JenisPrasaranaController = require('../controllers/JenisPrasaranaController');

//Jenis Prasarana
router.get('/', JenisPrasaranaController.findAll);
router.get('/search', JenisPrasaranaController.search);
router.post('/', JenisPrasaranaController.create);
router.put('/:id', JenisPrasaranaController.update);
router.delete('/:id', JenisPrasaranaController.delete);

module.exports = router;
