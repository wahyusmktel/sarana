const express = require('express');
const router = express.Router();
const RuangController = require('../controllers/RuangController');

router.post('/', RuangController.create);
router.put('/:id', RuangController.update);
router.delete('/:id', RuangController.delete);
router.get('/', RuangController.findAll);
router.get('/search', RuangController.search);

module.exports = router;
