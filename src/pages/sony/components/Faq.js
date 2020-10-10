import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";
import QA from "../../../components/QA";

const ques_ans = [
  {
    question: "How many people will be selected?",
    answer: "Around 28"
  },
  {
    question:
      "If I am selected to be a part of this program, what will my commitments look like?",
    answer:
      "You will be participating in two 90-minute virtual meetings (Nov 10 and Nov 19), and using the earphone as you normally would (Nov 10 -  Nov 19)."
  },
  {
    question: "How might I qualify?",
    answer:
      "You must be current UC San Diego students who owns an iPhone or Android phone (excluding LG phones). Those with range of motion issues with head/neck, or with tinnitus (ringing of the ears) should not participate for comfort and safety reasons."
  },
  {
    question:
      "If I am selected to be a part of this program, what will I learn?",
    answer:
      "You will learn and develop skills in UX Research, with guidance from Sony's Human Factors team."
  }
];

const faqs = ques_ans.map(obj => {
  return (
    <Col sm={6}>
      <QA question={obj.question} answer={obj.answer} />
    </Col>
  );
});

function Faq() {
  return (
    <div className="sony-faq">
      <Container>
        <Row>
          <Col>
            <h1>FAQ</h1>
          </Col>
        </Row>
        <Row className="about-row">{faqs}</Row>
      </Container>
    </div>
  );
}

export default Faq;
