const mongoose = require('mongoose');

const Schema = mongoose.Schema;

CourseSchema = new Schema( {
    name: {type: String, required: true},
    deliverable: {type: Schema.ObjectId, ref: 'DeliverableModel'},
});

const courseModel = mongoose.model('CourseModel', CourseSchema);
module.exports = courseModel;