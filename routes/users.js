const express = require('express');
const router = express.Router();

//Require controller modules
var userController = require('../controllers/userController');

/// USER ROUTES ///

/*
Example from mozilla express tutorial

// GET catalog home page
router.get('/', book_controller.index);


end of example
*/

module.exports = router;