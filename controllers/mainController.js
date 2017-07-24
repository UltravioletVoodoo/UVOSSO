const mainPage = require("../views/mainPage");

const courseModel = require('../models/courseModel.js');

module.exports = function(req, res) {

    if(req.session.email){

        courseModel.find({}).exec(function (error, response){
            console.log(error);
            console.log(response);

            res.send(mainPage({courses: response}));
            
        });

        return;
    }

    res.redirect('/login');
};