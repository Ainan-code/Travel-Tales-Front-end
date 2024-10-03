import MainLayout from "../components/MainLayout";

import { useParams } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import "../components/styles/viewdiary.css"

function ViewDiary() {
   
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(( )=> {
        fetch(`http://localhost:5000/diaries/${id}`)
        .then(response => response.json())
        .then(data => setBlog(data))
        .catch(error => console.error(error));
      },[])


    
    
    return( 
        <MainLayout>
            
        <div className="fulldiary-container">
            <h3>{blog.title}</h3>
            <p> {blog.content}</p>
            <p>{blog.location}</p>
        </div>   
    
       
        </MainLayout>
    )
}


export default ViewDiary;