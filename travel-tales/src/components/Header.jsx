import React from "react";
import travel from '../assets/images/traveltales.png';
import { Link } from "react-router-dom";
import login from "../pages/login";



const Header = () => {
  return (
    <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                   <div href="index.html" className="logo">
                     Travel Tales</div>
                    
                    <ul className="nav">
                        <li><a href="index.html" className="active">Home</a></li>
                        <li> <Link to={login}>Login</Link></li>
                        <li><a href="deals.html">Register</a></li>
                        <li><a href="reservation.html">About</a></li>
                       
                    </ul>   
                    <a className='menu-trigger'>
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



