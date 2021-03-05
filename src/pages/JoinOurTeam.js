import React from "react";
import { spacer2, spacer3, spacer4 } from "../constants.js";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { faq } from "../faq.js";
import QA from "../components/QA";
import { roles } from "../roles.js";
import Role from "../components/Role";
import { Container, Row, Col } from "react-grid-system";

const faqList = faq.map((item) => (
  <QA question={item.question} answer={item.answer} />
));

const roleList = roles.map((item) => (
  <Role
    team={item.team}
    position={item.position}
    description={item.description}
    duty={item.duty}
    general={item.general}
    offer={item.offer}
    ec={item.ec}
    name={item.name}
    q1={item.q1}
    a1={item.a1}
    q2={item.q2}
    a2={item.a2}
    q3={item.q3}
    a3={item.a3}
    q4={item.q4}
    a4={item.a4}
  />
));

class JoinOurTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSidePanel: true };
    this.handlePanel = this.handlePanel.bind(this);
  }

  handlePanel() {
    this.setState((state) => ({
      showSidePanel: !state.showSidePanel,
    }));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title> Join Our Team | Design Co </title>
        </Helmet>
        <Navbar color={"#000"} altColor={"#FFF"} from="join-our-team" />
        <Container className="outerContainer" style={{ marginBottom: spacer4 }}>
          <div className="innerContainer">
            <Row>
              <Col md={6}>
                <h1 style={{ marginBottom: spacer2 }}>
                  So many boards, here’s why you should choose ours.
                </h1>
                <p style={{ marginBottom: spacer3 }}>
                  Applications due Saturday, March 27th at 11:59PM.
                </p>
                <Button
                  link="#roles"
                  text="View Open Roles"
                  style={{ marginBottom: spacer4 }}
                ></Button>
              </Col>
              <Col md={6}>
                <img
                  src={require("../images/join/board.gif")}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="outerContainer" style={{ marginBottom: spacer2 }}>
          <div className="innerContainer">
            <div style={{ marginBottom: spacer4 }}>
              <p className="steps">1st</p>
              <div className="stepCopy">
                <h1 style={{ marginBottom: spacer2 }}>We're cool people.</h1>
                <p>
                  Like you, we’re aspiring designers. We’re the ones who plan
                  GBMs, Stride, Design Frontiers, and all that other cool stuff.
                  At the end of the day we’re tired and our necks are sore from
                  pushing pixels, but we’re students, we’re happy, and we're a
                  family.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: spacer4 }}>
              <p className="steps">2nd</p>
              <div className="stepCopy">
                <h1 style={{ marginBottom: spacer2 }}>
                  You'll get to create impact.
                </h1>
                <p>
                  You’ll get the chance to take part in the planning of 35+
                  events each school year. From a career fair to design sprints,
                  to general workshops and talks, you’ll have the chance to get
                  your hands dirty and do some cool stuff for your design
                  community.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: spacer4 }}>
              <p className="steps">3rd</p>
              <div className="stepCopy">
                <h1 style={{ marginBottom: spacer2 }}>
                  You'll grow (figuratively).
                </h1>
                <p>
                  You’ll get exposed to so many unique opportunities and
                  challenges. Our board is constantly exploring new things,
                  sharing ideas, and experimenting. We fail together and grow
                  together, so come along with us for the journey!
                </p>
              </div>
            </div>
          </div>
        </Container>

        <div className="scrollWrapper" style={{ marginBottom: spacer4 }}>
          <div className="scrollContainer">
            <div className="imageDiv">
              <img src={require("../images/join/6.jpg")} />
              <img src={require("../images/join/2.jpg")} />
              <img src={require("../images/join/1.jpg")} />
              {/* <img src={require("../images/join/3.jpg")} /> */}
              <img src={require("../images/join/4.jpg")} />
              <img src={require("../images/join/5.jpg")} />
            </div>
          </div>
        </div>

        <Container
          className="outerContainer"
          style={{ marginBottom: spacer3 }}
          id="roles"
        >
          <div className="innerContainer">
            <h1 style={{ marginBottom: spacer3 }}>Open Roles</h1>
            {roleList}
          </div>
        </Container>

        <Container className="outerContainer" style={{ marginBottom: spacer4 }}>
          <div className="innerContainer">
            <div id="faq">
              <div className="container">
                <h1 style={{ marginBottom: spacer3 }}>
                  In case you're wondering (FAQs)
                </h1>
                {faqList}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default JoinOurTeam;
