const express = require('express');
const router = express.Router();
const { register, login, protect } = require('../controller/authController');

// Auth routes
router.post('/register', register);
router.post('/login', login);

// Test protected route
router.get('/profile', protect, (req, res) => {
    res.status(200).json({
        success: true,
        message: 'You have access to this protected route',
        user: req.user
    });
});

module.exports = router;

