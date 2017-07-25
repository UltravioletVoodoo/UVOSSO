const mongoose = require('mongoose');

const Schema = mongoose.Schema;

UserSchema = new Schema( {
    email: {type: String, required: true},
    password: {type: String, required: true, maxlength: 20},
    courses: {type: Array},
});

const userModel = mongoose.model('UserModel', UserSchema);
module.exports = userModel;


module.exports.userExists = function userExists(criteria, cb){
    return userModel.find(criteria).exec(function (error, response){
        console.log(error);
        console.log(response);

        cb(response && response.length > 0);
    });
}