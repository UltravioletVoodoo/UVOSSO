const base = require('./base');

module.exports = function(context={}) {

    //making sure the error isnt undefined
    context.error = context.error || '';

    return base({
        title: 'DummyData',
        content: `
        <h1>Dummy Data Creation Page</h1>

        <form action="/dummydata/createDummyData" method="post">
            <label for="name">Name: </label>
                <input id="name" type="text" name="name" placeholder="Enter the course name here">
            <label for="due_date"    

            <form>
            </form>
        </form>
        `
    })
}