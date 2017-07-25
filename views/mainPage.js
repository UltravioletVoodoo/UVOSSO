const base = require("./base");

module.exports = function(context) {
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
                    var availableCourses  =  [${context.courses}];
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

                <p>${context.userCourses}</p>
            </body>
        </html>

        `
    })
}