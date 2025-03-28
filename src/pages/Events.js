import React from "react";
import { spacer3, spacer4, spacer2, spacer1 } from "../constants.js";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Event from "../components/Event";
import Upcoming from "../components/Upcoming";
import EventLarge from "../components/EventLarge";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-grid-system";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { events } from "../events.js";
import { eventsLarge } from "../events-large.js";

// Get today's date
const d = new Date();
let currYear = String(d.getFullYear());
let currMonth = String(d.getMonth() + 1).padStart(2, "0");
let currDate = String(d.getDate()).padStart(2, "0");
const today = parseInt(currYear + currMonth + currDate);

// Sort events for upcoming
events.sort((a, b) => {
  if (a.date === b.date) return a.time < b.time ? 1 : -1;
  return a.date < b.date ? 1 : -1
});

// Get upcoming events and past events
let upcomingEvents = [];
let pastEvents1 = [];
let pastEvents2 = [];
let pastEvents3 = [];
let pastEvents4 = [];

let largeEvents1 = [];
let largeEvents2 = [];
let largeEvents3 = [];
let largeEvents4 = [];

for (let i = 0; i < events.length; i++) {
  if (events[i].date >= today) upcomingEvents.unshift(events[i]);
  else if (events[i].date > 20240610) pastEvents1.unshift(events[i]);
  else if (events[i].date > 20230920) pastEvents2.unshift(events[i]);
  else if (events[i].date > 20220920) pastEvents3.unshift(events[i]);
  else pastEvents4.unshift(events[i]);
}

for (let i = 0; i < eventsLarge.length; i++) {
  if (eventsLarge[i].year >= 2025) largeEvents1.unshift(eventsLarge[i]);
  else if (eventsLarge[i].year >= 2024) largeEvents2.unshift(eventsLarge[i]);
  else if (eventsLarge[i].year >= 2023) largeEvents3.unshift(eventsLarge[i]);
  else largeEvents4.unshift(eventsLarge[i]);
}

// Reverse the order for past events
pastEvents1.reverse();
pastEvents2.reverse();
pastEvents3.reverse();
pastEvents4.reverse();

const largeEventList1 = largeEvents1.map(function (event) {
  // Load large events occurring 2024
  return (
    <Col sm={4} style={{ marginBottom: spacer2 }}>
      <EventLarge
        title={event.title}
        link={event.link}
        image={event.image}
        date={event.date}
        year={event.year}
        imageURL={event.imageURL}
      />
    </Col>
  );
});

const largeEventList2 = largeEvents2.map(function (event) {
  // Load large events occurring 2024
  return (
    <Col sm={4} style={{ marginBottom: spacer2 }}>
      <EventLarge
        title={event.title}
        link={event.link}
        image={event.image}
        date={event.date}
        year={event.year}
        imageURL={event.imageURL}
      />
    </Col>
  );
});

const largeEventList3 = largeEvents3.map(function (event) {
  return (
    <Col sm={4} style={{ marginBottom: spacer2 }}>
      <EventLarge
        title={event.title}
        link={event.link}
        image={event.image}
        date={event.date}
        year={event.year}
        imageURL={event.imageURL}
      />
    </Col>
  );
});

const largeEventList4 = largeEvents4.map(function (event) {
  return (
    <Col sm={4} style={{ marginBottom: spacer2 }}>
      <EventLarge
        title={event.title}
        link={event.link}
        image={event.image}
        date={event.date}
        year={event.year}
        imageURL={event.imageURL}
      />
    </Col>
  );
});

const eventList = upcomingEvents.map(function (event) {
  // Load events occurring today or later
  return (
    <Col sm={12} style={{ marginBottom: spacer2, paddingBottom: spacer2 }}>
      <Upcoming
        title={event.title}
        link={event.link}
        image={event.image}
        date={event.date}
        time={event.time}
        location={event.location}
        description={event.description} 
        imageURL={event.imageURL}
      />
    </Col>
  );
});

const pastEventList1 = pastEvents1.map(function (event) {
  // Load events occurring today or later
  return (
    <Col sm={4} style={{ marginBottom: spacer2 }}>
      <Event
        title={event.title}
        link={event.link}
        image={event.image}
        date={event.date}
        time={event.time}
        location={event.location}
        slidelink={event.slidelink}
        videolink={event.videolink}
        imageURL={event.imageURL}
      />
    </Col>
  );
});

const pastEventList2 = pastEvents2.map(function (event) {
  // Load events occurring today or later
  return (
    <Col sm={4} style={{ marginBottom: spacer2 }}>
      <Event
        title={event.title}
        link={event.link}
        image={event.image}
        date={event.date}
        time={event.time}
        location={event.location}
        slidelink={event.slidelink}
        videolink={event.videolink}
        imageURL={event.imageURL}
      />
    </Col>
  );
});

const pastEventList3 = pastEvents3.map(function (event) {
  // Load events occurring today or later
  return (
    <Col sm={4} style={{ marginBottom: spacer2 }}>
      <Event
        title={event.title}
        link={event.link}
        image={event.image}
        date={event.date}
        time={event.time}
        location={event.location}
        slidelink={event.slidelink}
        videolink={event.videolink}
        imageURL={event.imageURL}
      />
    </Col>
  );
});

const pastEventList4 = pastEvents4.map(function (event) {
  // Load events occurring today or later
  return (
    <Col sm={4} style={{ marginBottom: spacer2 }}>
      <Event
        title={event.title}
        link={event.link}
        image={event.image}
        date={event.date}
        time={event.time}
        location={event.location}
        slidelink={event.slidelink}
        videolink={event.videolink}
        imageURL={event.imageURL}
      />
    </Col>
  );
});

class AllEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      show2: true,
      show3: true,
      show4: true,
      activeBtn: 0
    };

    this.toggleBtn.bind(this);
    this.toggleBtn2.bind(this);

    this.toggleAccordion.bind(this);
    this.toggleAccordion2.bind(this);
    this.toggleAccordion3.bind(this);
    this.toggleAccordion4.bind(this);
  }

  toggleBtn = () => {
    this.setState({
      activeBtn: 0
    })
  }

  toggleBtn2 = () => {
    this.setState({
      activeBtn: 1
    })
  }

  toggleAccordion = () => {
    if (!this.state.show) {
      document.getElementById("acc-arrow").classList.remove("close-arrow");
    } else {
      document.getElementById("acc-arrow").classList.add("close-arrow");
    }

    this.setState({
      show: !this.state.show
    })
  }

  toggleAccordion2 = () => {
    if (!this.state.show2) {
      document.getElementById("acc-arrow2").classList.remove("close-arrow");
    } else {
      document.getElementById("acc-arrow2").classList.add("close-arrow");
    }

    this.setState({
      show2: !this.state.show2
    })
  }

  toggleAccordion3 = () => {
    if (!this.state.show3) {
      document.getElementById("acc-arrow3").classList.remove("close-arrow");
    } else {
      document.getElementById("acc-arrow3").classList.add("close-arrow");
    }

    this.setState({
      show3: !this.state.show3
    })
  }

  toggleAccordion4 = () => {
    if (!this.state.show4) {
      document.getElementById("acc-arrow4").classList.remove("close-arrow");
    } else {
      document.getElementById("acc-arrow4").classList.add("close-arrow");
    }

    this.setState({
      show4: !this.state.show4
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Events | Design Co</title>
        </Helmet>
        <Navbar color={"#000"} altColor={"#FFF"} from="events" />
        <Container className="eventsOuterContainer" style={{ marginBottom: spacer4 }}>
          <div className="eventsInnerContainer" style={{ marginBottom: spacer3 }}>
            <h1>
              Build your design skills and connect with fellow designers at our workshops, 
              socials, and large-scale events.
            </h1>
          </div>
          <div
            style={{ 
              paddingTop: spacer3, 
              paddingBottom: spacer3,
              color: 'white',
              backgroundColor: '#191919' 
            }}
            className={(eventList.length > 0) ? null : "hide-link"}
          >
            <h2 className="eventsInnerContainer" style={{ marginBottom: spacer3 }}>Upcoming Events</h2>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              showIndicators={(eventList.length > 1) ? true : false}
              
            >
              {eventList}
            </Carousel>
          </div>
          <div
            className="events eventsInnerContainer"
            style={{ paddingBottom: spacer3, paddingTop: spacer3 }}
          >
            <h2 style={{ marginBottom: spacer2 }}>Past Events</h2>
            <div style={{ marginBottom: spacer3 }}>
              <button  
                style={{ display: 'inline-block', marginRight: spacer1 }}
                onClick={() => this.toggleBtn()}
                className={ (this.state.activeBtn === 0 ? true: false) ? "clicked" : "normal" }
              >
                <h4>GBMs/Socials</h4>
              </button>
              <button 
                style={{ display: 'inline-block' }}
                onClick={() => this.toggleBtn2()}
                className={ (this.state.activeBtn === 1 ? true: false) ? "clicked" : "normal" }
              >
                <h4>Large-Scale Events</h4>
              </button>
            </div>
            <div style={{ marginBottom: spacer4 }}>
              <div style={{ marginBottom: spacer2, display: "flex", justifyContent: "space-between" }}>
                <h3 onClick={this.toggleAccordion} style={{ display: 'inline-block', cursor: 'pointer' }}>2024-2025</h3>
                <img 
                  onClick={this.toggleAccordion}
                  src={require(`../images/events/close-arrow.svg`).default}
                  style={{ width: '30px', display: 'inline-block' }}
                  id="acc-arrow"
                />
              </div>
              <div className={
                this.state.show ? "open-accordion" : "close-accordion"
              }>
                <div className={this.state.activeBtn === 0 ? null : "hide-link"} >
                  <Row>{pastEventList1}</Row>
                </div>
                <div className={this.state.activeBtn === 1 ? null : "hide-link"} >
                  <Row>{largeEventList1}</Row>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: spacer4 }}>
              <div style={{ marginBottom: spacer2, display: "flex", justifyContent: "space-between" }}>
                <h3 onClick={this.toggleAccordion2} style={{ display: 'inline-block', cursor: 'pointer' }}>2023-2024</h3>
                <img 
                  onClick={this.toggleAccordion2}
                  src={require(`../images/events/close-arrow.svg`).default}
                  style={{ width: '30px', display: 'inline-block' }}
                  id="acc-arrow2"
                />
              </div>
              <div className={
                this.state.show2 ? "open-accordion" : "close-accordion"
              }>
                <div className={this.state.activeBtn === 0 ? null : "hide-link"} >
                  <Row>{pastEventList2}</Row>
                </div>
                <div className={this.state.activeBtn === 1 ? null : "hide-link"} >
                  <Row>{largeEventList2}</Row>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: spacer4 }}>
              <div style={{ marginBottom: spacer2, display: "flex", justifyContent: "space-between" }}>
                <h3 onClick={this.toggleAccordion3} style={{ display: 'inline-block', cursor: 'pointer' }}>2022-2023</h3>
                <img 
                  onClick={this.toggleAccordion3}
                  src={require(`../images/events/close-arrow.svg`).default}
                  style={{ width: '30px', display: 'inline-block' }}
                  id="acc-arrow3"
                />
              </div>
              <div className={
                this.state.show3 ? "open-accordion" : "close-accordion"
              }>
                <div className={this.state.activeBtn === 0 ? null : "hide-link"} >
                  <Row>{pastEventList3}</Row>
                </div>
                <div className={this.state.activeBtn === 1 ? null : "hide-link"} >
                  <Row>{largeEventList3}</Row>
                </div>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: spacer2, display: "flex", justifyContent: "space-between" }}>
                <h3 onClick={this.toggleAccordion4} style={{ display: 'inline-block', cursor: 'pointer' }}>Archive</h3>
                <img 
                  onClick={this.toggleAccordion4}
                  src={require(`../images/events/close-arrow.svg`).default}
                  style={{ width: '30px', display: 'inline-block' }}
                  id="acc-arrow4"
                />
              </div>
              <div className={
                this.state.show4 ? "open-accordion" : "close-accordion"
              }>
                <div className={this.state.activeBtn === 0 ? null : "hide-link"} >
                  <Row>{pastEventList4}</Row>
                </div>
                <div className={this.state.activeBtn === 1 ? null : "hide-link"} >
                  <Row>{largeEventList4}</Row>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default AllEvents;
