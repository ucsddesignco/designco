import React from "react";
import { Row, Col, Container } from "react-grid-system";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { spacer2, spacer3, spacer4 } from "../constants";
import TablePage from "../components/SponsorshipTable";
import Footer from "../components/Footer";

class Partnership extends React.Component {
  render() {
    return (
      <div className="partnership">
        <Helmet>
          <title> Partnership | Design Co </title>
        </Helmet>
        <div className="partnershipSplash">
          <Navbar color={"#FFF"} altColor={"#000"} from="home" />
          <Container className="outerContainer">
            <Row className="innerContainer">
              <Col sm={9} className="splashText">
                <h1 style={{ marginTop: spacer2 }}>
                  Partnership Offerings <br /> 2022-2023
                </h1>
                <p style={{ marginTop: spacer2 }}>
                  Design Co is a pre-professional student organization at UC San
                  Diego that bridges the gap between designers and industry.
                </p>
                <Button
                  link="#about-partnership"
                  text="Learn More"
                  color="#000"
                  bgColor="#FFF"
                  style={{ marginTop: spacer3, marginBottom: spacer4 }}
                ></Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          id="about-partnership"
          style={{ marginTop: spacer4, marginBottom: spacer4 }}
        >
          <Container className="outerContainer">
            <Row className="innerContainer">
              <Col>
                <h1>About</h1>

                <div className="customList">
                  <img
                    src={require("../images/partnership/arrow.svg").default}
                  />
                  <p>
                    Our mission is to cultivate a space that fosters opportunity
                    and growth as an inclusive community of designers.
                  </p>
                </div>

                <div className="customList">
                  <img
                    src={require("../images/partnership/arrow.svg").default}
                  />
                  <p>
                    Students in our organization have demonstrated their ability
                    to produce meaningful work at their internships and careers
                    at top design-centric companies such as Google, Facebook,
                    Salesforce, IBM, LinkedIn, Uber, Workday, Wish, Intuit,
                    IDEO, Sony, ServiceNow and more.
                  </p>
                </div>

                <div className="customList">
                  <img
                    src={require("../images/partnership/arrow.svg").default}
                  />
                  <p>Last Year’s Statistics:</p>
                </div>

                <Row className="statsRow">
                  <Col sm={6}>
                    <img
                      src={require("../images/partnership/stats-1.png").default}
                    ></img>
                  </Col>
                  <Col sm={6}>
                    <img
                      src={require("../images/partnership/stats-2.png").default}
                    ></img>
                  </Col>
                  <Col sm={6}>
                    <img
                      src={require("../images/partnership/stats-3.png").default}
                    ></img>
                  </Col>
                  <Col sm={6}>
                    <img
                      src={require("../images/partnership/stats-4.png").default}
                    ></img>
                  </Col>
                </Row>

                <div className="customList">
                  <img
                    src={require("../images/partnership/arrow.svg").default}
                  />
                  <p>Previous Sponsors:</p>
                </div>
                <Row className="previousSponsors">
                  <Col xs={6} sm={3}>
                    <img
                      src={require("../images/sponsors/sony.png").default}
                      alt="Sponsor"
                    />
                  </Col>
                  <Col xs={6} sm={3}>
                    <img
                      src={require("../images/sponsors/intuit.png").default}
                      alt="Sponsor"
                    />
                  </Col>
                  <Col xs={6} sm={3}>
                    <img
                      src={require("../images/sponsors/servicenow.png").default}
                      alt="Sponsor"
                    />
                  </Col>
                  <Col xs={6} sm={3}>
                    <img
                      src={require("../images/sponsors/dlab.png").default}
                      alt="Sponsor"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="sponsorshipTable outerContainer">
          <Row className="innerContainer">
            <Col className="tables">
              <h1 className="h1-sponsorship">Sponsorship Packages</h1>
              {/* <p className="prices">
                *Prices reduced to accommodate for the COVID-19 pandemic and
                nature of remote events
              </p> */}
              <TablePage />
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: spacer4, marginBottom: spacer4 }}>
          <Container className="outerContainer">
            <Row className="innerContainer">
              <Col>
                <h1>Why Partner With Us?</h1>

                <div className="customList">
                  <img
                    src={require("../images/partnership/arrow.svg").default}
                  />
                  <p>
                    <b>Brand Exposure</b>
                    <br />
                    Company logo placed across all of our digital platforms to
                    reach a wide audience of students, researchers, educators,
                    and faculty at UC San Diego.
                  </p>
                </div>

                <div className="customList">
                  <img
                    src={require("../images/partnership/arrow.svg").default}
                  />
                  <p>
                    <b>Campus Engagement</b>
                    <br />
                    + 35,000+ students, faculty, professors, and visitors
                    <br />+ Increase brand recognizability by UC San Diego’s
                    community as a whole
                  </p>
                </div>

                <div className="customList">
                  <img
                    src={require("../images/partnership/arrow.svg").default}
                  />
                  <p>
                    <b>Recruiting Opportunities</b>
                    <br />
                    + Access student resumes and portfolios through recruiting
                    opportunities
                    <br />+ 1,000+ design students and growing through Stride
                    Career Fair, Design Sprints, Formal, and Informal Sessions
                  </p>
                </div>

                <div className="customList">
                  <img
                    src={require("../images/partnership/arrow.svg").default}
                  />
                  <p>
                    <b>Product Exposure</b>
                    <br />
                    + Bring your demos to events you attend and expose students
                    to your tools or services <br />+ Conduct user testing and
                    receive valuable feedback on your product(s)
                  </p>
                </div>

                <div className="customList">
                  <img
                    src={require("../images/partnership/arrow.svg").default}
                  />
                  <p>
                    <b>Event Management</b>
                    <br />
                    + Organized and handled by our events team
                    <br />+ Includes digital marketing, Zoom meeting logistics,
                    and post-event reports containing statistics about attendees
                  </p>
                </div>
                <h2 style={{ marginTop: spacer3 }}>
                  <a href="mailto:designatucsd@gmail.com?subject=Design Co Partnership">
                    Partner With Us
                  </a>
                </h2>
                {/* <Row>
                  <Col>
                    <Button
                      style={{ marginBottom: spacer3 }}
                      link="/contact"
                      text="Contact Us"
                    ></Button>
                  </Col>
                </Row> */}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Partnership;
