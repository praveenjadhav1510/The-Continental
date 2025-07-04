const express = require('express');
const router = express.Router();
const { login, register, book } = require('../controllers/authController');

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// booking
router.post('/book', book);

module.exports = router;
