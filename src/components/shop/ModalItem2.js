import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel2 from './Carousel2';

function ModalItem2(props) {
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
                                <h3 className="me-h3-mobile" id="m1-5b">Design Co Holographic Nanna Teapot Sticker</h3>
                                <Carousel2></Carousel2>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} className="me-right">
                                <img className="me-x" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                                <h3 className="me-h3-desktop" id="m1-5b">Design Co Holographic Nanna Teapot Sticker</h3>
                                <p id="m3b">$2</p>
                                <a href="https://forms.gle/gQnXjP4ENVaXoKGn9" target="_blank">
                                    <div className="me-button">
                                        <p>Order Form</p>
                                    </div>
                                </a>
                               
                                <p id="m1-5b" className="smaller-text">See something familiar? Snag a holographic Nanna teapot sticker to take you back to your DSGN 1 experience with The Design of Everyday Things!</p>
                                <p id="m1-5b" className="smaller-text">Dimensions: 2”x2.7”</p>
                                <p id="m1-5b" className="smaller-text">Designed by Leann Gamboa</p>
                                </Grid>
                            
                        </Grid>
                    </div>
                </div>
                
            )}
        
        </div>
        
    );
}

export default ModalItem2;