const mainPage = require("../views/mainPage");
const errorView = require('..views/error');

const courseModel = require("../models/courseModel");

//creates a course
module.exports.createCourse = function(req, res) {

    const name = req.sanitize('name').escape();

    //one validation step

    courseModel.courseExists({name : name} , function(exists) {
        if(exists) {
            res.send(mainPage({
                error: "Course already exists!"
            }));
            return;
        }

        const course = new courseModel({
            name : name,
        });


    });
}