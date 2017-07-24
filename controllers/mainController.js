const mainPage = require('../views/mainPage');
const errorView = require('../views/error');

const courseModel = require('../models/courseModel.js');
const userModel = require('../models/userModel');


//Load the main page
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


//Adds a course to a user
module.exports.addCourse = function(req, res) {

    const course = req.sanitize('course').escape();

    //Make sure that the course isnt already associated with the user
        //Gonna do this one with eric I think
    
    console.log("Attempting to add " + course + " to the user with email: " + req.session.email);

}