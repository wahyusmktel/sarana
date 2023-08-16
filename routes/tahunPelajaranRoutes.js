const express = require('express');
const router = express.Router();
const TahunPelajaranController = require('../controllers/TahunPelajaranController');

router.post('/', TahunPelajaranController.create);
router.put('/:id', TahunPelajaranController.update);
router.delete('/:id', TahunPelajaranController.delete);
router.get('/', TahunPelajaranController.findAll);
router.get('/search', TahunPelajaranController.search);

module.exports = router;
