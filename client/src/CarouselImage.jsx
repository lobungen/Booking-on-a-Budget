import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage src="src/assets/runyon-canyon-featured.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <img src="src/assets/runyon-canyon-featured.jpg" alt="Runyon Canyon hiking trail." style="width:500px;height:300px;"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="src/assets/runyon-canyon-featured.jpg" alt="Runyon Canyon hiking trail." style="width:500px;height:300px;"/>
        {/* <CarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
