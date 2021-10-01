import React from "react";
import { ShopItems } from "./ShopItems";
import { Grid } from "@material-ui/core";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Modal(props) {
    const idx = props.index;
    const current_item = ShopItems[idx];

    return (
        <div className="div">
            {props.show && (
                <div className="me">
                <Grid container className="me-container">
                    <Grid item xs={12} sm={12} md={6} lg={6} className="me-left">
                        <img src={current_item.img.default} className="me-image" id="m1-875b"/>
                        <div className="me-img-container">
                            <img src={current_item.small_images[0]} className="me-img-small"></img>
                            <img src={current_item.small_images[1]} className="me-img-small"></img>
                            <img src={current_item.small_images[2]} className="me-img-small"></img>
                            <img src={current_item.small_images[3]} className="me-img-small"></img>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className="me-right">
                        <img className="me-x" id="m3b" src={require('../../images/shop/cross.svg').default} onClick={props.onHide}></img>
                        <h3 id="m1-5b">{current_item.merch_item}</h3>
                        <p id="m3b">$20</p>
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
                        <div className="me-button">
                            <p>Order Form</p>
                        </div>
                    </Grid>
                    
                </Grid>
            </div>
            )}
        </div>
    );
}

export default Modal;