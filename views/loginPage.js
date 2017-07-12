const base = require('./base');

module.exports = function(context={}) {

    //making sure that the error is not undefined
    context.error = context.error || '';

    return base({
        title: 'Login Page',
        content: `
        
        <h1>LOGIN PAGE</h1>

        <form action ="/login/login" method="post">
            <label for="email">Email: </label>
                <input id="email" type="text" name="email" placeholder="Enter email here">
            <label for="password">Password: </label>
                <input id="password" type="password" name="password" placeholder="Enter password here">
            <input type="submit" value="OK">
        </form>

        <p>${context.error}</p>

        <p>Don't have an account? Register <a href='/register'>here</a></p>

        `
    })
}