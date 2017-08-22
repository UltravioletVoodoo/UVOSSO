const base = require('./base');

module.exports = function(context={}) {

    //making sure that the error is not undefined
    context.error = context.error || '';

    return base({
        title: 'Login Page',
        content: `
        
        <div id="div_login_page">
            <h1>UVOSSO</h1>

            <form action ="/login/login" method="post">
                <input id="email" type="text" name="email" placeholder="Enter email here">
                <input id="password" type="password" name="password" placeholder="Enter password here">
                <input type="submit" value="OK">
            </form>

            <p>${context.error}</p>

            <p>Don't have an account? Register <a href='/register'>here</a></p>

        </div>
        `
    })
}