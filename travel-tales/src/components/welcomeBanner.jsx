import './styles/Banner.css';
import image1 from '../assets/oxana-v-qoAIlAmLJBU-unsplash.jpg'


function Banner() {
    return (
        <section className="welcome-banner">
          <div> <img src={image1} alt='travel journal'/> </div>
          <div>
            <h2>Welcome to Travel tales</h2>
            <p>your ultimate travel companion! our app is designed to capture and enhance every moment of your journey.share experiences with friends, and discover hidden gems along the way.</p>
          </div>
        </section>
    )
}



export default Banner;