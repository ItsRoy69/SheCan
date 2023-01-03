const express = require('express');
const router = express.Router();

const {registerUser, loginUser} = require('../controllers/AuthController');

// register the user
router.post('/register', registerUser);

// login the user
router.post('/login', loginUser);

module.exports = router;

