import React from "react";

import { Link } from "react-router-dom";

import login from "../pages/login";
import register from "../pages/register";
import './styles/Header.css';




const Header = () => {
  return (
    <header className="header">
    <h1>Travel Tales</h1>
    <nav>
        <ul className="header-links">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Sign up</a></li>
           
        </ul>
    </nav>
</header>
  );
};

export default Header;



