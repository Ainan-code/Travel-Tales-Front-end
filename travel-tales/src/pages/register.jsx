import Header from '../components/Header';
import '../components/styles/register.css';


function Register() {
    return(

       
       <div className="register-container">
        <h4>Sign up</h4>
        <form action="#" className="register-form">
            <label htmlFor="username">Username:</label>
            <input type="text" name='username'/>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password'/>
            <label htmlFor="confirm-password">Confirm password:</label>
            <input type="password" name='confirm-password'/>
            <button type="submit">Sign up</button>
        </form>

         <p>Already have an account! <a href="/login">Login here</a></p>
       </div>
    )
}


export default Register;