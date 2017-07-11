const userModel = require('../models/userModel');

const user = new userModel({
    email: 'asdf@asdf.com',
    password:  '1234',
});

/* This code saves the user to the database
user.save(function (err) {
    if(err){
        console.log(err);
    }
});

*/

/* This code finds a user in the database
userModel.find({
        email: 'asdf@asdf.com',
    }).exec(function (error, response){
        console.log(error);
        console.log(response);
    });
*/