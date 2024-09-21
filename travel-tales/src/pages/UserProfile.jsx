import profileimg from "/home/ainan/Travel-Tales-Front-end/travel-tales/src/assets/blink-p0kzFn1BGOk-unsplash.jpg"
import Diary from "../components/diary";
import "../components/styles/Profile.css";
function UserProfile() {
    return(
    <div className="user-profile">
        <div className="card">
        <div >
            <img src={profileimg} className="cover-photo"/>
        </div>
        <h3 className="profile-name">James Carson</h3>
       
    
        </div>
        <div className="user-post">
            <h4>Your post</h4>
          <Diary/>
        </div>
   </div>
       
    )
}


export default UserProfile;