const express = require('express');
const router = express.Router();
const AsetAlatController = require('../controllers/AsetAlatController');

router.post('/', AsetAlatController.create);
router.put('/:id', AsetAlatController.update);
router.delete('/:id', AsetAlatController.delete);
router.get('/', AsetAlatController.findAll);
router.get('/search', AsetAlatController.search);

module.exports = router;
