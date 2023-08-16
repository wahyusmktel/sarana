const express = require('express');
const router = express.Router();
const KondisiRuangController = require('../controllers/KondisiRuangController');

router.post('/', KondisiRuangController.create);
router.put('/:id', KondisiRuangController.update);
router.delete('/:id', KondisiRuangController.delete);
router.get('/', KondisiRuangController.findAll);
router.get('/search', KondisiRuangController.search);

module.exports = router;
