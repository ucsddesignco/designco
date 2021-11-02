import React from "react";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import { spacer2, spacer4 } from "../constants";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, hideSidePanel: true, from: this.props.from };
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  toggleHamburger = () => {
    if (!this.state.active) {
      document.getElementById("hamburger").classList.add("is-active");
      document.getElementById("hamburger-inner").style.backgroundColor =
        this.props.altColor;
      document.body.style.overflow = "hidden";
    } else {
      document.getElementById("hamburger").classList.remove("is-active");
      document.body.style.overflow = "scroll";

      // Delay resetting hamburger color for natural animation
      setTimeout(() => {
        document.getElementById("hamburger-inner").style.backgroundColor =
          this.props.color;
      }, 200);
    }

    this.setState({
      active: !this.state.active,
      hideSidePanel: !this.state.hideSidePanel,
    });
  };

  escFunction(event) {
    if (event.keyCode === 27) {
      if (!this.state.hideSidePanel) {
        this.toggleHamburger();
      }
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
    if (this.state.from != "home") {
      document.getElementById(this.state.from).style.opacity = "0.5";
    }
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
    if (this.state.from != "home") {
      document.getElementById(this.state.from).style.opacity = "1";
    }
  }

  render() {
    return (
      <div
        style={{
          paddingTop: spacer2,
          marginBottom: spacer4,
        }}
      >
        <Container
          className="outerContainer"
          style={{
            color: this.props.color,
          }}
        >
          <Row>
            <Col xs={2} sm={3}>
              <a href="/">
                <Hidden xs sm>
                  <svg
                    className="logo"
                    style={{ height: "1.8rem" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384.05 41.98"
                  >
                    <title>Design Co</title>
                    <path
                      fill={this.props.color}
                      d="M51.57,17H17.75V27h18L13.17,49.53,19.54,56,42.62,32.92v18.9h9Z"
                      transform="translate(-13.17 -15.01)"
                    />
                    <path
                      fill={this.props.color}
                      d="M90.16,16H73.75V55.79H90.16c9.16,0,15.22-3.48,18.11-9.64,1.39-2.79,1.89-6.17,1.89-10.25a24.17,24.17,0,0,0-1.89-10.24C105.48,19.49,99.32,16,90.16,16Zm9.55,27.05c-1.69,3.58-5.07,5.57-10.84,5.57H82.5V23.17h6.37c5.77,0,9.25,1.89,10.84,5.57A16.11,16.11,0,0,1,101,35.9,16.11,16.11,0,0,1,99.71,43.06Z"
                      transform="translate(-13.17 -15.01)"
                    />
                    <path
                      fill={this.props.color}
                      d="M117.72,55.79h26.56v-7H126.47V39h17.71V32.22H126.47V23h17.81V16H117.72Z"
                      transform="translate(-13.17 -15.01)"
                    />
                    <path
                      fill={this.props.color}
                      d="M171.23,32.22c-5-1.29-9.65-2-10.84-4.58a5.13,5.13,0,0,1-.3-1.79,3.65,3.65,0,0,1,.4-1.79c.79-1.79,3.08-2.78,6.07-2.78,3.18,0,5.27,1.09,6.26,3.08a7.92,7.92,0,0,1,.7,3.58h8.95a14.69,14.69,0,0,0-1.09-5.77C179.19,17.6,174,15.11,167,15.11c-7.26,0-12.73,2.69-14.72,7.06A11,11,0,0,0,151.14,27a12,12,0,0,0,.89,4.47c1.69,3.68,5.87,5.48,10.75,6.77,5.07,1.39,10.14,2.19,11.53,5.17a4.3,4.3,0,0,1,.5,2.09,6.26,6.26,0,0,1-.5,2.19c-.89,1.89-3.38,2.88-6.76,2.88-3.68,0-6-1.19-7.06-3.38a8.38,8.38,0,0,1-.6-3.68h-9.55a16.4,16.4,0,0,0,1.2,6.07C153.72,54.1,159,57,167.25,57c7.86,0,13.73-2.59,16-7.36a12.12,12.12,0,0,0,1.09-5.18,14.34,14.34,0,0,0-.89-4.87C181.38,35.3,176.6,33.61,171.23,32.22Z"
                      transform="translate(-13.17 -15.01)"
                    />
                    <path
                      fill={this.props.color}
                      d="M199.88,16h-8.66V55.79h8.66Z"
                      transform="translate(-13.17 -15.01)"
                    />
                    <path
                      fill={this.props.color}
                      d="M228.23,40.48h10.24a13.13,13.13,0,0,1-.89,4.27c-1.49,3.19-4.78,4.78-9.35,4.78-4.78,0-8.26-1.79-9.95-5.37-1-2.19-1.39-4.48-1.39-8.26s.4-6.17,1.39-8.26c1.69-3.58,5-5.37,9.75-5.37,3,0,5.57.7,7.26,2.29a7.66,7.66,0,0,1,2.59,5.17h9a15.61,15.61,0,0,0-5.08-10.34C238.47,16.5,233.8,15,228.13,15c-9.15,0-15.32,3.68-18.5,10.25a24,24,0,0,0-2.09,10.64,24,24,0,0,0,2.09,10.64c3.08,6.47,9.35,10.25,18.3,10.25,8.35,0,14.12-3.18,17.11-9.45a24.67,24.67,0,0,0,2.09-10.54V34.11h-18.9Z"
                      transform="translate(-13.17 -15.01)"
                    />
                    <path
                      fill={this.props.color}
                      d="M281.94,43.36,263.64,16h-8.95V55.79h8.55V28.54l18.2,27.25h9V16h-8.46Z"
                      transform="translate(-13.17 -15.01)"
                    />
                    <path
                      fill={this.props.color}
                      d="M338.34,47A11.28,11.28,0,0,1,331,49.43c-4.48,0-7.76-1.79-9.45-5.27-1-2.09-1.39-4.68-1.39-8.26s.39-6.07,1.39-8.16c1.59-3.38,4.67-5.37,9.45-5.37a10.68,10.68,0,0,1,7.16,2.29,8.14,8.14,0,0,1,2.69,6.17h9.25a15,15,0,0,0-5.18-11.24A20.6,20.6,0,0,0,331.28,15c-9,0-15.32,3.78-18.21,10.15A25.56,25.56,0,0,0,311,35.9a25.56,25.56,0,0,0,2.08,10.74c3.09,6.47,9.35,10.15,18.31,10.15,5.57,0,10.54-1.59,13.82-4.58a14.67,14.67,0,0,0,5.08-11H341A7.82,7.82,0,0,1,338.34,47Z"
                      transform="translate(-13.17 -15.01)"
                    />
                    <path
                      fill={this.props.color}
                      d="M394.94,25.06c-3-6.27-9.15-10-18.11-10s-15.31,3.78-18.2,10a26.37,26.37,0,0,0-2.09,10.84,24.84,24.84,0,0,0,2.19,10.84c3,6.37,9.15,10,18.1,10S392,53.11,395,46.74a24.84,24.84,0,0,0,2.19-10.84A26.35,26.35,0,0,0,394.94,25.06Zm-8.56,18.7c-1.59,3.48-4.67,5.47-9.65,5.47s-8.15-2.09-9.64-5.47a18.35,18.35,0,0,1-1.4-8,18.35,18.35,0,0,1,1.4-8c1.59-3.38,4.67-5.47,9.64-5.47s8.16,2.09,9.65,5.47c1.1,2.19,1.4,4.58,1.4,8A18.06,18.06,0,0,1,386.38,43.76Z"
                      transform="translate(-13.17 -15.01)"
                    />
                  </svg>
                </Hidden>
                <Visible xs sm>
                  <svg
                    className="logo"
                    style={{ height: "3.5rem" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 88 91"
                  >
                    <title>Design Co</title>
                    <polygon
                      fill={this.props.color}
                      points="52.51 40.16 75.65 17.01 75.65 36 84.65 36 84.65 1 84.65 1 84.65 1 50.65 1 50.65 11 68.78 11 46.06 33.72 52.51 40.16"
                    />
                    <path
                      fill={this.props.color}
                      d="M65.57,56.11a23.26,23.26,0,0,0,1.94-10.24,23.33,23.33,0,0,0-1.94-10.25c-2.81-6.13-9-9.62-18-9.62H31.16V65.74H47.52C56.6,65.74,62.7,62.25,65.57,56.11ZM39.84,58.59V33.15h6.33c5.74,0,9.2,1.91,10.84,5.57a16.21,16.21,0,0,1,1.29,7.15A16.24,16.24,0,0,1,57,53c-1.64,3.6-5,5.57-10.84,5.57Z"
                      transform="translate(-29 -26)"
                    />
                    <path
                      fill={this.props.color}
                      d="M56.32,107.26A10.91,10.91,0,0,1,49,109.63c-4.51,0-7.74-1.8-9.38-5.29-1-2.09-1.35-4.67-1.35-8.22A19.34,19.34,0,0,1,39.61,88c1.58-3.38,4.69-5.35,9.38-5.35a10.7,10.7,0,0,1,7.15,2.31,8.34,8.34,0,0,1,2.7,6.13H68A15.13,15.13,0,0,0,62.88,79.8c-3.34-2.93-8-4.56-13.6-4.56-9,0-15.24,3.83-18.17,10.19A24.89,24.89,0,0,0,29,96.12a25,25,0,0,0,2.05,10.69C34.1,113.28,40.37,117,49.34,117c5.57,0,10.5-1.63,13.84-4.61a14.83,14.83,0,0,0,5-11H59A8,8,0,0,1,56.32,107.26Z"
                      transform="translate(-29 -26)"
                    />
                    <path
                      fill={this.props.color}
                      d="M114.83,85.26c-2.93-6.25-9.09-10-18.06-10S81.53,79,78.6,85.31a26.23,26.23,0,0,0-2.11,10.81,25,25,0,0,0,2.17,10.81C81.59,113.28,87.75,117,96.72,117s15.12-3.72,18.11-10A25.19,25.19,0,0,0,117,96.12,25.35,25.35,0,0,0,114.83,85.26ZM106.39,104c-1.58,3.43-4.63,5.51-9.62,5.51s-8.09-2.08-9.67-5.45a18.6,18.6,0,0,1-1.41-7.94,18.6,18.6,0,0,1,1.41-7.94c1.58-3.37,4.69-5.46,9.62-5.46s8.09,2.09,9.67,5.46a17.73,17.73,0,0,1,1.41,7.94A18,18,0,0,1,106.39,104Z"
                      transform="translate(-29 -26)"
                    />
                  </svg>
                </Visible>
              </a>
            </Col>
            <Col xs={10} sm={9} style={{ paddingLeft: "0" }}>
              <Hidden xs sm md style={{ padding: "0" }}>
                <ul className="nav">
                  <li>
                    <h4>
                      <a href="/about" id="about">
                        About
                      </a>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <a href="/events" id="events">
                        Events
                      </a>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <a href="/gbm">GBM</a>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <a href="/shop" id="shop">
                        Shop
                      </a>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <a href="http://community.ucsddesign.co/">Community</a>
                    </h4>
                  </li>
                  {/* <li>
                    <h4>
                      <a href="/partnership" id="partnership">
                        Partner
                      </a>
                    </h4>
                  </li> */}
                  <li>
                    <h4>
                      <a href="/apply" id="apply">
                        Apply
                      </a>
                    </h4>
                  </li>
                  {/* <li>
                    <h4>
                      <a href="/headphone-ux-review" id="headphone-ux-review">
                        Sony
                      </a>
                    </h4>
                  </li> */}
                  <li>
                    <h4>
                      <a href="/contact" id="contact">
                        Contact
                      </a>
                    </h4>
                  </li>
                </ul>
              </Hidden>
              <Visible xs sm md>
                <div
                  id="hamburger"
                  className="hamburger--spin"
                  onClick={this.toggleHamburger}
                >
                  <div className="hamburger-box">
                    <div
                      id="hamburger-inner"
                      style={{ backgroundColor: this.props.color }}
                    ></div>
                  </div>
                </div>

                {/* Background brightness */}
                <div
                  className={
                    this.state.hideSidePanel
                      ? "panel-darken panel-darken-close"
                      : "panel-darken panel-darken-open"
                  }
                  onClick={this.toggleHamburger}
                ></div>

                {/* Side panel */}
                <div
                  className={
                    this.state.hideSidePanel
                      ? "panel-wrap panel-wrap-close"
                      : "panel-wrap panel-wrap-open"
                  }
                >
                  <div
                    className="panel"
                    style={{ backgroundColor: this.props.color }}
                  >
                    <div className="panelNav">
                      <ul id="ham-nav" style={{ color: this.props.altColor }}>
                        <li>
                          <h4>
                            <a href="/about" id="about">
                              About
                            </a>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <a href="/events" id="events">
                              Events
                            </a>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <a href="/gbm">GBM</a>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <a href="/shop" id="shop">
                              Shop
                            </a>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <a href="http://community.ucsddesign.co/">
                              Community
                            </a>
                          </h4>
                        </li>
                        {/* <li>
                          <h4>
                            <a href="/partnership" id="partnership">
                              Partner
                            </a>
                          </h4>
                        </li> */}
                        <li>
                          <h4>
                            <a href="/apply" id="apply">
                              Apply
                            </a>
                          </h4>
                        </li>
                        {/* <li>
                          <h4>
                            <a
                              href="/headphone-ux-review"
                              id="headphone-ux-review"
                            >
                              Sony
                            </a>
                          </h4>
                        </li> */}
                        <li>
                          <h4>
                            <a href="/contact" id="contact">
                              Contact
                            </a>
                          </h4>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Visible>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navbar;
