import Carousel from 'react-bootstrap/Carousel';
import './Sponsor.css'

function Sponsor() {
  return (
    <Carousel id='sponser'>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/Title.svg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/Gold.png"
          alt="Second slide"
        />
  
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/Platinum.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/Platinum.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Sponsor;