import React from "react";
import "./Hero.scss";
// import headphones from "../images/sony_headphones.png";
import logo from "../images/sony_logo.svg";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";

function Hero() {
  return (
    <div className="background">
      <div className="container">
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="sony-title">Headphones UX Review</h2>
              <div className="sony-subtitle-container">
                <p className="sony-subtitle">Sponsored by</p>
                <img className="sony-small-logo" src={logo} alt="sony-logo" />
              </div>
              <button class="button">Apply Now</button>
            </Col>
            {/* <Col sm={6}>
              <img
                className="headphones-logo"
                src={headphones}
                alt="headphones"
              />
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
