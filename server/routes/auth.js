const express = require('express');
const Router = express.Router();
const { signup } = require('../controllers/auth'); // import signup controller
const { userSignupValidator } = require('../validators/auth'); // import userSignupValidator
const { runValidation } = require('../validators'); // import runValidation

Router.post('/signup', userSignupValidator, runValidation, signup);

module.exports = Router;