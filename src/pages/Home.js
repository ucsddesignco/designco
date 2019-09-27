import React from "react";
import Navbar from "../components/Navbar";
import Splash from "../components/Splash";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "../constants";
import placeholder from "../images/placeholder/fb.png";
import { setConfiguration } from "react-grid-system";

import intuit from "../images/sponsors/intuit.png";
import sony from "../images/sponsors/sony.png";
import fb from "../images/sponsors/fb.png";
import dlab from "../images/sponsors/dlab.png";

import event1 from "../images/events/fa19/week1_fallkickoff.png";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Splash />
        <Container className="outerContainer">
          <div
            className="events innerContainer"
            style={{ marginTop: spacer4, marginBottom: spacer4 }}
          >
            <h2 style={{ marginBottom: spacer3 }}>What's coming up for you?</h2>
            <Row style={{ marginBottom: spacer3 }}>
              <Col sm={6}>
                <img
                  style={{ marginBottom: spacer1 }}
                  src={event1}
                  alt=""
                ></img>
                <h3 style={{ marginBottom: spacer1 }}>
                  GBM 1: Design Co Fall Kickoff
                </h3>
                <p className="text_small">
                  Thursday, Oct. 3<br></br>
                  HSS 1346<br></br>
                  6:30PM
                </p>
              </Col>
              <Col sm={6}></Col>
            </Row>
            <Row style={{ marginBottom: spacer4 }}>
              <Col>
                <Button
                  link="https://www.facebook.com/pg/ucsddesignco/events/"
                  target="_blank"
                  text="View All Events"
                ></Button>
              </Col>
            </Row>
            <h2 style={{ marginBottom: spacer3 }}>Sponsors</h2>
            <Row>
              <Col xs={6} md={3} style={{ marginBottom: spacer2 }}>
                <a href="https://www.intuit.com/" target="_blank">
                  <img src={intuit} alt="Intuit"></img>
                </a>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer2 }}>
                <a href="https://www.sony.com/" target="_blank">
                  <img src={sony} alt="Sony"></img>
                </a>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer2 }}>
                <a href="https://facebook.com" target="_blank">
                  <img src={fb} alt="Facebook"></img>
                </a>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer2 }}>
                <a href="https://designlab.ucsd.edu/" target="_blank">
                  <img src={dlab} alt="The Design Lab at UC San Diego"></img>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
