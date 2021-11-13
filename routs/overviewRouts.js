const express = require('express');
const overviewController = require('../controllers/overviewController');
const Router = express.Router();
Router.get('/', overviewController.home);
module.exports = Router;

