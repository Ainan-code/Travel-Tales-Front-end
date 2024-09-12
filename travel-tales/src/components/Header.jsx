import React from "react";

import { Link } from "react-router-dom";

import login from "../pages/login";
import register from "../pages/register";




const Header = () => {
  return (
    <header>
      <h1>Travel Tales</h1>
      <ul>
        <li>Login</li>
        <li>Sign up</li>
      </ul>
    </header>
  );
};

export default Header;



