import React from "react";
import {base4, spacer1, spacer2, spacer3, spacer4} from "../constants.js";
import Member from '../components/MemberTiles'
import Navbar from '../components/Navbar';
import { Container, Row, Col } from 'react-grid-system';

class About extends React.Component{
    
    render(){
        const child   = { width: `30em`, height: `100%`, backgroundColor: "#00badb"}
    const parent  = { width: `60em`, height: `100%`}
        return(
            <div className="outerContainer">
                <Navbar style={{color: "#000000"}} overlays={{marginLeft: base4, color: "#000000"}} />
                <div className="innerContainer">
                <h1>
                    We started in a tiny classroom in 2012.
                    Now we're a growing community of over 200 designers. 
                </h1>
                <div>
                    PLACEHOLDER FOR STUFF
                </div>
                <div style={{marginTop: spacer4, display: "flex"}}>
                    <div style={{paddingRight: spacer2}}>
                        <div>
                            <h2 style={{paddingBottom: spacer2}}>
                            Lorem ipsum dolor sit amet
                            </h2>
                            <p style={{paddingBottom: spacer3}}>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div>
                            <h2 style={{paddingBottom: spacer2}}>
                            Lorem ipsum dolor sit amet
                            </h2>
                            <p style={{paddingBottom: spacer3}}>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div style={{paddingLeft: spacer3}}>
                        <div>
                            <h2 style={{paddingBottom: spacer2}}>
                            Lorem ipsum dolor sit amet
                            </h2>
                            <p style={{paddingBottom: spacer3}}>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div>
                            <h2 style={{paddingBottom: spacer2}}>
                            Lorem ipsum dolor sit amet
                            </h2>
                            <p style={{paddingBottom: spacer3}}>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <h1>
                    Meet the team
                </h1>
                <div style={{marginTop: spacer4}}>
                    <div style={{float: "left"}}>
                        <Member imageLink={require('../images/team/katya.png')} name="Katya Noble" 
                        position="Director of Growth + Strategy" year="CLASS OF 2019" portfolio="https://www.katyanoble.design"/>
                         <Member imageLink={require('../images/team/emily.png')} name="Emily Nguyen" 
                        position="Co-Creative Director" year="CLASS OF 2019" portfolio="http://emilynguyen.co"/>
                        <Member imageLink={require('../images/team/steven.png')} name="Steven Chen" 
                        position="Director of Industry Relations" year="CLASS OF 2020" portfolio="https://www.stevenychen.com"/>
                        <Member imageLink={require('../images/team/brittany.png')} name="Brittany Newton" 
                        position="Community Engagement Coordinator" year="CLASS OF 2020" portfolio="https://brittanynewton.com"/>
                        <Member imageLink={require('../images/team/nhu.png')} name="Nhu Luong" 
                        position="Visual + Brand Designer" year="CLASS OF 2021" 
                        portfolio="https://nhu777.webflow.io"/>
                        <Member imageLink={require('../images/team/paridhi.png')} name="Paridhi Khaitan" 
                        position="Web Developer" year="CLASS OF 2021" 
                        portfolio="http://www.paridhi.xyz"/>
                        <Member imageLink={require('../images/team/vicky.png')} name="Vicky Ly" 
                        position="Marketing Coordinator" year="CLASS OF 2020" 
                        portfolio="https://www.vickyly.co"/>
                        <Member imageLink={require('../images/team/winson.png')} name="Winson Dieu" 
                        position="Industry Relations Coordinator" year="CLASS OF 2021" 
                        portfolio="https://www.winsondieu.com"/>   
                    </div>
                    <div style={{float: "right"}}>
                        <Member imageLink={require('../images/team/nathan.png')} name="Nathan Mansur" 
                        position="Director of Marketing + Operations" year="CLASS OF 2019" portfolio="https://www.nathanmansur.com" /> 
                        <Member imageLink={require('../images/team/lucy.png')} name="Lucy Xu" 
                        position="Co- Creative Director" year="CLASS OF 2019" portfolio="https://lucylouxu.com" />  
                        <Member imageLink={require('../images/team/jamin.png')} name="Jamin Capulong" 
                        position="Community Engagement Coordinator" year="CLASS OF 2020" 
                        portfolio="https://www.linkedin.com/in/jamin-nick-capulong/"/>    
                        <Member imageLink={require('../images/team/stella.png')} name="Stella Seki" 
                        position="Community Engagement Coordinator" year="CLASS OF 2021" 
                        portfolio="https://www.stellaseki.com"/>  
                        <Member imageLink={require('../images/team/julia.png')} name="Julia Nguyen" 
                        position="Visual + Brand Designer" year="CLASS OF 2021" 
                        portfolio="#"/>    
                        <Member imageLink={require('../images/team/alison.png')} name="Alison Chen" 
                        position="Web Developer" year="CLASS OF 2021" 
                        portfolio="https://www.linkedin.com/in/ealisonchen/"/>    
                        <Member imageLink={require('../images/team/quinn.png')} name="Quinn Vu" 
                        position="Marketing Coordinator" year="CLASS OF 2021" 
                        portfolio="https://www.linkedin.com/in/thyvu1014/"/>
                        <Member imageLink={require('../images/team/andrew.png')} name="Andrew Zhen" 
                        position="Industry Relations Coordinator" year="CLASS OF 2020" 
                        portfolio="https://ajzhen.com"/>
                    </div>
                </div>

                <br style={{clear: "both"}}/>
                <Container>
                    <Row>
                    <Col md={5}>
                        hi
                    </Col>
                    <Col md= {10} >
                        hello
                    </Col>
                    </Row>
                </Container>
                </div>
            </div>
        );
    }
}

export default About;