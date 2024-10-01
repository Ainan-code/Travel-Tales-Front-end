import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import MainLayout from "../components/MainLayout";
import AuthContext from "../AuthContext";





function login() {

  const UseAuth = () => {
    return useContext(AuthContext);
  };

  const navigate = useNavigate();
    const [loginpayload, setloginpayload] = useState({
        username: '',
        password: '',
      });

      const auth = UseAuth();
      const handleInput = (e) => {
        const { name, value } = e.target;
        setloginpayload({
          ...loginpayload,
          [name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
        
         
          auth.loginAction(loginpayload)
       
        } catch (error) {
          console.error('Error submitting form data:', error);
          // You can add error handling logic here, such as displaying an error message
          alert("failed to log in");
        }
      };
    return(
      <MainLayout>
        <div className="register-container">
        <h4>Login</h4>
        <form action="#" className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' onChange={handleInput} value={loginpayload.username}/>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password'onChange={handleInput} value={loginpayload.password}/>
         
            <button type="submit">Login</button>
        </form>

        <p>Dont have an account! <a href="/register">Register here</a></p>
       </div>
       </MainLayout>
    )
}


export default login;