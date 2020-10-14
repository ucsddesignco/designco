import React from "react";
import headphones from "../images/sony_headphones.png";
import logo from "../images/sony_logo.svg";
import { Container, Row, Col } from "react-grid-system";
import "../../../css/App.scss";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";
import Navbar from "../../../components/Navbar";

function Hero() {
  return (
    <>
      <Navbar color="#FFF" altColor="#000" from="headphones-ux-review"/>
      <div className="sony-hero">
        <Container>
          <Row align="center">
            <Col sm={6}>
              <h1>Headphones UX Review</h1>
              <div className="sony-subtitle-container">
                <p>Sponsored by</p>
                <img
                  className="sony-small-logo"
                  src={logo}
                  alt="sony-logo"
                />{" "}
              </div>
              <button className="text_caption">Apply Now</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Hero;
