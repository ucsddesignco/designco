import React from "react";
import Splash from "../components/Splash";
import Button from "../components/Button";
import Event from "../components/Event";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "../constants";

import intuit from "../images/sponsors/intuit.png";
import sony from "../images/sponsors/sony.png";
import servicenow from "../images/sponsors/servicenow.png";
import dlab from "../images/sponsors/dlab.png";
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
        <Col xs={12} style={{marginBottom: spacer2}}>
          <Event
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
                sm={6}
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
                  2019–20 Rewind: A Year of Firsts
                </h3>
                <p style={{ marginBottom: spacer2 }}>
                  This past year was filled with a lot of “firsts” as we
                  continued to build an inclusive community of student
                  designers. With the 2020–21 school year fast approaching, we
                  wanted to highlight all the new events and initiatives that
                  were launched.{" "}
                  <a
                    href="https://medium.com/ucsddesignco/2019-20-rewind-a-year-of-firsts-281c3be71c89"
                    target="_blank"
                  >
                    Read More
                  </a>
                </p>
                <p className="text_caption">Sept. 30, 2020</p>
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
                <a href="https://www.servicenow.com/" target="_blank">
                  <img src={servicenow} alt="ServiceNow"></img>
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
