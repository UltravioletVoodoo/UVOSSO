module.exports = function(context) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <title>${context.title}</title>
        <meta charset = "utf-8">
        

        <!-- Base Stylesheet -->
        <link href='/stylesheets/style.css' rel='stylesheet'></link>

        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="/javascripts/moment.js"></script>
   
        <!-- FullCalendar -->
        <link  href="/stylesheets/fullcalendar.css" rel ="stylesheet">        
        <script src="/javascripts/fullcalendar.js"></script>

        <!-- AutoComplete table -->
        <link  href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel ="stylesheet">
        <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
        
        </head>

    <body>
        <!-- TOP BAR -->
        <ul id="top_bar">
            <img id="UVOSSO_logo" alt="UVOSSO LOGO" src="/images/Logo.png" width="50px" height="50px">
            <div id="div_logout_button">
                <input type="button" value="Log out" onclick="location.href='/login/logout'">            
            </div>
            </ul>
        ${context.content}
    </body>
  </html>
  `
}