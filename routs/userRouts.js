const express = require('express');
const authController = require('../controllers/authController');
const Router = express.Router();
Router.post('/sendEmail', authController.sendEmail);
module.exports = Router;