import React from "react";

import { Link } from "react-router-dom";

import login from "../pages/login";
import register from "../pages/register";
import './styles/Header.css';
import AuthContext from "../AuthContext";
import { useContext } from "react";




const Header = () => {
  const UseAuth = () => {
    return useContext(AuthContext);
  };
  const auth = UseAuth();
  

  return (
    <header className="header">
    { 
      auth.token ? (
        <>   
          <h1>Travel Tales</h1>
    <nav>
        <ul className="header-links">
            <li><a href="/profile">Profile</a></li>
            <li><button onClick={auth.logOut}>Logout</button></li>
           
        </ul>
    </nav>
        
        
          </>

      ) : (
        <>  
        <h1>Travel Tales</h1>
        <nav>
            <ul className="header-links">
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Sign up</a></li>
               
            </ul>
        </nav>
        </>
      )

    }  
    </header>
  );
};

export default Header;



