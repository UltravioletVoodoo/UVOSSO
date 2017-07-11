const base = require("./base");

module.exports = function(context={}) {

    //making sure the error isnt undefined
    context.error = context.error || '';

    return base({
        title: 'Home',
        content: `
        
        <h1>Registration Page</h1>

        <form action="/register/createUser" method="post">
            <label for="email">Email: </label>
                <input id="email" type="text" name="email" placeholder="Enter email here">
            <label for="password1">Password: </label>
                <input id="password1" type="password" name="password1" placeholder="Enter password here">
            <label for="password2">Re-enter Password: </label>
                <input id="password2" type="password" name="password2" placeholder="Re-enter password here">
            <input type="submit" value="OK">
        </form>

        <p>${context.error}</p>

        `
    })
}