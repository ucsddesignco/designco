import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel3 from "./Carousel3";

function ModalItem3(props) {
  const [clickImage, setClickImage] = useState("me-item1-image1");

  return (
    <div>
      {props.show && (
        <div className="me-everything">
          <div className="me-background" onClick={props.onHide}></div>
          <div className="me">
            <Grid container className="me-container">
              <Grid item xs={12} sm={6} md={6} lg={6} className="me-left">
                <img
                  className="me-x-mobile"
                  id="m3b"
                  src={require("../../images/shop/cross.svg").default}
                  onClick={props.onHide}
                ></img>
                <h3 className="me-h3-mobile">A Design Co Story(board) Tee</h3>
                <Carousel3></Carousel3>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} className="me-right">
                <img
                  className="me-x"
                  id="m3b"
                  src={require("../../images/shop/cross.svg").default}
                  onClick={props.onHide}
                ></img>
                <h3 className="me-h3-desktop" id="m1-5b">
                  A Design Co Story(board) Tee
                </h3>
                <p id="m3b">$15</p>
                <a href="https://forms.gle/gQnXjP4ENVaXoKGn9" target="_blank">
                  <div className="me-button">
                    <p>Order Form</p>
                  </div>
                </a>
                <p id="m1-5b" className="bold-text">
                  Sizes Available
                </p>
                <div id="m2b" className="me-container-sizes">
                  <p className="smaller-text-size">
                    S
                  </p>
                  <p className="smaller-text-size">
                    M
                  </p>
                  <p className="smaller-text-size">
                      L
                      <div className="line"></div>
                  </p>
                  
                  <p className="smaller-text-size">
                    XL
                  </p>
                </div>
                <p id="m1-5b" className="smaller-text">
                  Once upon a time, there was a budding sprout who did not know
                  much about the world ahead of it. With an encouraging
                  community of flowers…and a little bit of water... it grew and
                  bloomed so gracefully, the sun smiled.
                </p>
                <p id="m1-5b" className="smaller-text">
                  Every designer has their own story. It is time to create
                  yours.
                </p>
                <p id="m1-5b" className="smaller-text">
                  Designed by Design Co Creative Team
                </p>
                <p className="smaller-text">Models in Order of Photos:</p>
                <p id="m1-5b" className="smaller-text">
                  Juna: 5'3" - M, Julie: 5'5" - L, Adam: 6'0" - M, Maria: 5'7" -
                  S, Jamin: 5'10" - L
                </p>

                {/* <p id="m1-5b" className="smaller-text">Juna, (1st) is 5'3" and is wearing size Medium. Julie (second picture) is 5'5" and is wearing size Large. Jamin (third picture) is 5'10" and is wearing size Large. Adam (fourth picture) is 6'0" and is wearing size Medium.</p> */}
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalItem3;
