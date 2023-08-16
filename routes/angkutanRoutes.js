const express = require('express');
const router = express.Router();
const AngkutanController = require('../controllers/AngkutanController');

router.post('/', AngkutanController.create);
router.put('/:id', AngkutanController.update);
router.delete('/:id', AngkutanController.delete);
router.get('/', AngkutanController.findAll);
router.get('/search', AngkutanController.search);

module.exports = router;
