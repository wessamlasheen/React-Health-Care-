import Carousel from "react-bootstrap/Carousel";
import "./carouselTestimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function CarouselTestimonials() {
  return (
    <div className="slider">
      <Carousel variant="dark">
        <Carousel.Item>
          <div className="carousel-data">
            <p className="d-block w-100 carousel-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecena
              ssuspendisse ultrices gravida.
            </p>
            <h4>John Smith</h4>
            <span>PATIENT</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-data">
            <p className="d-block w-100 carousel-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecena
              ssuspendisse ultrices gravida.
            </p>
            <h4>John Smith</h4>
            <span>PATIENT</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-data">
            <p className="d-block w-100 carousel-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecena
              ssuspendisse ultrices gravida.
            </p>
            <h4>John Smith</h4>
            <span>PATIENT</span>
          </div>
        </Carousel.Item>
      </Carousel>
      <FontAwesomeIcon icon={faQuoteLeft} />
    </div>
  );
}

export default CarouselTestimonials;
