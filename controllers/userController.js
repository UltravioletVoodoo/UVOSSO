const User = require('../models/user');

//This is where I put functions to handle things... i think

exports.user_create_post = function(req, res, next) {

    req.checkbody('password', 'Password required').notEmpty();
    req.checkbody('email', 'Email required').notEmpty();

    const user = new User( {
        email : req.body.email,
        password : req.body.password,
    });

    console.log('Email : ' + user.email);
    console.log('Password : ' + user.password);

}



/*
Example from mozilla express tutorial 


exports.author_list = function(req, res) {
    res.send('NOT IMPLEMENTED : Author list');
};

end of example
*/
