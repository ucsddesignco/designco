import React from "react";
import {base16,base32, base24, base8, base4, base10, base2} from "../constants.js";
import Member from '../components/MemberTiles'
import Navbar from '../components/Navbar';

const headingStyle={
    marginLeft: base16, 
    marginRight: base16, 
    marginTop: base10, 
    marginBottom: base10
}

const secondHeading= {
    marginLeft: base16, 
    marginRight: base16, 
    marginTop: base10, 
    marginBottom: base8
}

const membersStyle={
    marginLeft: base16,
    marginRight: base16,
}
class About extends React.Component{
    
    render(){
        const child   = { width: `30em`, height: `100%`, backgroundColor: "#00badb"}
    const parent  = { width: `60em`, height: `100%`}
        return(
            <div>
                <Navbar style={{marginTop: base8, color: "#000000"}} overlays={{marginLeft: base4, color: "#000000"}} />
                <div className="heading" style={headingStyle}>
                    We started in a tiny classroom in 2012.
                    Now we're a growing community of over 200 designers. 
                </div>
                <div>
                    PLACEHOLDER FOR STUFF
                </div>
                <div className="heading" style={secondHeading}>
                    Meet the team
                </div>
                <div style={membersStyle}>
                    <div style={{float: "left"}}>
                        <Member imageLink={require('../images/team/katya.png')} name="Katya Noble" 
                        position="Director of Growth + Strategy" year="CLASS OF 2019" portfolio="https://www.katyanoble.design"/>
                         <Member imageLink={require('../images/team/emily.png')} name="Emily Nguyen" 
                        position="Co-Creative Director" year="CLASS OF 2019" portfolio="http://emilynguyen.co" style={{marginTop: base10, marginLeft: base16}}/>
                        <Member imageLink={require('../images/team/steven.png')} name="Steven Chen" 
                        position="Director of Industry Relations" year="CLASS OF 2020" portfolio="https://www.stevenychen.com" style={{marginTop: base16}}/>
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
                        position="Director of Marketing + Operations" year="CLASS OF 2019" portfolio="https://www.nathanmansur.com" style={{marginTop: base16}}/> 
                        <Member imageLink={require('../images/team/lucy.png')} name="Lucy Xu" 
                        position="Co- Creative Director" year="CLASS OF 2019" portfolio="https://lucylouxu.com" style={{marginTop: base32, marginRight: 0}}/>  
                        <Member imageLink={require('../images/team/jamin.png')} name="Jamin Capulong" 
                        position="Community Engagement Coordinator" year="CLASS OF 2020" 
                        portfolio="https://www.linkedin.com/in/jamin-nick-capulong/" style={{marginTop: base24}}/>    
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

            </div>
        );
    }
}

export default About;