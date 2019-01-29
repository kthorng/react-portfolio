import React from "react";
import { Row, Col } from "./Grid";
import { Link } from "react-router-dom";


const MedSight = (props) => {
  return (
    <div className="project-container">
      <br /><br /><br />
      <Link to="/">Back to Home</Link>
      <Row>
        <Col size="1"></Col>
        <Col size="10">
          <h3 className="project-title">MedSight</h3>
          <span><a href="https://salty-basin-99417.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/circuitsyn/MedSight" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          <br /><br />
          <Row>
            <p>MedSight was created with the the average user as well as someone with a full active lifestyle in mind.  Tracking one's health can be cubersome at times, especially when there are so many varibles to keep track of.</p>
          </Row>
          <br />
          <Row>
            <Col size="6">
              <img style={{maxHeight: "400px"}} className="center-img" src="https://kthorng.github.io/react-portfolio/images/clearcard.png" alt="start" />
            </Col>
            <Col size="1"></Col>
            <Col size="5">
              <br /><br />
              <p>What did I eat?  What was my pain level?  Was the humidity high or low?  How stressed was I?</p>
              <br></br>
              <p>These are questions that we tend to ask when we track our health for medical purposes, MedSight makes its less daunting and more fluid for a single user to track their day to day experiences.</p>
            </Col>
          </Row>
          <br />
          <Row>
            <img style={{maxHeight: "400px"}} className="center-img" src="https://kthorng.github.io/react-portfolio/images/cardstack.png" alt="card-saved" />
          </Row>
          <br /><br />
          <Row>
            <p>A MySQL database is used on the back end to store users logged items, users can take a glance at their submitted cards and check statistics</p>
          </Row>
          <br />
        </Col>
        <Col size="1"></Col>
      </Row>
    </div>
  );
};

export default MedSight;