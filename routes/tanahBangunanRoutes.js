const express = require('express');
const router = express.Router();
const TanahBangunanController = require('../controllers/TanahBangunanController');

//Tanah & Bangunan
router.post('/', TanahBangunanController.create);
router.put('/:id', TanahBangunanController.update);
router.delete('/:id', TanahBangunanController.delete);
router.get('/', TanahBangunanController.findAll);
router.get('/search', TanahBangunanController.search);

module.exports = router;
