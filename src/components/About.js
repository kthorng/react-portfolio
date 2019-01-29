import React from "react";
import { Row, Col } from "./Grid";
import { Collapse } from "react-collapse";


const About = (props) => {
  return (
    <div className="about-me-container">
      <Collapse isOpened={props.aboutMeOpen}>
        <Row>
          <Col size="3"></Col>
          <Col size="3">
            <br />
            <Row>
              <img style={{maxHeight: "230px"}} src="https://kthorng.github.io/react-portfolio/images/profile_1.png" alt="Keo Getting Pizza!" />
            </Row>
            <br />
            <Row>
              <ul>
                <li><a href="mailto:kthorng@gmail.com?Subject=Saw%20your%20portfolio..." rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="https://kthorng.github.io/react-portfolio/images/email_icon.png" alt="email" /> Email</a></li>
                <li><a href="https://github.com/kthorng" target="_blank" rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="https://kthorng.github.io/react-portfolio/images/github_icon.png" alt="github" /> Github</a></li>
                <li><a href="https://www.linkedin.com/in/keo-thorng-6ab495168/" target="_blank" rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="https://kthorng.github.io/react-portfolio/images/linkedin_icon.png" alt="linkedin" /> LinkedIn</a></li>
                <li><a href="https://www.facebook.com/keo.thorng" target="_blank" rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="https://kthorng.github.io/react-portfolio/images/facebook-icon.png" alt="facebook" /> Facebook</a></li>
                <li><a href="https://www.instagram.com/king.ke0/" target="_blank" rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="https://kthorng.github.io/react-portfolio/images/instagram_icon.png" alt="instagram" /> Instagram</a></li>
              </ul>
            </Row>
            <br /><br />
          </Col>
          {/* <Col size="1"></Col> */}
          <Col size="3">
            <br />
              <p>
              My passion for technology dates back to days where your average computer could barely run a barebones word processing program.  I can clearly remember working on my families first Packard Bell personal computer, swapping diskettes during the Windows NT install process.  From being amazed when my brother purchased a generation one dual port USB PCI card and he stated “this is going to change everything.”  He was right, we spent weeks trying to get a USB gamepad to work so we could play a demo of Super Street Fight II that came with the controller.
              </p>
            <br />
              <p>
              A lot of advances has been made and now it is all second nature to me.  I am eager to learn new technologies, software and hardware.  I’m a family man that loves to move with the times, because if you don’t--the times will move without you.
              </p>
            <br />
          </Col>
          <Col size="3"></Col>
        </Row>
      </Collapse>
    </div>
  );
}
export default About;