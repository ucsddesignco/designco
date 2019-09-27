import React from "react";
import Navbar from "../components/Navbar";
import Splash from "../components/Splash";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "../constants";
import placeholder from "../images/placeholder/fb.png";
import { setConfiguration } from "react-grid-system";

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
                  src={placeholder}
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
              <Col sm={6}>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  link="https://www.facebook.com/pg/ucsddesignco/events/"
                  text="View All Events"
                ></Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
