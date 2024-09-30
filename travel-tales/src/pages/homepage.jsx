import React, { useState } from "react";
import Header from "../components/Header";

import Banner from '../components/welcomeBanner';
import '../components/styles/homepage.css';
import Diary from "../components/diary";
import Footer from "../components/footer";
import { useEffect } from "react";



function Homepage() {
  
  const [diaries, setdiaries] = useState([]);
    
   
      
          useEffect(( )=> {
            fetch('http://localhost:5000/diaries/alldiaries')
            .then(response => response.json())
            .then(data => setdiaries(data))
            .catch(error => console.error(error));
          },[])

    return (
        <>
            
            <Header/>
            <Banner/>
            <h3 className="blogsection-title">Trending</h3>
            { 
           diaries &&  diaries.map((item) => {
             // Add a return
            return <Diary title = {item.title} content = {item.content} user = {item.user}/>
  })
}
            
            <Footer/>
            
</>
       
    );
}



export default Homepage;