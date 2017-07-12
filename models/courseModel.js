const mongoose = require('mongoose');

const Schema = mongoose.Schema;

CourseSchema = new Schema( {
    name: {type: String, required: true},
    lectureTime: {type: Array, required: true},
    deliverable: {type: Objectid, required: true},
});

const courseModel = mongoose.model('CourseModel', CourseSchema);
module.exports = courseModel;