import React from "react";
import { spacer4, spacer3 } from "../constants.js";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Event from "../components/Event";
import { Container, Row } from "react-grid-system";

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

const pastEventList = pastEvents.map(function(event) {
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

class AllEvents extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Events | Design Co</title>
        </Helmet>
        <Navbar />
        <Container className="outerContainer" style={{ marginBottom: spacer3 }}>
          <div 
            className="innerContainer"
            style={{ marginBottom: spacer3 }}
          >
            <h1>
              We host events for both technical development and networking. 
              Come out to our events!
            </h1>
          </div>
          <div 
            className="events innerContainer"
            style={{ marginBottom: spacer3 }}
          >
            <h2 style={{ marginBottom: spacer3 }}>Upcoming Events</h2>
            <Row style={{ marginBottom: spacer3 }}>{eventList}</Row>
          </div>
          <div 
            className="events innerContainer"
            style={{ marginBottom: spacer4 }}
          >
            <h2 style={{ marginBottom: spacer3 }}>Past Events</h2>
            <Row style={{ marginBottom: spacer3 }}>{pastEventList}</Row>
          </div>
          <div 
            className="innerContainer"
            style={{ marginBottom: spacer4 }}
          >
            <h2>
              Follow us on Facebook to get the most up to date information 
              on all our events. </h2>
          </div>
        </Container>
      </div>
    )
  }
}

export default AllEvents;