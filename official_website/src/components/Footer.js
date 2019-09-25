import React from "react";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "../constants";

class Footer extends React.Component {
  render() {
    return (
      <div className="outerContainer" style={{ paddingBottom: spacer2 }}>
        <Container>
          <Row>
            <Visible lg xl>
              <Col md={4}>
                <h4>Design Co © 2019</h4>
              </Col>
            </Visible>
            <Col lg={8}>
              <Hidden lg xl>
                <h4 style={{ textAlign: "center", marginBottom: spacer1 }}>
                  Design Co © 2019
                </h4>
              </Hidden>
              <ul className="footerLinks">
                <li>
                  <h4>
                    <a href="https://www.facebook.com/ucsddesignco">Facebook</a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a href="https://www.instagram.com/ucsddesignco/">
                      Instagram
                    </a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a href="https://www.linkedin.com/company/ucsddesignco/">
                      LinkedIn
                    </a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a href="mailto:designatucsd@gmail.com">Email</a>
                  </h4>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
