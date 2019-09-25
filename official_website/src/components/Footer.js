import React from 'react';
import { base8, base16 } from '../constants';

class Footer extends React.Component{
    render(){
        return(
            <div style={{marginLeft: base8, marginRight: base8, marginTop: base16, fontFamily: "NeuePlakExtendedBold", letterSpacing: "0.04rem"}}>
                <div style={{float: "left"}}>
                <h4>
                    Design Co © 2019
                </h4>
                </div>
                <div style={{marginBottom: base8}} className="footerStyle">
                    <h4>
                        <a href="#">
                            Facebook
                        </a>
                    </h4>
                    <h4>
                        <a href="#">
                            Instagram
                        </a>
                    </h4>
                    <h4>
                        <a href="#">
                            LinkedIn
                        </a>
                    </h4>
                    <h4>
                        <a href="#">
                            Email
                        </a>
                    </h4>
                </div>
            </div>
        );
    }
}

export default Footer;