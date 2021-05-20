import React from "react";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import Navbar from "../components/Navbar";
import { spacer3, spacer4, spacer2 } from "../constants";
import Button from "../components/Button";
import { Helmet } from "react-helmet";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact | Design Co</title>
        </Helmet>
        <Navbar color={"#000"} altColor={"#FFF"} from="contact" />
        <Container className="outerContainer">
          <div className="innerContainer">
            <h1 style={{ marginBottom: spacer3 }}>Get in touch with us:</h1>
            <Row>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <a
                  href="https://www.facebook.com/ucsddesignco"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ display: "flex" }}>
                    <h2 style={{ marginBottom: spacer2 }}>Facebook</h2>
                    <svg
                      style={{ height: "5rem" }}
                      viewBox="0 0 50 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </a>
                <p>/ucsddesignco</p>
              </Col>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <a
                  href="https://www.instagram.com/ucsddesignco/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ display: "flex" }}>
                    <h2 style={{ marginBottom: spacer2 }}>Instagram</h2>
                    <svg
                      style={{ height: "5rem" }}
                      viewBox="0 0 50 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </a>
                <p>@ucsddesignco</p>
              </Col>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <a
                  href="https://www.linkedin.com/company/ucsddesignco/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ display: "flex" }}>
                    <h2 style={{ marginBottom: spacer2 }}>LinkedIn</h2>
                    <svg
                      style={{ height: "5rem" }}
                      viewBox="0 0 50 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </a>
                <p>/ucsddesignco</p>
              </Col>

              <Col md={6}>
                <a
                  href="mailto:designatucsd@gmail.com"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ display: "flex" }}>
                    <h2 style={{ marginBottom: spacer2 }}>Email</h2>
                    <svg
                      style={{ height: "5rem" }}
                      viewBox="0 0 50 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </a>
                <p>designatucsd@gmail.com</p>
              </Col>
              <Col md={6} style={{ marginBottom: spacer3 }}>
                <a
                  href="https://discord.com/invite/ZZEp4WNWK3"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ display: "flex" }}>
                    <h2 style={{ marginBottom: spacer2 }}>Discord</h2>
                    <svg
                      style={{ height: "5rem" }}
                      viewBox="0 0 50 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </a>
                <p>/ucsddesignco</p>
              </Col>
            </Row>
          </div>
          <Hidden xs sm>
            <div style={{ marginBottom: spacer3 }}></div>
          </Hidden>
          <Visible xs sm>
            <div style={{ marginBottom: spacer4 }}></div>
          </Visible>
        </Container>
        <Container className="outerContainer">
          <div className="innerContainer">
            <h1 style={{ marginBottom: spacer3 }}>Or find us on campus:</h1>
          </div>
        </Container>
        <Hidden xs sm md lg xl>
          <div className="scrollContainer" style={{ marginBottom: spacer4 }}>
            <div className="imageDiv">
              <img src={require("../images/about/temp1.png")} />
              <img src={require("../images/about/temp1.png")} />
              <img src={require("../images/about/temp1.png")} />
              <img src={require("../images/about/temp1.png")} />
            </div>
          </div>
        </Hidden>
        <Container className="outerContainer" style={{ marginBottom: spacer4 }}>
          <div className="innerContainer">
            <Row>
              <Col md={6}>
                <h2 style={{ marginBottom: spacer2 }}>HSS 1346</h2>
                <p style={{ marginBottom: spacer2 }}>
                  Humanities and Social Sciences Building <br />
                  Muir Lane and Scholars Lane <br />
                  Muir College <br />
                  UC San Diego <br />
                  La Jolla, CA 92093 <br />
                </p>
                <Button
                  link="https://goo.gl/maps/Mw8uudK1gh4AYd4Q6"
                  text="Map Me"
                ></Button>
                <Visible xs sm>
                  <div style={{ marginBottom: spacer3 }}></div>
                </Visible>
              </Col>
              <Col md={6}>
                <h2 style={{ marginBottom: spacer2 }}>The Design Lab</h2>
                <p style={{ marginBottom: spacer2 }}>
                  Atkinson Hall
                  <br />
                  Voigt Drive and Engineer Lane
                  <br />
                  Warren College
                  <br />
                  UC San Diego
                  <br />
                  La Jolla, CA 92093
                </p>
                <Button
                  link="https://goo.gl/maps/PAozsX5jUWuetaTd8"
                  text="Map Me"
                ></Button>
              </Col>
            </Row>
          </div>
        </Container>
        <Container className="outerContainer">
          <div className="innerContainer">
            <h1 style={{ marginBottom: spacer3 }}>Partner with us:</h1>
          </div>
        </Container>
        <Hidden xs sm md lg xl>
          <div className="scrollContainer" style={{ marginBottom: spacer4 }}>
            <div className="imageDiv">
              <img src={require("../images/about/temp1.png")} />
              <img src={require("../images/about/temp1.png")} />
              <img src={require("../images/about/temp1.png")} />
              <img src={require("../images/about/temp1.png")} />
            </div>
          </div>
        </Hidden>
        <Container className="outerContainer" style={{ marginBottom: spacer4 }}>
          <div className="innerContainer">
            <Row>
              <Col md={6}>
                <img
                  className="partnership-banner"
                  src={
                    require("../images/partnership/partnership-banner.png")
                      .default
                  }
                  alt="partnership-banner"
                />
                <p className="partner-with-us">
                  Contact us for more information on pricing and sponsorship
                  plans
                </p>
                <Button link="/partnership" text="Learn More"></Button>
                <Visible xs sm>
                  <div style={{ marginBottom: spacer3 }}></div>
                </Visible>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
