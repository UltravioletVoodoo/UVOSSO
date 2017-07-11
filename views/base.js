module.exports = function(context) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
        <title>${context.title}</title>

        <link href='/stylesheets/style.css' rel='stylesheet'></link>
    </head>

    <body>
        ${context.content}
    </body>
  </html>
  `
}