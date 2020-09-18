const emailController = require('../controllers/emailController');
const express = require('express');

const router = express.Router();

router
    .route('/emailSent')
    .post(emailController.writeEmail);

module.exports = router;