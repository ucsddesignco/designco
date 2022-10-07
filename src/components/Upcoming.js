import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2 } from "../constants";

function formatTime(time) {
  // Check that time is a number
  // if (typeof time != "number")
  //   throw new Error(
  //     'Invalid event time: "' + time + '". Must be a number, not a string.'
  //   );

  // Determine if AM or PM
  let ampm = time <= 1159 || time == 2400 ? "AM" : "PM";

  // Select hours and minutes if possible
  let hour = parseInt(time / 100);
  let min_tens = parseInt((time - hour * 100) / 10);
  let min_ones = parseInt(time - hour * 100 - min_tens * 10);

  // Automatically add 12 hours, subtract if too much
  hour += 12;
  if (hour >= 24) hour -= 12;

  return (hour <= 12 ? hour : hour - 12) + ":" + min_tens + min_ones + ampm;
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(dateInt) {
  let dateStr = String(dateInt);
  dateStr = `${dateStr.substring(0, 4)}-${dateStr.substring(
    4,
    6
  )}-${dateStr.substring(6)}`;

  let date = new Date(dateStr);

  return (
    days[date.getUTCDay()] +
    ", " +
    months[date.getUTCMonth()] +
    " " +
    date.getUTCDate()
  );
}

class Upcoming extends React.Component {
  static defaultProps = {
    title: "ERROR",
    link: "",
    image: "",
    date: "",
    time: "",
    location: "",
    description: ""
  };

  render() {
    return (
      <>
      <Row>
        <Col md={6} style={{ marginBottom: spacer1 }}>
            <a href={this.props.link} target="_blank" id="event-title">
                <h3 style={{ marginBottom: spacer1 }}>{this.props.title}</h3>
            </a>
            <p className="text_small" style={{ marginBottom: spacer1 }}>
                {formatDate(this.props.date)} at {formatTime(this.props.time)}
                <br></br>
                {this.props.location}
                <br></br>
                <br></br>
                {this.props.description}
            </p>
            <a href={this.props.link} target="_blank">
                <p className="text_small">IG EVENT</p>
            </a>
        </Col>
        <Col md={6}>
            <a href={this.props.link} target="_blank">
                <img
                    src={require(`../images/events/${this.props.image}.jpg`).default}
                    alt=""
                    style={{border: "solid 1px #191919"}}
                ></img>
            </a>
        </Col>
        </Row>
      </>
    );
  }
}

export default Upcoming;
