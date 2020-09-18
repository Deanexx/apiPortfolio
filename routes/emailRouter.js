const emailController = require('../controllers/emailcontroller');
const express = require('express');

const router = express.Router();

router
    .route('/emailSent')
    .post(emailController.writeEmail);

module.exports = router;