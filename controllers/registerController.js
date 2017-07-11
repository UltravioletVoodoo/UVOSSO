const registerPage = require('../views/registerPage');

module.exports = function(req, res) {
    res.send(registerPage());
};