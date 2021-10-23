import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel1 from "./Carousel1";

function ModalItem1(props) {

    const [clickImage, setClickImage] = useState('me-item1-image1');

    return (
        <div>
            {props.show && (
                <div className="me-everything">
                    <div className="me-background" onClick={props.onHide}></div>
                    <div className="me">
                        <Grid container className="me-container">
                            <Grid item xs={12} sm={6} md={6} lg={6} className="me-left">
                                <img className="me-x-mobile" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                                <h3 className="me-h3-mobile" id="m1-5b">Design Co Holographic Logo Sticker</h3>
                                <Carousel1></Carousel1>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} className="me-right">
                                <img className="me-x" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                                <h3 className="me-h3-desktop" id="m1-5b">Design Co Holographic Logo Sticker</h3>
                                <p id="m3b">$2</p>
                                <a href="https://forms.gle/gQnXjP4ENVaXoKGn9" target="_blank">
                                    <div className="me-button">
                                        <p>Order Form</p>
                                    </div>
                                </a>
                                
                                <p id="m1-5b" className="smaller-text">Rep Design Co with your very own DCo logo sticker! It’s perfect for your laptop, water bottle, and everything in between.</p>
                                <p id="m1-5b" className="smaller-text">Dimensions: 2”x2”</p>
                            </Grid>
                            
                        </Grid>
                    </div>
                </div>
                
            )}
        
        </div>
        
    );
}

export default ModalItem1;