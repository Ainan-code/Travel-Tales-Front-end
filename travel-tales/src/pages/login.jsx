import axios from "axios";
import { useState } from "react";




function login() {
    const [loginpayload, setloginpayload] = useState({
        username: '',
        password: '',
      });

    const [userdata, setUserData] = useState({});

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
          alert("succesfuly logged in");
          setUserData
          window.location.href = '/profile';
        } catch (error) {
          console.error('Error submitting form data:', error);
          // You can add error handling logic here, such as displaying an error message
          alert("failed to log in");
        }
      };
    return(
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
    )
}


export default login;