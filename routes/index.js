const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const mainController = require('../controllers/mainController');

/* GET login page. */
router.get('/', function(req, res, next) {
    res.redirect('/login');
});

router.get('/login', loginController);

/* GET register page */
router.get('/register', registerController);

/* GET main page */
router.get('/home', mainController);



module.exports = router;
