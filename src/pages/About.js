import React from "react";
import { spacer2, spacer3, spacer4 } from "../constants.js";
import { team } from "../team.js";
import { Helmet } from "react-helmet";
import Member from "../components/MemberTiles";
import Navbar from "../components/Navbar";
import Accordion from "../components/about/accordion";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-grid-system";
import Walkman from '../images/about/walkman.svg';

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
      <div className="about">
        <Helmet>
          <title> About | Design Co </title>
        </Helmet>
        <Navbar color={"#000"} altColor={"#FFF"} from="about" />
        <Container className="headingContainer" style={{ marginBottom: spacer4 }}>
          <div className="innerContainer">
            <h1>
              We started in a tiny classroom in 2012. Now we're a growing
              community of over 300 designers.
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
        <Container className="faqContainer">
          <div className="innerContainer">
            <Row>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <h2 style={{ marginBottom: spacer2 }}>What is Design Co?</h2>
                <p style={{ marginBottom: spacer2 }}>
                  Design Co is a pre-professional student organization at UC San 
                  Diego that bridges the gap between designers and industry. Our 
                  mission is to cultivate a space that fosters opportunity and 
                  growth as an inclusive community of designers.
                </p>
                <p>
                  Check us out on social media or find us on campus to see what new 
                  things we have coming up soon! :)
                </p>
              </Col>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <h2 style={{ marginBottom: spacer2 }}>
                  What does the “Co” in Design Co mean?
                </h2>
                <p style={{ marginBottom: spacer2 }}>
                  The “Co” means Community, Collective, and Collaborative, which
                  is everything we stand for. We believe that fostering an
                  inclusive design community means collaborating with others and
                  growing with everyone.
                </p>
                <div className="linkContainer">
                  <a href="/community">
                    <div className="newButton">
                      <p>Join Our Community</p>
                    </div>
                  </a>
                </div>
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
                  weekly, on Wednesdays at 6:30pm at the Design & Innovation Building Room 202.
                  Sometimes things change, so we suggest following our
                  {" "}<a
                    href="https://www.instagram.com/ucsddesignco/"
                    target="_blank"
                    >
                    Instagram page
                    </a>{" "}
                  or
                  {" "}<a
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
        <div className="outerContainer accordionContainer">
          <div className="innerContainer">
            <h1 style={{ marginBottom: spacer3 }}>Meet the Board</h1>
            <Accordion></Accordion>
          </div>
        </div>
        <div className="outerContainer spotifyContainer">
          <div className="innerContainer">
            <h2>What our board is listening to</h2>
            <div className="flexContainer">
              <div className="musicContainer">
                <h2>Board Bopz Spotify Playlist</h2>
                <a href="https://open.spotify.com/playlist/5OTpI667X3PLcCNKJJIZeN?si=ebf21c7e1e9a4231" target="_blank">LISTEN NOW</a>
              </div>
              <img src={Walkman} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
