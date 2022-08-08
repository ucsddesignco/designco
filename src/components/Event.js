import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { base, spacer1, spacer2 } from "../constants";

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

class Event extends React.Component {
  static defaultProps = {
    title: "ERROR",
    link: "",
    image: "",
    date: "",
    time: "",
    location: "",
    slidelink: "",
    videolink: ""
  };

  render() {
    return (
      <>
        <a href={this.props.link} target="_blank">
          <img
            style={{ marginBottom: spacer1 }}
            src={require(`../images/events/${this.props.image}.png`).default}
            alt=""
          ></img>
        </a>
        <a href={this.props.link} target="_blank">
          <h3 style={{ marginBottom: spacer1 }}>{this.props.title}</h3>
        </a>
        <p className="text_small" style={{ marginBottom: base }}>
          {formatDate(this.props.date)}
          <br></br>
          {this.props.location}
        </p>
        <div className="text_small" >
          <a
            href={this.props.slidelink} 
            target="_blank" 
            style={{ display: 'inline-block' }}
          >
            <p
              className={ (this.props.slidelink == "" ? true: false) ? "hide-link" : "show-link" }
            >
              SLIDES
            </p>
          </a>
          <a href={this.props.videolink} target="_blank" style={{ display: 'inline-block' }}>
            <p
              className={ (this.props.videolink == "" ? true: false) ? "hide-link" : null }
            >
              RECORDING
            </p>
          </a>
        </div>
      </>
    );
  }
}

export default Event;
