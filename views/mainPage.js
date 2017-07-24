const base = require("./base");

module.exports = function(context) {
    return base({
        title: 'Home',
        content: `
        
        <h1>MAIN PAGE</h1>

        <input type="button" value="Log out" onclick="location.href='/login/logout'">

        <pre>

        <!doctype html>
            <html lang = "en">
            <head>
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
                <div class = "ui-widget">
                    <label for = "automplete-1">Tags: </label>
                    <input id = "automplete-1">
                </div>
            </body>
            </html>
        </pre>

        `
    })
}