

import "../components/styles/Profile.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import AuthContext from "../AuthContext";
import { useContext } from "react";



function UserProfile() {
    const [username, setUsername] = useState('');
    const UseAuth = () => {
      return useContext(AuthContext);
    };
    const auth = UseAuth();
  
     

   
 
 const token = auth.token;

 useEffect(() => {
  fetch(`http://localhost:5000/users/profile`, { 
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`, 
      "Content-Type": "application/json"
    },
    mode: "cors"
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    setUsername(data.user.username);
   
  })
  .catch(error => {
   console.log(error)
  });
}, []);

    return(
      <MainLayout>
    <div className="user-profile">
        <div className="card">
       
        <h3 className="profile-name">Welcome {username}</h3>
       
    
        </div>
        <div className="user-post">
            <h4>Create a Post</h4>
         <Link to="/diary">Make an Entry</Link>
        </div>
        
   </div>
   </MainLayout>
       
    )
}


export default UserProfile;