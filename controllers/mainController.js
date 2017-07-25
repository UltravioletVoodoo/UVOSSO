const mainPage = require('../views/mainPage');
const errorView = require('../views/error');

const courseModel = require('../models/courseModel.js');
const userModel = require('../models/userModel');


//Load the main page
module.exports = function(req, res) {

    if(req.session.email){

        courseModel.find({}).exec(function (error, response){

            userModel.find({email: req.session.email}).exec(function (err, resp){

                for(x in resp){
                    userCourses = resp[x].courses;
                }  

                courses = []

                for(course in response){
                    courses.push(String('\"' + response[course].name + '\"'));
                }
                res.send(mainPage({courses, userCourses}));
                
        });
        });
        return;
    };
    res.redirect('/login');
};


//Adds a course to a user
module.exports.addCourse = function(req, res) {

    const course = req.sanitize('course').escape();

    var errors = [];

    //Make sure that the course isnt already associated with the user
    

    
    
    console.log("Attempting to add " + course + " to the user with email: " + req.session.email);

    //modify the current user, to contain the course

    newCourses = []

    userModel.find({email: req.session.email}).exec(function (error, response){

        

        for(x in response){
            console.log(response[x].courses);
            newCourses = newCourses.concat(response[x].courses);
        }    
    
     

    newCourses.push(course);

    userModel.update({email: req.session.email}, {
        courses: newCourses,
    },  function (err, numberAffected, rawResponse){
    });

    });

   


    res.redirect('/home');

    return;

}