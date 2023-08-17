const express = require('express');
const router = express.Router();
const PenerbitBukuController = require('../controllers/PenerbitBukuController');

router.post('/', PenerbitBukuController.create);
router.put('/:id', PenerbitBukuController.update);
router.delete('/:id', PenerbitBukuController.delete);
router.get('/', PenerbitBukuController.findAll);
router.get('/search', PenerbitBukuController.search);

module.exports = router;
