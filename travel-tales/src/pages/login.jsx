import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MainLayout from "../components/MainLayout";




function login() {

  const navigate = useNavigate();
    const [loginpayload, setloginpayload] = useState({
        username: '',
        password: '',
      });


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
          const response = await axios.post('http://localhost:5000/users/login', loginpayload);
          console.log('Form data submitted successfully:', response.data);
          // You can add additional logic here, such as displaying a success message
         
          let access = response.data.token;
          let userId = response.data._id;
          localStorage.setItem("token", access);
          localStorage.setItem("userId",  userId)
          navigate('/profile');
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