const express = require('express');
const Router = express.Router();
const { signup } = require('../controllers/auth'); // import signup controller

Router.get('/signup', signup);

module.exports = Router;