const emailValidator = require('email-validator');

const registerPage = require('../views/registerPage');
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

    //step 1: passwords the same
    if(password1 !== password2){
        //run some error
        res.send('Passwords did not match');
        return;
    }

    //step 2: email is actually an email
    if(!(emailValidator.validate(email))){
        //run some error
    }

    //step 3: User doesnt already exist
    userExists(email).then(function(exists) {
        if(exists) {
            // run some error
        }
    
        // save the stuff
    
    });

};

function userExists(email){
    return userModel.find({
        email: email,
    }).exec(function (error, response){
        console.log(error);
        console.log(response);

        return response && response.length > 0;

    });
}
