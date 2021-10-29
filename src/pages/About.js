import React from "react";
import { spacer2, spacer3, spacer4 } from "../constants.js";
import { team } from "../team.js";
import { Helmet } from "react-helmet";
import Member from "../components/MemberTiles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-grid-system";

const teamList = team.map((member) => (
  <Col sm={6} md={4}>
    <Member
      id={member.id}
      name={member.name}
      position={member.role}
      year={member.gradYear}
      link={member.link}
    />
  </Col>
));

class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title> About | Design Co </title>
        </Helmet>
        <Navbar color={"#000"} altColor={"#FFF"} from="about" />
        <Container className="outerContainer" style={{ marginBottom: spacer4 }}>
          <div className="innerContainer">
            <h1>
              We started in a tiny classroom in 2012. Now we're a growing
              community of over 200 designers.
            </h1>
          </div>
        </Container>
        <div className="scrollWrapper" style={{ marginBottom: spacer4 }}>
          <div className="scrollContainer">
            <div className="imageDiv">
              <img src={require("../images/about/1.jpg").default} />
              <img src={require("../images/about/2.jpg").default} />
              <img src={require("../images/about/3.jpg").default} />
              <img src={require("../images/about/4.jpg").default} />
              <img src={require("../images/about/5.jpg").default} />
              <img src={require("../images/about/6.jpg").default} />
            </div>
          </div>
        </div>
        <Container className="outerContainer">
          <div className="innerContainer">
            <Row>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <h2 style={{ marginBottom: spacer2 }}>What is Design Co?</h2>
                <p>
                  Design Co is a pre-professional student organization at UC San
                  Diego that bridges the gap between designers and industry. Our
                  mission is to cultivate a space that fosters opportunity and
                  growth as an inclusive community of designers.
                </p>
              </Col>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <h2 style={{ marginBottom: spacer2 }}>
                  What does the “Co” in Design Co mean?
                </h2>
                <p>
                  The “Co” means Community, Collective, and Collaborative, which
                  is everything we stand for. We believe that fostering an
                  inclusive design community means collaborating with others and
                  growing with everyone.
                </p>
              </Col>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <h2 style={{ marginBottom: spacer2 }}>
                  So what do you have for me?
                </h2>
                <p>
                  By combining workshops, events, and other career growth
                  opportunities, we’re tackling the challenges of breaking into
                  industry head-on and building a strong design community while
                  we're at it. And yes, it includes you too.
                </p>
              </Col>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <h2 style={{ marginBottom: spacer2 }}>
                  I’m sold — how do I join?
                </h2>
                <p>
                  Anyone can be a member of our community. We host events
                  weekly, on Wednesdays at 6:30PM at Dolores Huerta Room.
                  Sometimes things change, so we suggest following our{" "}
                  <a
                    href="https://www.facebook.com/ucsddesignco"
                    target="_blank"
                  >
                    Facebook page
                  </a>{" "}
                  to stay up-to-date.
                </p>
              </Col>
            </Row>
          </div>
          <div style={{ marginBottom: spacer3 }}></div>
        </Container>
        <Container className="outerContainer" style={{ marginBottom: spacer3 }}>
          <div className="innerContainer">
            <h1 style={{ marginBottom: spacer3 }}>Meet the team</h1>
            <Row>{teamList}</Row>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
