const base = require("./base");

module.exports = function(context) {
    return base({
        title: 'Home',
        content: `
        
        <h1>MAIN PAGE</h1>

        <input type="button" value="Log out" onclick="location.href='/login/logout'">

        `
    })
}