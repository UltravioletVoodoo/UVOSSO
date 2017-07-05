const express = require('express');
const router = express.Router();

//Require all of my controllers
const userController = require('../controllers/userController');

//Require all of my views
const base = require('../views/base');
const error = require('../views/error.js');
const login_page = require('../views/login_page');

// ROUTES BEGIN HERE //

//Redirect to the login page if searched forward slash
router.get('/', (req, res) => res.redirect('/catalog/login_page'));

//Get the login page
router.get('/login_page', (req, res) =>
    res.send(base( {
        active : 'login_page',
        class : 'container',
        content : login_page(),
    })));

//Get the main page
router.get('/main_page', (req, res) =>
    res.send(base( {
        active : 'main_page',
        class : 'container',
        content : main_page(),
    })));


router.use((req, res) =>
    res.status(404).send(base({
        active : '404',
        content : error({
            error: '404 Error',
            message: `Oh no! you are lost! If I were you I'd try retracing my steps and running home as fast as I could!`
        })
    })));

module.exports = router;