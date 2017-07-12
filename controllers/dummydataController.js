//This file is used to generate dummy data courses with dummy data deliverables for the database

const courseModel = require('../models/courseModel');
const deliverableModel = require('../models/deliverableModel');

module.exports.createDummyData = function(req, res) {
    
    const name = req.sanitize('name').escape();
    const due_date = req.sanitize('due_date').escape();
    const type = req.sanitize('type').escape();

    //validate the data

    //step 1: 
}