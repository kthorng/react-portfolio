import React from "react";
import { Row, Col } from "./Grid";

const Footer = (props) => {
  return (
    <Row>
      <Col size="9"><hr /></Col>
          <Col size="3">
            <div>
              <footer>
                <hr />
                <p className="pull-right">
                  <i className="fab fa-github" /> Proudly built using React.js
                </p>
              </footer>
            </div>
        </Col>
    </Row>
  );
}

export default Footer;