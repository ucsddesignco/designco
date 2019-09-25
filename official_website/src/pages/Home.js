import React from "react";
import Navbar from "../components/Navbar";
import Splash from "../components/Splash";
import Footer from "../components/Footer";
import { spacer1, spacer2, spacer3, spacer4 } from "../constants";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Splash />
        <div className="outerContainer">
          <div
            className="innerContainer"
            style={{ marginTop: spacer4, marginBottom: spacer4 }}
          >
            <h2 style={{ marginBottom: spacer3 }}>What's coming up for you?</h2>
            [events]
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
