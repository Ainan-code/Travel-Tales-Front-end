import React, { useState } from "react";
import Header from "../components/Header";

import Banner from '../components/welcomeBanner';
import '../components/styles/homepage.css';

import Footer from "../components/footer";
import { useEffect } from "react"; 
import image1 from '../assets/oxana-v-qoAIlAmLJBU-unsplash.jpg';
import '../components/styles/diary.css';
import { Link } from 'react-router-dom';




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
            return  <div className="diary-container" key={item._id} >
            <div >
                <img  className="diary-image" src={image1} alt="diary-image" />
            </div>
            <div className="diary-content">
                <h5>{item.title}</h5>
                <p>{item.content}</p>
                <p>{item.location}</p>
                <p>{item.author}</p>
                <Link to={`diary-detail/${item._id}`}>
  Read more
</Link>
            </div>
        </div>
  })
}
            
            <Footer/>
            
</>
       
    );
}



export default Homepage;