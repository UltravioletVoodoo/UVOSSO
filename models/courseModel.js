const mongoose = require('mongoose');

const Schema = mongoose.Schema;

CourseSchema = new Schema( {
    name: {type: String, required: true},
    deliverables: {type: Array, required: true},
    /*
    {type: assignment or quiz or midterm or final or misc,
    dueDate: date element
    name: Assignment 2
    
    }
     */
});

const courseModel = mongoose.model('CourseModel', CourseSchema);
module.exports = courseModel;