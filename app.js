
//require my dependencies
const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const validator    = require('express-validator');
const session      = require('express-session');

//require my routes
var index = require('./routes/index');

var app = express();

//Views
const errorView = require('./views/error');

//Set up the database stuff
mongoose.Promise = global.Promise;

//Update the following line with your own mlab URI in the quotes
mongoose.connect('');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//Setting up middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    //Secret is a secret! It must remain a secret for my code to be secure!
    secret: 'zslkmkjz,lcpcjoh9zx,.qphy6hr[3wjn [W3RIOIGH;A\IEHGAYI58',
    resave: false,
    saveUninitialized: true,
}));


//Set up routes
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 
  res.status(err.status || 500);
  res.send(errorView({
    error: err
  }));
});

module.exports = app;
