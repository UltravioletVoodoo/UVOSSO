module.exports = function(context) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
        <title>${context.title}</title>

        <link href='/stylesheets/style.css' rel='stylesheet'></link>

        <meta charset = "utf-8">
        <link  href="/stylesheets/fullcalendar.css" rel ="stylesheet">
        <link  href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel ="stylesheet">
        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
        <script src="/javascripts/moment.js"></script>
   
        <script src="/javascripts/fullcalendar.js"></script>

        </head>

    <body>
        ${context.content}
    </body>
  </html>
  `
}