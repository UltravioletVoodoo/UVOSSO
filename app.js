/**
Name: Jonathan Bezeau
Application: UVOSSO
 */

console.log(
`
                   _______  _______  _______  _______ 
|\\     /||\\     /|(  ___  )(  ____ \\(  ____ \\(  ___  )
| )   ( || )   ( || (   ) || (    \\/| (    \\/| (   ) |
| |   | || |   | || |   | || (_____ | (_____ | |   | |
| |   | |( (   ) )| |   | |(_____  )(_____  )| |   | |
| |   | | \\ \\_/ / | |   | |      ) |      ) || |   | |
| (___) |  \\   /  | (___) |/\\____) |/\\____) || (___) |
(_______)   \\_/   (_______)\\_______)\\_______)(_______)
                                                      
`
);


//Load Express
const express = require('express')
//Load mongoose
const mongoose = require('mongoose')

//set up things
const app = express()

//set up database things
const mongoDB = 'mongodb://UVOSSO_Admin:guenhwyvar@ds149382.mlab.com:49382/uvosso';
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Views
const base = require('./views/base');
const error = require('./views/error');
const login_page = require('./views/login_page');

//Routes
const index = require('./routes/index');
const users = require('./routes/users');

app.use('/users', users);

app.use(express.static('public'));

//Redirects the initial page to the login page
app.use('/', index);

//Loads the login page
app.get('/login_page', (req, res) =>
    res.send(base({
        active  : 'login_page',
        class   : 'container',
        content : login_page(),
    })));



app.use((req, res) =>
    res.status(404).send(base({
        active : '404',
        content : error({
            error: '404 Error',
            message: `Oh no! you are lost! If I were you I'd try retracing my steps and running home as fast as I could`
        })
    })));

app.listen(9000, () => console.log('Server started on 9000'));