module.exports = function(context) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <title>${context.title}</title>
        <meta charset = "utf-8">
        

        <!-- Base Stylesheet -->
        <link href='/stylesheets/style.css' rel='stylesheet'></link>

        <!-- Bootstrap stylesheet -->
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous"> -->

        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="/javascripts/moment.js"></script>
   

        <!-- Bootstrap's Javascript plugins -->
        <!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script> -->


        <!-- FullCalendar -->
        <link  href="/stylesheets/fullcalendar.css" rel ="stylesheet">        
        <script src="/javascripts/fullcalendar.js"></script>

        <!-- AutoComplete table -->
        <link  href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel ="stylesheet">
        <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
        
        
        </head>

    <body>
        ${context.content}
    </body>
  </html>
  `
}