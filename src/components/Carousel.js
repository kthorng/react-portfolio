import React from "react";
import { Row, Col } from "./Grid";
import { Link } from "react-router-dom";
import { React_Bootstrap_Carousel as ReactCarousel } from "react-bootstrap-carousel";


const Carousel = (props) => {
  return (
    <div className="carousel-container">
      <Row>
        <Col size="12">
          <ReactCarousel
            animation={true}
            slideshowSpeed={3500}
            className="carousel-slide"
            leftIcon=" "
            rightIcon=" "
          >
          <div className="carousel-item">
            <Link to="/medsight" className="square-link">
              <br />
              <h3>MedSight</h3>
              <p>Medical tracker with variable options</p>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/weekender" className="square-link">
              <br />
              <h3>Weekender</h3>
              <p>One stop shop to plan your weekend</p>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/drago" className="square-link">
              <br />
              <h3>Drago</h3>
              <p>Web based memory game</p>
            </Link>
          </div>
          </ReactCarousel>
        </Col>
      </Row>
    </div>
  );
};

export default Carousel;