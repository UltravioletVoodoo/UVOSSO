const base = require('./base');

module.exports = function(context) {
    return base({
        title: 'Login Page',
        content: `
        
        <h1>LOGIN PAGE</h1>

        <form>
            <label for="email">Email: </label>
                <input id="email" type="email" placeholder="Enter email here">
            <label for="password">Password: </label>
                <input id="password" type="password" placeholder="Enter password here">
            <input type="submit" value="OK">
        </form>

        <p>Don't have an account? Register <a href='/register'>here</a></p>

        `
    })
}