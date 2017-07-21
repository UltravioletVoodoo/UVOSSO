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