import image1 from '../assets/oxana-v-qoAIlAmLJBU-unsplash.jpg';
import './styles/diary.css'

function Diary(props) {
    return(
        <div className="diary-container">
            <div >
                <img  className="diary-image" src={image1} alt="diary-image" />
            </div>
            <div className="diary-content">
                <h5>{props.title}</h5>
                <p>{props.content}</p>
                <p>by {props.user}</p>
            </div>
        </div>
    )
}


export default Diary;