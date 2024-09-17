import React from "react";
import Header from "../components/Header";

import Banner from '../components/welcomeBanner';
import '../components/styles/homepage.css';
import Diary from "../components/diary";
import Footer from "../components/footer";

function Homepage() {
    return (
        <>
            
            <Header/>
            <Banner/>
            <h3 className="blogsection-title">Trending</h3>
            <Diary/>
            <Diary/>
            <Diary/>
            <Footer/>
            
</>
       
    );
}



export default Homepage;