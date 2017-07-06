module.exports = context =>
`<h1>Hello! Welcome to the login page!</h1>

<form action="/catalog/main_page" method="post">
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="user_email">
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="user_password">
    </div>
    <div class="button">
        <button type="submit">Submit</button>
    </div>
</form>
`;
