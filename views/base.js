module.exports = (context={}) =>
`<!DOCTYPE html>
<html>
    <head>
        <script src="/jquery.js"></script>
    </head>

    <body>

        <!-- Content -->
        <div class="${context.class}" id="content">
            ${context.content}
        </div>

    </body>
</html>`;