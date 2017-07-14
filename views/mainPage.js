const base = require("./base");

module.exports = function(context) {
    return base({
        title: 'Home',
        content: `
        
        <h1>MAIN PAGE</h1>

        <input type="button" value="Log out" onclick="location.href='/login/logout'">


        <p>The following form can be used to create deliverables for courses that exist in the UVOSSO database:</p>
        <form action="deliverable/createDeliverable" method="post">
            <label for="name">Name: </label>
                <input id="name" type="text" name="name" placeholder="Enter deliverable name here">
            <label for "due_date">Due Date: </label>
                <input id="due_date" type="Date" name="due_date" placeholder="Enter the due date here">
            <label for="type">Type: <label>
                <select name="type">
                    <option value="assignment">Assignment</option>
                    <option value="quiz">Quiz</option>
                    <option value="midterm">Midterm</option>
                    <option value-"final">Final</option>
                    <option value="misc">Misc</option>
            <label for="course">Course: </label>
                <input id="course" type="text" name="course" placeholder="Enter the corresponding course name here">
            <input type="submit" value="OK">
        <form>


        `
    })
}