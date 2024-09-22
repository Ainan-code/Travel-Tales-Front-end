import Header from '../components/Header';
import '../components/styles/register.css';
import { useState } from 'react';
import axios from 'axios';


function Register() {
    const [userRegister, setUserRegister] = useState({
        username: '',
        password: '',
      });

      const handleInput = (e) => {
        const { name, value } = e.target;
        setUserRegister({
          ...userRegister,
          [name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:5000/users/register', {userRegister});
          console.log('Form data submitted successfully:', response.data);
          // You can add additional logic here, such as displaying a success message
        } catch (error) {
          console.error('Error submitting form data:', error);
          // You can add error handling logic here, such as displaying an error message
        }
      };


    return(

       
       <div className="register-container">
        <h4>Sign up</h4>
        <form action="#" className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' required onChange={handleInput}/>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' required onChange={handleInput}/>
            <label htmlFor="confirm-password">Confirm password:</label>
            <input type="password" name='confirm-password'required/>
            <button type="submit">Sign up</button>
        </form>

         <p>Already have an account! <a href="/login">Login here</a></p>
       </div>
    )
}


export default Register;