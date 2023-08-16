const express = require('express');
const router = express.Router();
const BangunanController = require('../controllers/BangunanController');

router.post('/', BangunanController.create);
router.put('/:id', BangunanController.update);
router.delete('/:id', BangunanController.delete);
router.get('/', BangunanController.findAll);
router.get('/search', BangunanController.search);

module.exports = router;
