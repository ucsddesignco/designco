import React, {useState} from "react";
import { ShopItems } from "./ShopItems";
import { Grid } from "@material-ui/core";
import Carousel from './Carousel';
import Slider from './Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ModalItem1(props) {

    const [image, setImage] = useState('me-item1-image1');

    return (
        <div>
            {props.show && (
                <div className="me-everything">
                    <div className="me-background" onClick={props.onHide}></div>
                    <div className="me">
                        <Grid container className="me-container">
                            <Grid item xs={12} sm={6} md={6} lg={6} className="me-left">
                                <img className="me-x-mobile" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                                <h3 className="me-h3-mobile" id="m1-5b">Design Co Sticker</h3>
                                <div className='me-item1-image1' />
                                <div className="me-img-container">
                                    <img src={require('../../images/shop/example-cat.png').default} alt="" className="me-img-small" />
                                    <img src={require('../../images/shop/example-cat.png').default} alt="" className="me-img-small" />
                                    <img src={require('../../images/shop/example-cat.png').default} alt="" className="me-img-small"  />
                                    <img src={require('../../images/shop/example-cat.png').default} alt="" className="me-img-small" />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} className="me-right">
                                <img className="me-x" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                                <h3 className="me-h3-desktop" id="m1-5b">Design Co Sticker</h3>
                                <p id="m3b">$20</p>
                                <div className="me-button">
                                    <p>Order Form</p>
                                </div>
                                <p id="m1-5b" className="bold-text">Sizes Available</p>
                                <div id="m2b" className="me-container-sizes">
                                    <p id="m3r" className="smaller-text">S</p>
                                    <p id="m3r" className="smaller-text">M</p>
                                    <p id="m3r" className="smaller-text">L</p>
                                    <p id="m3r" className="smaller-text">XL</p>
                                    <p id="m3r" className="smaller-text">XXL</p>
                                </div>
                                <p id="m1-5b" className="smaller-text">Description of merch design + material</p>
                                <p id="m1-5b" className="smaller-text">Designed by Cornpuppy</p>
                                <p id="m1-5b" className="smaller-text">Model is 5'6" and is wearing size Medium</p>
                            </Grid>
                            
                        </Grid>
                    </div>
                </div>
                
            )}
        
        </div>
        
    );
}

export default ModalItem1;