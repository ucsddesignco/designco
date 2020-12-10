import React from "react";
import arrow from "../images/arrow.svg";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";
import "../../../css/App.scss";

function About() {
  return (
    <div className="sony-about">
      <Container>
        <Row>
          <Col>
            <h1>About</h1>
          </Col>
        </Row>
        <Row justify="center" align="center" className="row-data">
          <Col sm={1}>
            <img src={arrow} alt="arrow-right" />
          </Col>
          <Col sm={11}>
            <p>
              Headphones UX Review is a 2 week long teaching event, giving
              students first-hand insight into how human factors engineers at
              Sony contribute to the UX of headphones.
            </p>
          </Col>
        </Row>
        <Row justify="center" align="center" className="row-data">
          <Col sm={1}>
            <img src={arrow} alt="arrow-right" />
          </Col>
          <Col sm={11}>
            <p>
              This event is a self-exploration in understanding what it means to{" "}
              <b>perform an expert review, synthesize notes,</b> and{" "}
              <b>ultimately contribute findings.</b>
            </p>
          </Col>
        </Row>
        <Row justify="center" align="center" className="row-data">
          <Col sm={1}>
            <img src={arrow} alt="arrow-right" />
          </Col>
          <Col sm={11}>
            <p>
              This event is a collaborative opportunity to share results and
              form ideas for product improvement with human factors engineers at
              Sony.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
