import React from "react";
import { Row, Col } from "./Grid";
import { Link } from "react-router-dom";


const daWeekender = (props) => {
  return (
    <div className="project-container">
      <br /><br /><br />
      <Link to="/">Back to Home</Link>
      <Row>
        <Col size="1"></Col>
        <Col size="10">
          <h3 className="project-title">The Weekender</h3>
          <span><a href="https://salty-basin-99417.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/circuitsyn/MedSight" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          <br /><br />
          <Row>
            <Col size="7">
              <br />
              <p>The Weekender is a web based weekend planner designed to give you all the information you need.</p>
              <br />
            </Col>
            <Col size="5">
              <img style={{maxHeight: "400px"}} className="center-img" src="./images/theweekender_landing.png" alt="landing" />
            </Col>
          </Row>
          <Row>
            <Col size="6">
              <img style={{maxHeight: "650px"}} className="center-img" src="./images/theweekender_results.png" alt="results" />
            </Col>
            <Col size="6">
              <br /><br />
              <p>The Weekender uses Google Maps API so users can search a desired destination and utilizing the built in latitude and longitude method, the web app searches other APIs based on the stored location and will retun weather forcast information, driving directions, upcoming events, local restaurants and hiking trails in the area.</p>
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
export default daWeekender;