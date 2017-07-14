const base = require("./base");

module.exports = function(context) {
    return base({
        title: 'Home',
        content: `
        
        <h1>MAIN PAGE</h1>

        <input type="button" value="Log out" onclick="location.href='/login/logout'">


        <p>The following form can be used to create courses:</p>
        <form action="/course/createCourse" method="post">
            <label for="name">Name: </label>
                <input id="name" type="text" name="name" placeholder="Enter the course name here">
            <input type="submit" value="ok">
        </form>



        <p>The following form can be used to create deliverables for courses that exist:</p>
        <form action="deliverable/createDeliverable" method="post">
            <label for="name">Name: </label>
                <input id="name" type="text" name="name" placeholder="Enter deliverable name here">
            <label for "due_date">Due Date: </label>
                <input id="due_date" type="Date" name="due_date" placeholder="Enter the due date here">
            <label for="type">Type: <label>
                <input id="type" type="text" name="type" placeholder="Enter the deliverable type here">
            <label for="course">Course: </label>
                <input id="course" type="text" name="course" placeholder="Enter the corresponding course name here">
            <input type="submit" value="OK">
        <form>


        `
    })
}