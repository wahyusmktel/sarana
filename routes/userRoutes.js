const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Route to create a new user
router.post('/create', userController.createUser);

module.exports = router;
