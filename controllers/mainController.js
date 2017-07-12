const mainPage = require("../views/mainPage");

module.exports = function(req, res) {

    if(req.session.email){
        res.send(mainPage());
        return;
    }

    res.redirect('/login');
};