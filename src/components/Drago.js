import React from "react";
import { Row, Col } from "./Grid";
import { Link } from "react-router-dom";


const Drago = (props) => {
  return (
    <div className="project-container">
      <br /><br /><br />
      <Link to="/">Back to Home</Link>
      <Row>
        <Col size="1"></Col>
        <Col size="10">
          <h3 className="project-title">Drago</h3>
          <span><a href="https://kthorng.github.io/clicky-click-click/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/kthorng/clicky-click-click" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          <br /><br />
          <Row>
            <p>Memory of Drago the Dragon is a fun web based app that tests your memory.</p>
            <br />
          </Row>
          <br />
          <Row>
            <img style={{maxHeight: "500px"}} className="center-img" src="./images/clicky-ss.png" alt="drago" />
          </Row>
          <br />
          <Row>
            <Col size="410">
              <br /><br />
              <p>Game was built using React Components</p>
              <br />
            </Col>
          </Row>
          <br /><br />
        </Col>
        <Col size="1"></Col>
      </Row>
    </div>
  );
};

export default Drago;