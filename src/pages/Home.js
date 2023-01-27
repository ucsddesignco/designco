import React from "react";
import Splash from "../components/Splash";
import Button from "../components/Button";
import Event from "../components/Event";
import UpcomingHome from "../components/UpcomingHome";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "../constants";
import Footer from "../components/Footer";

import google from "../images/work-companies/google.png";
import microsoft from "../images/work-companies/microsoft.png";
import meta from "../images/work-companies/meta.png";
import adobe from "../images/work-companies/adobe.png";
import uber from "../images/work-companies/uber.png";
import disney from "../images/work-companies/disney.png";
import slack from "../images/work-companies/slack.png";
import servicenow from "../images/work-companies/servicenow.png";
import amazon from "../images/work-companies/amazon.png";
import robinhood from "../images/work-companies/robinhood.png";
import twitch from "../images/work-companies/twitch.png";
import mongo from "../images/work-companies/mongo.png";

import { Helmet } from "react-helmet";

import { events } from "../events.js";

// Get today's date
const d = new Date();
let currYear = String(d.getFullYear());
let currMonth = String(d.getMonth() + 1).padStart(2, "0");
let currDate = String(d.getDate()).padStart(2, "0");
const today = parseInt(currYear + currMonth + currDate);

// Sort events for upcoming
events.sort((a, b) => (a.date < b.date ? 1 : -1));

// Get upcoming events (events occurring today or later)
let upcomingEvents = [];

for (let i = 0; i < events.length; i++) {
  if (events[i].date >= today) upcomingEvents.unshift(events[i]);
  else break;
}

const eventList =
  upcomingEvents.length === 0 ? (
    <p style={{ marginLeft: spacer1 }}>
      Keep an eye out for Winter quarter updates!
    </p>
  ) : (
    upcomingEvents.map(function (event) {
      // Load events occurring today or later
      return (
        <Col sm={upcomingEvents.length > 1 ? 6 : 12} style={{ marginBottom: spacer2 }}>
          <UpcomingHome
            title={event.title}
            link={event.link}
            image={event.image}
            date={event.date}
            time={event.time}
            location={event.location}
          />
        </Col>
      );
    })
  );

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title> Design Co </title>
        </Helmet>
        <Splash />
        <Container className="outerContainer">
          <div
            className="innerContainer"
            style={{ marginTop: spacer4, marginBottom: spacer3 }}
          >
            <Row>
              <Col
                sm={upcomingEvents.length > 1 ? 12 : 6}
                className="events innerContainer"
                style={{ marginBottom: spacer3 }}
              >
                <h2 style={{ marginBottom: spacer3 }}>Upcoming Events</h2>

                <Row style={{ marginBottom: spacer2 }}>{eventList}</Row>
                <Row>
                  <Col>
                    <Button
                      style={{ marginBottom: spacer3 }}
                      link="/events"
                      text="View All Events"
                    ></Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={6} style={{ marginBottom: spacer3 }}>
                <h2 style={{ marginBottom: spacer3 }}>News</h2>
                <h3 style={{ marginBottom: spacer1 }}>
                  Alumni Panel 2022 Recap
                </h3>
                <p style={{ marginBottom: spacer2 }}>
                  Five Design Co alumni share their experiences as full-time designers and researchers.
                  <br></br>
                  <a
                    href="https://medium.com/@ucsddesignco/alumni-panel-2022-recap-ecf6d3917a31"
                    target="_blank"
                  >
                    Read More
                  </a>
                </p>
                <p className="text_caption">Aug. 22, 2022</p>
              </Col>
            </Row>
          </div>
          <div
            className="events innerContainer"
            style={{ marginBottom: spacer4 }}
          >
            {/* <h2 style={{ marginBottom: spacer3 }}>Upcoming Events</h2>
            <Row style={{ marginBottom: spacer2 }}>{eventList}</Row>

            <Row style={{ marginBottom: spacer4 }}>
              <Col>
                <Button
                  style={{ marginBottom: spacer3 }}
                  link="/events"
                  text="View All Events"
                ></Button>
              </Col>
            </Row> */}
            <h2 style={{ marginBottom: spacer3 }}>Our community has gone on to work at</h2>
            <Row>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={google} alt="Google"></img>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={microsoft} alt="Microsoft"></img>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={meta} alt="Meta"></img>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={adobe} alt="Adobe"></img>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={uber} alt="Uber"></img>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={disney} alt="Disney"></img>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={slack} alt="Slack"></img>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={servicenow} alt="ServiceNow"></img>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={amazon} alt="Amazon"></img>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={robinhood} alt="Robinhood"></img>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={twitch} alt="Twitch"></img>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer1 }}>
                <img className="work-company" src={mongo} alt="MongoDB"></img>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
