import Header from '../components/Header';
import '../components/styles/register.css';
import { useState } from 'react';
import axios from 'axios';
import MainLayout from '../components/MainLayout';
import { useNavigate } from 'react-router-dom';

import AuthContext from "../AuthContext";
import { useContext } from "react";


function Register() {


  const UseAuth = () => {
    return useContext(AuthContext);
  };
  const auth = UseAuth();
 
  const navigate = useNavigate();

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
          const response = await axios.post('https://traveltales-backend.onrender.com/users/register', userRegister);
          console.log('Form data submitted successfully:', response.data);
          // You can add additional logic here, such as displaying a success message
          localStorage.setItem("token", response.data.token);
          auth.setToken(response.data.token)
          
        
          navigate('/');
        } catch (error) {
          console.error('Error submitting form data:', error);
          // You can add error handling logic here, such as displaying an error message
          alert("with registering user");
        }
      };


    return(

       <MainLayout>
       <div className="register-container">
        <h4>Sign up</h4>
        <form action="#" className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' value={userRegister.username} required onChange={handleInput}/>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' value={userRegister.password} required onChange={handleInput}/>
            <label htmlFor="confirm-password">Confirm password:</label>
            <input type="password" name='confirm-password'required/>
            <button type="submit" >Sign up</button>
        </form>

         <p>Already have an account! <a href="/login">Login here</a></p>
       </div>
       </MainLayout>
    )
}


export default Register;