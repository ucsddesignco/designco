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
                Headphones UX Field Study is a <b>3 week</b> long event teaching
                students first hand what it means to conduct research at Sony.
              </p>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={1}>
              <img className="arrow-right" src={arrow} alt="arrow-right" />
            </Col>
            <Col sm={11}>
              <p className="paragraph-text">
                This event will be a self exploration in understanding what it
                means to <b>user test, synthesis notes,</b> and{" "}
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
                The event ends off with <b>meeting the Sony Team</b> and{" "}
                <b>
                  learning to conduct field studies and create artifacts from
                  your own findings.
                </b>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
