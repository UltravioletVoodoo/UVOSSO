const mongoose = require('mongoose');

const Schema = mongoose.Schema;

DeliverableSchema = new Schema({
    name: {type: String, required: true},
    due_date: {type: Date, required: true},
    type: {type: String, required: true},
});

const deliverableModel = mongoose.model('DeliverableModel', DeliverableSchema);
module.exports = courseModel;