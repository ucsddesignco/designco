import React from 'react';
import Navbar from '../components/Navbar';
import {base8, base4, base16, base24, base10} from '../constants';
import withPink from '../images/home/withPink.png';
import withForest from '../images/home/withForest.png';
import withBlue from '../images/home/withBlue.png';
import withGreen from '../images/home/withGreen.png';
import withYellow from '../images/home/withYellow.png';
import withBabyPink from '../images/home/withBabyPink.png';

const COLORS = [
    ["#F8BBD0", "#1A237E"],
    ["#00695C", "#E3F2FD"],
    ["#A7FFEB", "#512DA8"],
    ["#FFCDD2", "#006064"],
    ["#FFF8E1", "#D32F2F"],
    ["#37474F", "#69F0AE"]
  ];

const BACKGROUND_IMAGES= [withPink, withForest, withBlue, withBabyPink, withYellow, withGreen];
var randomItem = Math.floor(Math.random()*COLORS.length);

var baseColor = COLORS[randomItem][0];
var bgColor = COLORS[randomItem][1];
var bgImage= BACKGROUND_IMAGES[randomItem];
var viewport_height= window.innerHeight;
var viewport_width= window.innerWidth;

const bgStyle={
    height: viewport_height,
    backgroundImage: `url(${bgImage})`,
    backgroundColor: bgColor,
    backgroundPosition: "center",

};

const plantStyle={
   mixBlendMode: 'overlay',
   height: '595px',
   display: 'block',
   marginLeft: 'auto', 
   marginRight: 'auto',
   bottom: '0',
}

class Splash extends React.Component{

    render(){
        window.addEventListener('resize', function(){
            viewport_height= this.window.innerHeight;
        })
        return(
            <div style={bgStyle} id="#mainSplash">
                <Navbar style={{paddingTop: base8, color: baseColor}} overlays={{marginLeft: base4, color: baseColor}} color={baseColor}/>
                <div style={{marginLeft: base16, marginRight: base16, marginTop: base10, marginBottom: base10}}>
                    <div className="heading" style={{color: baseColor}}>
                        Grow with our community of student designers
                    </div>
                    <div style={{marginTop: base4, marginBottom: base4, color: baseColor, lineHeight: "36px", letterSpacing: "0.02rem", fontFamily: "NBInternationalProLight"}}>
                        <h3>
                        We're a strong and scrappy design community at UC San Diego, bridging the 
                        gap between young designers and industry. 
                        Previously known as <a href="" style={{color: baseColor}}>Design at UCSD</a> 
                        </h3>
                    </div>
                    <a href="#" style={{textDecoration: "none", fontFamily: "NBInternationalMono", fontSize: "12px", color: bgColor}}>
                        <div style={{backgroundColor: baseColor, height: "50px", width: "160px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                LEARN MORE
                        </div>
                    </a>

                </div>
            </div>
        );
    }
}

export default Splash;