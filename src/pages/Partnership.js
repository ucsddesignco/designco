import React from "react";
import { Row, Col, Container } from "react-grid-system";

class Partnership extends React.Component {
  render() {
    return (
      <div>
        <div className="partnershipSplash">
          <Container className="outerContainer">
            <Row className="innerContainer" align="center">
              <Col sm={9} className="splashText">
                <h1>
                  Parntership Offerings <br /> 2021-2022
                </h1>
                <p>
                  Design Co is a pre-professional student organization at UC San
                  Diego that bridges the gap between designers and industry.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Partnership;
