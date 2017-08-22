const base = require('./base');

module.exports = function(context={}) {

    //making sure that the error is not undefined
    context.error = context.error || '';

    return base({
        title: 'Login Page',
        content: `
        
        <div id="div_login_page">

            <img id="UVOSSO_logo" alt="UVOSSO LOGO" src="/images/Logo.png">

            <br>

            <form action ="/login/login" method="post">
                <input id="email" type="text" name="email" placeholder="Enter email here">
                <input id="password" type="password" name="password" placeholder="Enter password here">
                <input type="submit" value="Login">
            </form>

            <br>

            <p>${context.error}</p>

            <br>

            <p>Don't have an account? Register <a href='/register'>here</a></p>

            <br>

        </div>
        `
    })
}