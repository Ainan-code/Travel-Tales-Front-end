import profileimg from "/home/ainan/Travel-Tales-Front-end/travel-tales/src/assets/blink-p0kzFn1BGOk-unsplash.jpg"
import Diary from "../components/diary";
import "../components/styles/Profile.css";
import axios from "axios";
import { useEffect, useState } from "react";


function UserProfile() {
    const [username, setUsername] = useState('');
     

   
const token = localStorage.getItem('SavedToken');

axios.get('http://localhost:5000/users/:id',{
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
    
     

    return(
    <div className="user-profile">
        <div className="card">
        <div >
            <img src={profileimg} className="cover-photo"/>
        </div>
        <h3 className="profile-name">{username}</h3>
       
    
        </div>
        <div className="user-post">
            <h4>Your post</h4>
          <Diary/>
        </div>
   </div>
       
    )
}


export default UserProfile;