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

router.post('/login/login', loginController.login);

/* GET register page */
router.get('/register', registerController);

router.post('/register/createUser', registerController.createUser);

/* GET main page */
router.get('/home', mainController);



module.exports = router;
