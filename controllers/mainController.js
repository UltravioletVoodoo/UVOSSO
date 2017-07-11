const mainPage = require("../views/mainPage");

module.exports = function(req, res) {
    res.send(mainPage());
};