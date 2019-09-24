import React from 'react';
import {base8, base4} from '../constants.js';

const navStyle={
    float: 'left',
    marginLeft: base8, 
    fontFamily: "NeuePlakBold", 
    display: "flex"
};

const rightNav={
    float: "right", marginRight: base8, display: "flex", fontFamily: "NeuePlakBold", fontSize: '20px',
};

class Navbar extends React.Component{
    render(){
        return(
            <div className="NavBar" style={this.props.style}>
                <div style={navStyle}>
                    <img src={require("../images/logo.png")} alt="Logo" />
                </div>
                <div style={rightNav}>
                    <a href="#" style={this.props.overlays}>
                        Home
                    </a>
                    <a href="#" style={this.props.overlays}>
                            About
                    </a>
                    <a href="#" style={this.props.overlays}>
                            Contact
                    </a>
                </div>
                <br style={{clear: "both"}}/>
            </div>
        );
    }
}

export default Navbar;