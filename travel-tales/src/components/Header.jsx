import React from "react";
import travel from '../assets/images/traveltales.png';



const Header = () => {
  return (
    <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                   <div href="index.html" class="logo">
                     Travel Tales</div>
                    
                    <ul class="nav">
                        <li><a href="index.html" class="active">Home</a></li>
                        <li><a href="about.html">Login</a></li>
                        <li><a href="deals.html">Register</a></li>
                        <li><a href="reservation.html">About</a></li>
                       
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                   
                </nav>
            </div>
        </div>
    </div>
  </header>
  );
};

export default Header;



