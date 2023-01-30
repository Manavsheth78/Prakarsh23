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
            src="assests/Sponsor/POWEREDBY-SPONSOR.png"
            alt="Second slide"
          />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/PLATINUM-SPONSOR.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/GOLD-SPONSOR.png"
          alt="Fourth slide"
        />
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/SILVER-SPONSOR.png"
          alt="Fifth slide"
        />
      </Carousel.Item>
      
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/SILVER-SPONSOR.png"
          alt="sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/BRONZE-SPONSOR.png"
          alt="Seventh slide"
        />
      </Carousel.Item>
      
      
    </Carousel>
  );
}

export default Sponsor;