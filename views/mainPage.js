const base = require("./base");

const dateFormat = require("dateformat");

module.exports = function(context={}) {

    //making sure the error isnt undefined
    context.error = context.error || '';

    var coursesHTML = "";

    var relevantCourses = {};

    for (course of context.courses){
        if(context.userCourses.includes(course.name)){
            relevantCourses[course.name] = course.deliverables;
        }
    }


    for(x of context.userCourses){

        var deliverables = {
            Assignment: [],
            Quiz: [],
            Midterm: [],
            Final: [],
            Misc: [],
        };

        for(deliverable of relevantCourses[x]){
            deliverables[deliverable.type].push(deliverable.name + " " + "[" + dateFormat(deliverable.dueDate, "dddd, mmm dS, yyyy") + "]");
        }

        coursesHTML += `
        <div id="${x}">
        <h3>${x}</h3>
        <form action="/home/deleteCourse" method="post">
            <input type="hidden" value="${x}" name="course">
        <input type="submit" value="Delete">
        </form>

        <p><b>Assignments:</b> ${deliverables.Assignment.join(", ")}</p>
        <p><b>Quizzes:</b> ${deliverables.Quiz.join(", ")}</p>
        <p><b>Midterms:</b> ${deliverables.Midterm.join(", ")}</p>
        <p><b>Finals:</b> ${deliverables.Final.join(", ")}</p>
        <p><b>Misc:</b> ${deliverables.Misc.join(", ")}</p>

        <hr>




        </div>`
    };

    return base({
        title: 'Home',
        content: `
        

        <!DOCTYPE html>
        <h1>MAIN PAGE</h1>
        <html lang = "en">
        <head>

            <!-- Top Bar -->
            <input type="button" value="Log out" onclick="location.href='/login/logout'">


            <meta charset = "utf-8">
            <title>jQuery UI Autocomplete functionality</title>
            <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
                rel = "stylesheet">
            <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
            <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
            
            <!-- Javascript -->
            <script>
                $(function() {
                    var availableCourses  =  ${JSON.stringify(context.courseNames)};
                    $( "#automplete-1" ).autocomplete({
                    source: availableCourses
                    });
                });
            </script>
        </head>
            
            <body>
                <!-- HTML --> 


                <!-- ADD COURSE -->
                <form class ="ui-widget" action="/home/addCourse" method="post">
                    <label for ="automplete-1">Tags: </label>
                    <input id ="automplete-1" name="course">
                <input type="submit" value="add">
                </form>


                <!-- Courses -->
                ${coursesHTML}

                <!-- Submission Errors -->
                <p>${context.error}</p>

            </body>
        </html>

        `
    })
}