import profileimg from "/home/ainan/Travel-Tales-Front-end/travel-tales/src/assets/blink-p0kzFn1BGOk-unsplash.jpg"
import Diary from "../components/diary";
import "../components/styles/Profile.css";
function UserProfile() {
    return(
    <div className="user-profile">
        <div className="card">
        <div className="cover-photo">
            <img src="https://i.imgur.com/KykRUCV.jpeg" className="profile"/>
        </div>
        <h3 className="profile-name">James Carson</h3>
        <p className="about">UI/UX Designer  Front End Developer</p>
        <button className="btn">Message</button>
        <button className="btn">Following</button>
    
        </div>
        <div className="user-post">
            <h4>Your post</h4>
          <Diary/>
        </div>
   </div>
       
    )
}


export default UserProfile;