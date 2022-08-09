import React from "react";
import img1 from "./Carousel/carousel1.png";
import img2 from "./Carousel/carousel2.jpeg";
import img3 from "./Carousel/carousel3.png";
import img4 from "./Carousel/carousel4.jpeg"
import Carousell from 'react-bootstrap/Carousel';
import "../styles/bootstrap.scss";
import "../styles/carousel.css"
const Carousel = () => {

  return (
    <>
      <div className="local-bootstrap">
        <Carousell interval={3000}>
          <Carousell.Item>
            <img
             className="slider-image"
              src={img1}
              alt="First slide"
            />
          </Carousell.Item>
          <Carousell.Item>
            <img
             className="slider-image"
              src={img2}
              alt="Second slide"
            />
          </Carousell.Item>
          <Carousell.Item>
            <img
             className="slider-image"
              src={img3}
              alt="Third slide"
            />
          </Carousell.Item>
          <Carousell.Item>
            <img
             className="slider-image"
              src={img4}
              alt="Third slide"
            />
          </Carousell.Item>
        </Carousell>
      </div>
    </>
  )
}

export default Carousel;