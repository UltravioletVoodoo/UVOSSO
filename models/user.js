const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema(
    {
        email: {type: String, required: true, max: 100},
        password: {type: String, required: true, max: 20}
    }
);

//Virtual for User's URL
UserSchema
.virtual('url')
.get(function () {
    return '/users/User/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);