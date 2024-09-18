function login() {
    return(
        <div className="register-container">
        <h4>Login</h4>
        <form action="#" className="register-form">
            <label htmlFor="username">Username:</label>
            <input type="text" name='username'/>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password'/>
         
            <button type="submit">Login</button>
        </form>

        <p>Dont have an account! <a href="/register">Register here</a></p>
       </div>
    )
}


export default login;