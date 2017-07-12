const emailValidator = require('email-validator');

const registerPage = require('../views/registerPage');

const list = require('../views/util/list');

const userModel = require('../models/userModel');

//Loading the register page
module.exports = function(req, res) {
    res.send(registerPage());
};

//creates a user
module.exports.createUser = function(req, res) {

    console.log(req.sanitize('email').escape());

    const email = req.sanitize('email').escape();
    const password1 = req.sanitize('password1').escape();
    const password2 = req.sanitize('password2').escape();
    //validate the shit

    //allowing us to list all errors at once
    var errors = [];


    //step 1: passwords the same
    if(password1 !== password2){
        //run some error
        errors.push('Your passwords didn\'t match');
    }

    //step 2: email is actually an email
    if(!(emailValidator.validate(email))){
        //run some error
        errors.push('Your email is not in a valid format');
    }

    //step 3: User doesnt already exist
    userExists(email, function(exists) {
        console.log(exists);
        if(exists) {
            // run some error
            errors.push('Email address is already registered with another account');
        }
        
        //Pop-up error messages
        if (errors.length > 0){
            res.send(registerPage({
                error: list(errors),
            }));
            return;
        }
        // save the stuff

        const user = new userModel({
            email: email,
            password: password1,
        });

        user.save(function (err) {
            if (err){
                console.log(err);

                res.send(errorView({
                    error: err
                }));
                return ;
            }

            //redirect them to the login page
            res.redirect('/login');

        });
    
    });

};

function userExists(email, cb){
    return userModel.find({
        email: email,
    }).exec(function (error, response){
        console.log(error);
        console.log(response);

        cb(response && response.length > 0);
    });
}
