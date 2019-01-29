import React from "react";
import { Row, Col } from "./Grid";
import About from "./About";


const Nav = (props) => {
  return (
    <div className="overlay-container">
      <Row>
        <Col size="3"></Col>
        <Col size="6">
          <div className="about-me-font" onClick={props.toggleAboutMe}>
            <span className="align-left">Keo Thorng</span>
            {props.aboutMeOpen ? (
              <span className="align-right">&times; Close</span>
            ) : (
              <span className="align-right">About</span>
            )}
          </div>
        </Col>
        <About
          aboutMeOpen={props.aboutMeOpen}
        />
      </Row>
      <Col size="3"></Col>
    </div>
  );
}

export default Nav;