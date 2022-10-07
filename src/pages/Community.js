import React, { useState } from "react";
import Draggable from 'react-draggable';

import Hero from "../components/community/Hero";
import Navbar from "../components/Navbar";

import ArrowBlue from "../images/community/stickers/arrow-blue.svg";
import ArrowGreen from "../images/community/stickers/arrow-green.svg";
import ArrowRed from "../images/community/stickers/arrow-red.svg";
import SmileyBlue from "../images/community/stickers/smiley-blue.svg";
import SmileyGreen from "../images/community/stickers/smiley-green.svg";
import SmileyRed from "../images/community/stickers/smiley-red.svg";
import PlantGreen from "../images/community/stickers/plant-green.svg";
import PlantRed from "../images/community/stickers/plant-red.svg";
import PlantBlue from "../images/community/stickers/plant-blue.svg";
import CurlyArrow from "../images/community/curly-arrow.svg";
import Gallery from "../components/community/Gallery";
import Footer from "../components/Footer";
import Feedback from "../components/community/Feedback";

function Community() {
    const [stickerDragged, setStickerDragged] = useState(false);
    return (
        <div className="community__container">
            <Navbar color="#FFF" altColor="#191919" from="community" />
            <div className="community">
                <div className={`sticker-prompt ${stickerDragged ? 'hidden' : ''}`}>
                    <img src={CurlyArrow} alt="Arrow pointing to Move Me prompt"/>
                    <span>MOVE ME!</span>
                </div>
                <Draggable onDrag={() => setStickerDragged(true)}>
                    <img draggable="false" className="smiley-blue" src={SmileyBlue}/>
                </Draggable>
                <Draggable onDrag={() => setStickerDragged(true)}>
                    <img draggable="false" className="smiley-green" src={SmileyGreen}/>
                </Draggable>
                <Draggable onDrag={() => setStickerDragged(true)}>
                    <img draggable="false" className="smiley-red" src={SmileyRed}/>
                </Draggable>
                <Draggable onDrag={() => setStickerDragged(true)}>
                    <img draggable="false" className="plant-green" src={PlantGreen}/>
                </Draggable>
                <Draggable onDrag={() => setStickerDragged(true)}>
                    <img draggable="false" className="plant-red" src={PlantRed}/>
                </Draggable>
                <Draggable onDrag={() => setStickerDragged(true)}>
                    <img draggable="false" className="plant-blue" src={PlantBlue}/>
                </Draggable>
                <Draggable onDrag={() => setStickerDragged(true)}>
                    <img draggable="false" className="arrow-blue" src={ArrowBlue}/>
                </Draggable>
                <Draggable onDrag={() => setStickerDragged(true)}>
                    <img draggable="false" className="arrow-green" src={ArrowGreen}/>
                </Draggable>
                <Draggable onDrag={() => setStickerDragged(true)}>
                    <img draggable="false" className="arrow-red" src={ArrowRed}/>
                </Draggable>
                <Hero />
                <Gallery />
                <Feedback />
            </div>
            <Footer color="#FFF"/>
        </div>
    );
}

export default Community;
