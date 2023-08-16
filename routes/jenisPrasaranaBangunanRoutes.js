const express = require('express');
const router = express.Router();
const JenisPrasaranaBangunanController = require('../controllers/JenisPrasaranaBangunanController');

//Jenis Prasarana Bangunan
router.post('/', JenisPrasaranaBangunanController.create);
router.put('/:id', JenisPrasaranaBangunanController.update);
router.delete('/:id', JenisPrasaranaBangunanController.delete);
router.get('/', JenisPrasaranaBangunanController.findAll);
router.get('/search', JenisPrasaranaBangunanController.search);

module.exports = router;
