import React from "react";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import { spacer1, spacer2 } from "../constants";

class WhiteFooter extends React.Component {
  render() {
    return (
      <div className="white-footer" style={{ paddingBottom: spacer2 }}>
        <Container className="outerContainer">
          <Row>
            <Visible lg xl>
              <Col md={4}>
                <h4>Design Co © 2021</h4>
              </Col>
            </Visible>
            <Col lg={8}>
              <Hidden lg xl>
                <h4 style={{ textAlign: "center", marginBottom: spacer1 }}>
                  Design Co © 2021
                </h4>
              </Hidden>
              <ul className="footerLinks">
                <li>
                  <h4>
                    <a
                      href="https://www.facebook.com/ucsddesignco"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a
                      href="https://www.instagram.com/designcoatucsd/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </h4>
                </li>

                <li>
                  <h4>
                    <a
                      href="https://www.linkedin.com/company/ucsddesignco/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a href="https://medium.com/ucsddesignco/" target="_blank">
                      Medium
                    </a>
                  </h4>
                </li>
                <li>
                  <h4>
                    <a href="https://discord.com/invite/ZZEp4WNWK3" target="_blank">
                      Discord
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

export default WhiteFooter;
