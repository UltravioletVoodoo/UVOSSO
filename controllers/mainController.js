const mainPage = require("../views/mainPage");

const courseModel = require('../models/courseModel.js');

module.exports = function(req, res) {

    if(req.session.email){

        courseModel.find({}).exec(function (error, response){

            courses = []

            for(course in response){
                courses.push(String('\"' + response[course].name + '\"'));
            }


            res.send(mainPage({courses}));
            
        });

        return;
    };

    res.redirect('/login');
};