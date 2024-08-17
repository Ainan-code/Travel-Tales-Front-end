import React from "react";
import "../styles/header.css";

function Header() {
    return (
     
      <header class="site-header">
      <div class="site-identity">
        <h1><a href="#">Travel Tales</a></h1>
      </div>  
      <nav class="site-navigation">
        <ul class="nav">
          <li><a href="#">Home</a></li> 
          <li><a href="#">login</a></li> 
          <li><a href="#">Register</a></li> 
        </ul>
      </nav>
    </header>
    );
}



export default Header;