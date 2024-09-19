import profileimg from "/home/ainan/Travel-Tales-Front-end/travel-tales/src/assets/blink-p0kzFn1BGOk-unsplash.jpg"
import Diary from "../components/diary";
import "../components/styles/Profile.css";
function UserProfile() {
    return(
        <div className="user-container">
            <div className="profile-card">
                <div className="profile-image">
                    <img src={profileimg} alt="profile" />
                </div>
                <div className="username">
                    ALI ABDI
                </div>
            </div>
           <div className="user-post">
                <Diary/>
            
            </div>
        </div>
    )
}


export default UserProfile;