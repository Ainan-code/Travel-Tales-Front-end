import React from "react";

import { Link } from "react-router-dom";
import { Styledheader,  } from "./styles/Header.styled";
import login from "../pages/login";
import register from "../pages/register";




const Header = () => {
  return (
  <Styledheader>
    <h1>Travel Tales</h1>
    <nav>
      <ul>
        <Link>{login}</Link>
        <Link>{register}</Link>
      </ul>
    </nav>
  </Styledheader>
  );
};

export default Header;



