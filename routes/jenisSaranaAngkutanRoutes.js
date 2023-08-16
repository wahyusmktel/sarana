const express = require('express');
const router = express.Router();
const JenisSaranaAngkutanController = require('../controllers/JenisSaranaAngkutanController');

router.post('/', JenisSaranaAngkutanController.create);
router.put('/:id', JenisSaranaAngkutanController.update);
router.delete('/:id', JenisSaranaAngkutanController.delete);
router.get('/', JenisSaranaAngkutanController.findAll);
router.get('/search', JenisSaranaAngkutanController.search);

module.exports = router;
