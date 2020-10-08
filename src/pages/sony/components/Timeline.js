import React from "react";
import "./Timeline.scss";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";

function Timeline() {
  return (
    <div className="timeline-bg">
      <div className="container">
        <Container>
          <Row>
            <Col>
              <h2 className="header-dark">Timeline</h2>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={2}>
              <h3 className="timeline-title">Kickoff</h3>
              <h4 className="timeline-date">Nov 10</h4>
            </Col>
            <Col sm={10}>
              <p className="paragraph-text-dark">
                Throughout the week, take digital notes of the findings you
                discover from using the headphones. Take photos and videos to
                help support your findings and describe your use, how it may
                change, and other novel findings while using the Sony’s
                framework of Time - Activity - Observation - Emotion.
              </p>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={2}>
              <h3 className="timeline-title">User Testing</h3>
              <h4 className="timeline-date">Nov 10 - 19</h4>
            </Col>
            <Col sm={10}>
              <p className="paragraph-text-dark">
                We’ll distribute headphones and help you set up your accounts to
                properly pair off your headphones. Learn what it means to
                discover “find the hidden need” with representatives from Sony’s
                Human Factor team. Sony’s team will be giving lightning “How to”
                conduct expert reviews and field studies.
              </p>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={2}>
              <h3 className="timeline-title">Debrief & Ideate</h3>
              <h4 className="timeline-date">Nov 19</h4>
            </Col>
            <Col sm={10}>
              <p className="paragraph-text-dark">
                Consolidate your findings with your headphones by learning first
                hand what it means to create research artifacts Sony’s Human
                Factors team.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Timeline;
