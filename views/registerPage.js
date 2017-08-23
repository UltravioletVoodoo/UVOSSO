const base = require("./base");

module.exports = function(context={}) {

    //making sure the error isnt undefined
    context.error = context.error || '';

    return base({
        title: 'Home',
        content: `
        
        <div id="div_registration_page">
            <h1>Registration Page</h1>

            <input type="button" value="Back" onclick="location.href='/login'">
            

            <form action="/register/createUser" id="div_registration_form" method="post">
                <input id="email" type="text" name="email" placeholder="Enter email here">
                <input id="password1" type="password" name="password1" placeholder="Enter password here">
                <input id="password2" type="password" name="password2" placeholder="Re-enter password here">
                <input type="submit" value="OK">
            </form>

            <p>${context.error}</p>
        </div>

        `
    })
}