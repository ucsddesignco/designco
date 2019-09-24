import React from 'react';
import {base8, base4} from '../constants.js';

const navStyle={
    float: 'left',
    marginLeft: base8, 
    fontFamily: "NeuePlakBold", 
    fontSize: "24px", 
    display: "flex"
};

const rightNav={
    float: "right", marginRight: base8, display: "flex", fontFamily: "NeuePlakBold", fontSize: "18px"
};

class Navbar extends React.Component{
    render(){
        return(
            <div style={{marginTop: base8}} className="NavBar">
                <div style={navStyle}>
                    <img src={require('../images/navbar/mainLogo.svg')} alt="Main Logo" style={{marginTop: "8px", marginRight: "8px"}}/>
                    <div>
                        DESIGN CO
                    </div>
                </div>
                <div style={rightNav}>
                    <a href="#" style={{marginLeft: base4}}>
                        Home
                    </a>
                    <a href="#" style={{marginLeft: base4}}>
                        About
                    </a>
                    <a href="#" style={{marginLeft: base4}}>
                        Contact
                    </a>
                </div>
                <br style={{clear: "both"}}/>
            </div>
        );
    }
}

export default Navbar;