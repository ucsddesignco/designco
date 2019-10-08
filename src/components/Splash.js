import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Container } from "react-grid-system";

import { spacer2, spacer3, spacer4 } from "../constants";
import blue from "../images/home/blue.png";
import purple from "../images/home/purple.png";
import green from "../images/home/green.png";
import pink from "../images/home/pink.png";
import yellow from "../images/home/yellow.png";

const COLORS = [
  ["#F8BBD0", "#1A237E"],
  ["#37474F", "#FFF59D"],
  ["#A7FFEB", "#512DA8"],
  ["#FFCDD2", "#006064"],
  ["#283593", "#FCE4EC"]
];

const BACKGROUND_IMAGES = [blue, yellow, purple, green, pink];

var item;

// Retrieve prev item
var prevItem = localStorage.getItem("prevItem");

// If website has already been visitted, generate new item until item does not match prev one
if (prevItem) {
  item = ++prevItem % COLORS.length;
} else {
  item = Math.floor(Math.random() * COLORS.length);
}

// Record new item
localStorage.setItem("prevItem", item);

var baseColor = COLORS[item][0];
var bgColor = COLORS[item][1];
var bgImage = BACKGROUND_IMAGES[item];

const splashStyle = {
  maxHeight: "1000px",
  height: "100%",
  miHeight: "100vh",
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: bgColor,
  backgroundPosition: "center center",
  color: baseColor
};

class Splash extends React.Component {
  render() {
    return (
      <div style={splashStyle}>
        <Navbar color={baseColor} />
        <Container className="outerContainer">
          <div className="innerContainer">
            <h1 className="splashTitle" style={{ marginBottom: spacer2 }}>
              Grow with our community of student designers.
            </h1>
            <p style={{ marginBottom: spacer2, maxWidth: "90rem" }}>
              We’re a strong and scrappy design community at UC San Diego,
              bridging the gap between young designers and industry. Previously
              known as Design at UCSD.
            </p>
            <Button
              link="/about"
              text="Learn More"
              color={bgColor}
              bgColor={baseColor}
              style={{ marginBottom: spacer4, paddingBottom: spacer3 }}
            ></Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Splash;
