const loginPage = require('../views/loginPage');

module.exports = function(req, res) {
    res.send(loginPage());
};