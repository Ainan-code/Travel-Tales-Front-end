import image1 from '../assets/oxana-v-qoAIlAmLJBU-unsplash.jpg';
import './styles/diary.css'

function Diary() {
    return(
        <div className="diary-container">
            <div >
                <img  className="diary-image" src={image1} alt="diary-image" />
            </div>
            <div className="diary-content">
                <h5>This is a awesome tale</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi natus sint explicabo, magni consequatur quo temporibus ab veniam animi earum unde voluptatum fuga officia saepe quasi aliquid vel sed!</p>
                <p>Africa</p>
            </div>
        </div>
    )
}


export default Diary;