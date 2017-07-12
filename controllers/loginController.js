const loginPage = require('../views/loginPage');
const userModel = require('../models/userModel');


//Loading the login page
module.exports = function(req, res) {
    res.send(loginPage());
};

//logs the user in
module.exports.login = function(req, res) {

    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    //validation step

    userModel.userExists({email: email, password: password}, function(exists) {
        if(!exists){
            //run error
            res.send(loginPage({
                error: 'Invallid Email/Password',
            }));
            return;
        }

        res.redirect('/home');


    });
}
