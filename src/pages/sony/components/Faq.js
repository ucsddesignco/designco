import React from "react";
import "./Faq.scss";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";

function Faq() {
  return (
    <div className="about-bg">
      <div className="container">
        <Container>
          <Row>
            <Col>
              <h2>FAQ</h2>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={6}>
              <h3 className="faq-title">How many people will be selected?</h3>
              <p className="paragraph-text">Around 28 students.</p>
            </Col>
            <Col sm={6}>
              <h3 className="faq-title">
                If I am selected to be a part of this program, what will my
                commitments look like?
              </h3>
              <p className="paragraph-text">
                You will be participating in two 90-minute virtual meetings (Nov
                10 and Nov 19), and using the earphone as you normally would
                (Nov 10 — 19).
              </p>
            </Col>
            <Col sm={6}>
              <h3 className="faq-title">How might I qualify?</h3>
              <p className="paragraph-text">
                You must be current UC San Diego students who owns an iPhone or
                Android phone (excluding LG phones).
              </p>
            </Col>
            <Col sm={6}>
              <h3 className="faq-title">
                If I am selected to be a part of this program, what will I
                learn?
              </h3>
              <p className="paragraph-text">
                You will learn and develop skills in UX Research, with guidance
                from Sony's Human Factors team.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Faq;
