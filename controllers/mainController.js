const mainPage = require('../views/mainPage');
const errorView = require('../views/error');

const courseModel = require('../models/courseModel.js');
const userModel = require('../models/userModel');

const list = require('../views/util/list');



//Load the main page
module.exports = function(req, res) {

    if(req.session.email){

        courseModel.find({}).exec(function (error, allCourses){
        userModel.find({email: req.session.email}).exec(function (err, users){

            var [{allCourses : userCourses}] = users;

            courseNames = allCourses.map(function(row) {
                return row.name;
            });

            res.send(mainPage({courseNames, allCourses, userCourses}));
                
        });
        });
        return;
    };
    res.redirect('/login');
};


//Adds a course to a user
module.exports.addCourse = function(req, res) {

    const course = req.sanitize('course').escape().toUpperCase();

    var errors = [];

    //Validation steps

        //Make sure that the course isnt already associated with the user
        //Make sure that the course they entered exists on the course list

    
    
    console.log("Attempting to add " + course + " to the user with email: " + req.session.email);

    //modify the current user, to contain the course

    courseModel.find({}).exec(function(courseError, allCourses) {
    userModel.find({email: req.session.email}).exec(function (userError, users) {

        if(courseError) {
            // handle the case that the database can't get the courses
            errors.push("Database was unable to find the course list");
        }
        if(userError) {
            // handle the case that the database can't get the user
            errors.push("Database could not find the user");
        }

        // validate that course is in allCourses
        var validCourse = false;
        for(x of allCourses){
            if (x.name === course){
                validCourse = true;
            }
        }
        if(!validCourse){
            errors.push("The course you added is invalid, please choose from the drop down list");
        }

        var [{courses : userCourses}] = users;
        /*
        for(x of users) {
            console.log(x.courses);
            userCourses = x.courses;
        }
        */
        
        // validate that course is NOT in userCourses
        for (x of userCourses){
            if (x === course){
                errors.push("Course is already associated with your account");
            }
        }
    

        if (errors.length > 0){
            courseNames = allCourses.map(function(row) {
                return row.name;
            });
            res.send(mainPage({
                userCourses,
                courseNames,
                allCourses,
                error: list(errors),
            }));
            return;
        }
        userCourses.push(course);
        userModel.update({email: req.session.email}, { courses: userCourses },  function (error, numberAffected, rawResponse) {
            if(error) {
                // handle case where database was unable to update user
            }
            res.redirect('/home');
        });

    });});

}

module.exports.deleteCourse = function(req, res) {

    const course = req.sanitize('course').escape();

    console.log("Deleting " + course + " from user with email: " + req.session.email);

    userModel.find({email: req.session.email}).exec(function (userError, users) {

        var [{courses : userCourses}] = users;

        userCourses = userCourses.filter(function(c){
            return c !== course;
        });



    userModel.update({email: req.session.email}, { courses: userCourses },  function (error, numberAffected, rawResponse) {
        res.redirect('/home');
    });
    });

}