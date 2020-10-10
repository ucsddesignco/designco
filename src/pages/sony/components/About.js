import React from "react";
import "./About.scss";
import arrow from "../images/arrow.svg";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";

function About() {
  return (
    <div className="about-bg">
      <div className="container">
        <Container>
          <Row>
            <Col>
              <h2>About</h2>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={1}>
              <img className="arrow-right" src={arrow} alt="arrow-right" />
            </Col>
            <Col sm={11}>
              <p className="paragraph-text">
                Headphones UX Review is a 2 week long event teaching students
                first-hand how human factors engineers at Sony contribute to the
                UX of headphones.
              </p>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={1}>
              <img className="arrow-right" src={arrow} alt="arrow-right" />
            </Col>
            <Col sm={11}>
              <p className="paragraph-text">
                This event is a self-exploration in understanding what it means
                to <b>perform an expert review, synthesize notes,</b> and{" "}
                <b>ultimately contribute findings.</b>
              </p>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={1}>
              <img className="arrow-right" src={arrow} alt="arrow-right" />
            </Col>
            <Col sm={11}>
              <p className="paragraph-text">
                This event ends off with a collaborative opportunity to share
                results and form ideas for product improvement with human
                factors engineers at Sony.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
