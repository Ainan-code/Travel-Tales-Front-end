import './styles/Banner.css';
import image1 from '../assets/marten-bjork-wGu1pzDSm3g-unsplash.jpg';



function Banner() {
    return (
        <div className="welcome-banner">
          <div className='welcome-leftimage'> <img className='welcome-image' src={image1} alt='travel journal'/> </div>
          <div className='welcome-right-container'>
            <h2>Welcome to Travel tales</h2>
            <p>Your ultimate travel companion! our app is designed to capture and enhance every moment of your journey.
              share experiences with friends, and discover hidden gems along the way.</p>
          </div>
        </div>
    )
}



export default Banner;