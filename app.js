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

//Routes
const index = require('./routes/index');
const catalog = require('./routes/catalog');

app.use(express.static('public'));

//Allows the routes to control routing completely
app.use('/', index);
app.use ('/catalog', catalog);


app.listen(9000, () => console.log('Server started on 9000'));