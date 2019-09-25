import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

import { spacer1, spacer2, spacer3, spacer4 } from "../constants";

import { base8, base4, base16, base24, base10 } from "../constants";
import withPink from "../images/home/withPink.png";
import withForest from "../images/home/withForest.png";
import withBlue from "../images/home/withBlue.png";
import withGreen from "../images/home/withGreen.png";
import withYellow from "../images/home/withYellow.png";
import withBabyPink from "../images/home/withBabyPink.png";

const COLORS = [
  ["#F8BBD0", "#1A237E"],
  ["#00695C", "#E3F2FD"],
  ["#A7FFEB", "#512DA8"],
  ["#FFCDD2", "#006064"],
  ["#FFF8E1", "#D32F2F"],
  ["#37474F", "#69F0AE"]
];

const BACKGROUND_IMAGES = [
  withPink,
  withForest,
  withBlue,
  withBabyPink,
  withYellow,
  withGreen
];

var randomItem;

// Retrieve prev item
var prevItem = localStorage.getItem("prevItem");

// If website has already been visitted, generate new item until item does not match prev one
if (prevItem) {
  while (true) {
    randomItem = Math.floor(Math.random() * COLORS.length);
    if (prevItem != randomItem) {
      break;
    }
  }
} else {
  randomItem = Math.floor(Math.random() * COLORS.length);
}

// Record new item
localStorage.setItem("prevItem", randomItem);

var baseColor = COLORS[randomItem][0];
var bgColor = COLORS[randomItem][1];
var bgImage = BACKGROUND_IMAGES[randomItem];

const splashStyle = {
  maxHeight: "1000px",
  height: "100%",
  minHeight: "100vh",
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
        <div className="outerContainer">
          <div className="innerContainer">
            <h1 style={{ marginBottom: spacer2 }}>
              Grow with our community of student designers.
            </h1>
            <p style={{ marginBottom: spacer2 }}>
              We’re a strong and scrappy design community at UC San Diego,
              bridging the gap between young designers and industry. Previously
              known as Design at UCSD.
            </p>
            <Button
              link="/about"
              text="Learn More"
              color={bgColor}
              bgColor={baseColor}
              style={{ paddingBottom: spacer4 }}
            ></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
