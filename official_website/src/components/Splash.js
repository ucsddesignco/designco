import React from 'react';
import Navbar from '../components/Navbar';
import {base8, base4} from '../constants';

const COLORS = [
    ["#F8BBD0", "#1A237E"],
    ["#00695C", "#E3F2FD"],
    ["#A7FFEB", "#512DA8"],
    ["#FFCDD2", "#006064"],
    ["#FFF8E1", "#D32F2F"],
    ["#37474F", "#69F0AE"]
  ];

var randomItem = Math.floor(Math.random()*COLORS.length);

var baseColor = COLORS[randomItem][0];
var bgColor = COLORS[randomItem][1];
var viewport_height= window.innerHeight;
var viewport_width= window.innerWidth;

const bgStyle={
    height: viewport_height,
    backgroundColor: bgColor,
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
                <Navbar style={{paddingTop: base8, color: baseColor}} overlays={{marginLeft: base4, color: baseColor}}/>
                <div style={{position: "relative"}}>
                    <img src={require("../images/home/plant.png")} alt="THIS THE PLANT" style={plantStyle}/>
                    <h1 style={{position: "absolute"}}>
                        Grow with our community of student designers
                    </h1>
                </div>
            </div>
        );
    }
}

export default Splash;