import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { base, spacer1, spacer2 } from "../constants";

class EventLarge extends React.Component {
  static defaultProps = {
    title: "ERROR",
    link: "",
    image: "",
    date: "",
    year: ""
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
          {this.props.date}
        </p>
      </>
    );
  }
}

export default EventLarge;
