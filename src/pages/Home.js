import React from "react";
import Navbar from "../components/Navbar";
import Splash from "../components/Splash";
import Button from "../components/Button";
import Event from "../components/Event";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "../constants";
import placeholder from "../images/placeholder/fb.png";
import { setConfiguration } from "react-grid-system";

import intuit from "../images/sponsors/intuit.png";
import sony from "../images/sponsors/sony.png";
import fb from "../images/sponsors/fb.png";
import dlab from "../images/sponsors/dlab.png";
import { Helmet } from "react-helmet";

import event1 from "../images/events/fa19/week1_fallkickoff.png";
import event2 from "../images/events/fa19/week2_happylemon.png";
import event3 from "../images/events/fa19/week2_internpanel.png";

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
  console.log(events[i].date + " | " + today);
  if (events[i].date >= today) upcomingEvents.unshift(events[i]);
  else break;
}

const eventList = upcomingEvents.map(function(event) {
  // Load events occurring today or later
  return (
    <Event
      title={event.title}
      link={event.link}
      image={event.image}
      date={event.date}
      time={event.time}
      location={event.location}
    />
  );
});

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
            <h2 style={{ marginBottom: spacer3 }}>News</h2>

            <Row>
              <Col sm={6} style={{ marginBottom: spacer3 }}>
                <h3 style={{ marginBottom: spacer1 }}>Design Buds</h3>

                <p style={{ marginBottom: spacer2 }}>
                  Design Bud applications are out! This initiative is meant to
                  serve as a friendly student/student program for those who want
                  to better integrate into the design community on campus.
                  Applications are due Wednesday, Oct. 9, 2019 at 11:59PM.{" "}
                  <a href="http://bit.ly/designbudsfall19" target="_blank">
                    Apply Now
                  </a>
                </p>
                <p class="text_caption">Oct. 3, 2019</p>
              </Col>
              <Col sm={6} style={{ marginBottom: spacer3 }}>
                <h3 style={{ marginBottom: spacer1 }}>Meet, Design Co!</h3>

                <p style={{ marginBottom: spacer2 }}>
                  Design at UCSD is now Design Co. We’ve changed our name,
                  brand, and visual identity, and we’ve updated our mission
                  statement and values.{" "}
                  <a
                    href="https://medium.com/ucsddesignco/meet-design-co-8f250a78f4d9"
                    target="_blank"
                  >
                    Read More
                  </a>
                </p>
                <p class="text_caption">Sept. 27, 2019</p>
              </Col>
            </Row>
          </div>
          <div
            className="events innerContainer"
            style={{ marginBottom: spacer4 }}
          >
            <h2 style={{ marginBottom: spacer3 }}>Upcoming Events</h2>
            <Row style={{ marginBottom: spacer3 }}>{eventList}</Row>

            <Row style={{ marginBottom: spacer4 }}>
              <Col>
                <Button
                  link="https://www.facebook.com/pg/ucsddesignco/events/"
                  target="_blank"
                  text="View All Events"
                ></Button>
              </Col>
            </Row>
            <h2 style={{ marginBottom: spacer3 }}>Sponsors</h2>
            <Row>
              <Col xs={6} md={3} style={{ marginBottom: spacer2 }}>
                <a href="https://www.intuit.com/" target="_blank">
                  <img src={intuit} alt="Intuit"></img>
                </a>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer2 }}>
                <a href="https://www.sony.com/" target="_blank">
                  <img src={sony} alt="Sony"></img>
                </a>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer2 }}>
                <a href="https://facebook.com" target="_blank">
                  <img src={fb} alt="Facebook"></img>
                </a>
              </Col>
              <Col xs={6} md={3} style={{ marginBottom: spacer2 }}>
                <a href="https://designlab.ucsd.edu/" target="_blank">
                  <img src={dlab} alt="The Design Lab at UC San Diego"></img>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
