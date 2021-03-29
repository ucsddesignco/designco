import React from "react";
import { spacer3, spacer4, spacer2 } from "../constants.js";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Event from "../components/Event";
import { Container, Row, Col } from "react-grid-system";

import { events } from "../events.js";

// Get today's date
const d = new Date();
let currYear = String(d.getFullYear());
let currMonth = String(d.getMonth() + 1).padStart(2, "0");
let currDate = String(d.getDate()).padStart(2, "0");
const today = parseInt(currYear + currMonth + currDate);

// Sort events for upcoming
events.sort((a, b) => (a.date < b.date ? 1 : -1));

// Get upcoming events and past events
let upcomingEvents = [];
let pastEvents = [];

for (let i = 0; i < events.length; i++) {
  if (events[i].date >= today) upcomingEvents.unshift(events[i]);
  else pastEvents.unshift(events[i]);
}

// Reverse the order for past events
pastEvents.reverse();

const eventList = upcomingEvents.map(function (event) {
  // Load events occurring today or later
  return (
    <Col sm={6} style={{ marginBottom: spacer2 }}>
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
});

const pastEventList = pastEvents.map(function (event) {
  // Load events occurring today or later
  return (
    <Col sm={6} style={{ marginBottom: spacer2 }}>
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
});

class AllEvents extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Events | Design Co</title>
        </Helmet>
        <Navbar color={"#000"} altColor={"#FFF"} from="events" />
        <Container className="outerContainer" style={{ marginBottom: spacer4 }}>
          <div className="innerContainer" style={{ marginBottom: spacer3 }}>
            <h1>
              During Spring Quarter, we’ll be hosting weekly, interactive events
              focused on professional development and diversity, equity, and
              inclusion.
            </h1>
            <h2 style={{ marginTop: spacer3 }}>
              <a href="/gbm">Zoom link to our GBMs</a>
            </h2>
          </div>
          <div
            className="events innerContainer"
            style={{ marginBottom: spacer3 }}
          >
            <h2 style={{ marginBottom: spacer3 }}>Upcoming Events</h2>
            <Row>{eventList}</Row>
          </div>
          <div
            className="events innerContainer"
            style={{ marginBottom: spacer4 }}
          >
            <h2 style={{ marginBottom: spacer3 }}>Past Events</h2>
            <Row>{pastEventList}</Row>
          </div>
          <div className="innerContainer">
            <h2>
              Follow us on Facebook to get the most up to date information on
              all our events.{" "}
            </h2>
          </div>
        </Container>
      </div>
    );
  }
}

export default AllEvents;
