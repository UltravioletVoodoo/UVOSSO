const exec = require('child_process').exec;

const courseModel = require('../models/courseModel');


module.exports = function(req, res){

    exec('python  ./util/courseScraper.py', function(err, stdout, stderr){
        if(err){
            console.log(err);

            res.send(errorView({
                error: err
            }));
            return;
        }


        let final_data_list = JSON.parse(stdout);
        
        for (program of final_data_list){
            const name = program.name;
            for (courseNum of program.numbers){
                console.log(name + ' ' + courseNum);

                const course = new courseModel({
                    name: name + ' ' + courseNum,
                    deliverables: generateDeliverables(),
                });

                course.save(function (err) {
                    if(err){
                        console.log(err);

                        res.send(errorView({
                            error: err
                        }));
                        return;
                    }
                });


            }
        }

        res.send(final_data_list);
    });        
}

function generateDeliverables(){
    var Assignments = generateAssignments();
    var Quizzes     = generateQuizzes();
    var Midterms    = generateMidterms();
    var Finals      = generateFinals();
    var Misc        = generateMisc();
    
    return Assignments.concat(Quizzes).concat(Midterms).concat(Finals).concat(Misc);
}

function generateAssignments(){
    var num = getRandomInt(40,60);
    var Assignments = [];

    for (var i = 0; i < num; i++){
        Assignments.push({
            type: "Assignment",
            dueDate: generateDate(),
            name: "Assignment " + (i+1),
        });
    }
    return Assignments;
}

function generateQuizzes(){
    var num = getRandomInt(30,60);
    var Quizzes = [];

    for (var i = 0; i < num; i++){
        Quizzes.push({
            type: "Quiz",
            dueDate: generateDate(),
            name: "Quiz " + (i+1),
        });
    }
    return Quizzes;
}

function generateMidterms(){
    var num = getRandomInt(6,9);
    var Midterms = [];

    for (var i = 0; i < num; i++){
        Midterms.push({
            type: "Midterm",
            dueDate: generateDate(),
            name: "Midterm " + (i+1),
        });
    }
    return Midterms;
}

function generateFinals(){
    var num = getRandomInt(3,3);
    var Finals = [];

    for (var i = 0; i < num; i++){
        Finals.push({
            type: "Final",
            dueDate: generateDate(),
            name: "Final " + (i+1),
        });
    }
    return Finals;
}

function generateMisc(){
    var num = getRandomInt(3,3);
    var Misc = [];

    for (var i = 0; i < num; i++){
        Misc.push({
            type: "Misc",
            dueDate: generateDate(),
            name: generateMiscName(),
        });
    }
    return Misc;
}

function generateMiscName(){
    var possibles = ["Review session", "Field trip", "Presentation"];
    
    return possibles[getRandomInt(0,2)];
}

function generateDate(){

    var start = new Date(2017, 1, 1);
    var end   = new Date(2018, 1, 1);

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}