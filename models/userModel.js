const mongoose = require('mongoose');

const Schema = mongoose.Schema;

UserSchema = new Schema( {
    email: {type: String, required: true},
    password: {type: String, required: true, maxlength: 20}, 
});

module.exports = mongoose.model('UserModel', UserSchema);