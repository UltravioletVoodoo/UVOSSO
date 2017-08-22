const base = require("./base");

const dateFormat = require("dateformat");

module.exports = function(context={}) {

    //making sure the error isnt undefined
    context.error = context.error || '';

    var coursesHTML = "";

    var relevantCourses = {};


    for (course of context.allCourses){
        if(context.userCourses.includes(course.name)){
            relevantCourses[course.name] = course.deliverables;
        }
    }

    var eventColors = [
        '#1dd8fc',
        '#e70d08',
        '#6e55d6',
        '#40d253',
        '#024d96',
        '#a82e07',
        '#d4a6fb',
    ];

    var calendarEvents = [];
    

    var i = 0;
    for(var y = 0; i < context.userCourses.length; y++){
        var x = context.userCourses[y];

        var deliverables = {
            Assignment: [],
            Quiz: [],
            Midterm: [],
            Final: [],
            Misc: [],
        };


        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        for(deliverable of relevantCourses[x]){
            
            if(deliverable.dueDate >= firstDay && deliverable.dueDate <= lastDay){
                calendarEvents.push({title: x + '\n' + deliverable.name, start : deliverable.dueDate, color: eventColors[i]});
                deliverables[deliverable.type].push(deliverable.name + " " + "[" + dateFormat(deliverable.dueDate, "dddd, mmm dS, yyyy") + "]");
            }
        }

        coursesHTML += `
        <div id="${x}">
        <h3 style="color:${eventColors[i]}">${x}</h3>
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
        i = (i+1) % eventColors.length;
    };

    return base({
        title: 'Home',
        content: `

        <!-- Top Bar -->
        <input type="button" value="Log out" onclick="location.href='/login/logout'">

        
        <!-- Javascript -->
        <script>
            $(function() {
                var availableCourses  =  ${JSON.stringify(context.courseNames)};
                $( "#automplete-1" ).autocomplete({
                source: availableCourses
                });
            });


            $(document).ready(function() {

                // page is now ready, initialize the calendar...

                $('#calendar').fullCalendar({
                    // put your options and callbacks here
                    events: ${JSON.stringify(calendarEvents)}
                })
            });



        </script>
        <!-- HTML --> 


        <!-- CALENDAR -->
        <div id='calendar'></div>


        <!-- ADD COURSE -->
        <form class ="ui-widget" action="/home/addCourse" method="post">
            <label for ="automplete-1">Type course name to add: </label>
            <input id ="automplete-1" name="course">
        <input type="submit" value="add">
        </form>

        <!-- Submission Errors -->
        <p>${context.error}</p>

        <!-- Courses -->
        ${coursesHTML}


        `
    })
}