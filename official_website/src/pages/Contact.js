import React from 'react';
import Navbar from '../components/Navbar';
import { spacer3, spacer4, spacer2 } from '../constants';
import Button from '../components/Button'

class Contact extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div  className="outerContainer">
                    <div className= "innerContainer">
                        <h1> Get in touch with us online: </h1>
                        <div style={{display: "flex"}}>
                            <div style={{marginRight: spacer4}}>
                                <div>
                                <a href="https://www.facebook.com/ucsddesignco" style={{textDecoration: "none"}}>
                                    <div style={{display: "flex", marginTop: spacer3}}>
                                        <h2>
                                            
                                            Facebook
                                            </h2>
                                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z" fill="black"/>
                                        </svg>
                                    </div></a>
                                    <p>
                                        @ucsddesignco
                                    </p>
                                    </div>
                                <div>
                                <a href="https://www.linkedin.com/company/ucsddesignco/" style={{textDecoration: "none"}}>
                                    <div style={{display: "flex", marginTop: spacer3}}>
                                        <h2>
                                            
                                            LinkedIn
                                            </h2>
                                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z" fill="black"/>
                                        </svg>
                                    </div></a>
                                    <p>
                                        @ucsddesignco
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                <a href="https://www.instagram.com/ucsddesignco/" style={{textDecoration: "none"}}>
                                    <div style={{display: "flex", marginTop: spacer3}}>
                                        <h2>
                                            
                                            Instagram
                                            </h2>
                                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z" fill="black"/>
                                        </svg>
                                    </div></a>
                                    <p>
                                        @ucsddesignco
                                    </p>
                                    </div>
                                <div>
                                <a href="mailto:designatucsd@gmail.com" style={{textDecoration: "none"}}>
                                    <div style={{display: "flex", marginTop: spacer3}}>
                                        <h2>
                                            
                                            E-mail
                                            </h2>
                                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z" fill="black"/>
                                        </svg>
                                    </div></a>
                                    <p>
                                        designatucsd@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: spacer4}}>
                            <h1>
                                Or find us on campus:
                            </h1>
                            <div className="scrollContainer" style={{marginTop: spacer3}}>
                                <div className= "imageDiv">
                                    <img src={require("../images/about/temp1.png")} />
                                    <img src={require("../images/about/temp1.png")} />
                                    <img src={require("../images/about/temp1.png")} />
                                    <img src={require("../images/about/temp1.png")} />
                                </div>
                            </div>
                            <div style={{display: "flex"}}>
                                <div style={{marginRight: spacer4}}> 
                                    <h2 style={{paddingTop: spacer2}}>
                                        HSS 1346
                                    </h2>
                                    <p style={{paddingTop: spacer2}}>
                                    Humanities and Social Sciences Building <br />
                                    Muir Lane and Scholars Lane <br />
                                    Muir College <br />
                                    UC San Diego <br />
                                    La Jolla, CA 92093 <br /> 
                                    </p>
                                    <Button
                                    link="https://www.google.com/maps/dir//Humanities+and+Social+Sciences+Building,+9500+Gilman+Dr,+La+Jolla,+CA+92
                                    093/@32.8792294,-117.2400322,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dc06c72c4e35a7:0xcf0
                                    3aa9bc2d53eb1!2m2!1d-117.2416735!2d32.8783894!3e0"
                                    text="MAP ME"
                                    color="#FFFFFF"
                                    bgColor="#000000"
                                    style={{ paddingBottom: spacer4, paddingTop: spacer2}}
                                    ></Button>
                                </div>
                                <div>
                                <h2 style={{paddingTop: spacer2}}>
                                        The Design Lab
                                    </h2>
                                    <p style={{paddingTop: spacer2}}>
                                    Atkinson Hall <br />
                                    Voigt Drive and Engineer Lane<br />
                                    Warren College <br />
                                    UC San Diego <br />
                                    La Jolla, CA 92093 <br /> 
                                    </p>
                                    <Button
                                    link="https://www.google.com/maps/dir//Humanities+and+Social+Sciences+Building,+9500+Gilman+Dr,+La+Jolla,+CA+92
                                    093/@32.8792294,-117.2400322,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dc06c72c4e35a7:0xcf0
                                    3aa9bc2d53eb1!2m2!1d-117.2416735!2d32.8783894!3e0"
                                    text="MAP ME"
                                    color="#FFFFFF"
                                    bgColor="#000000"
                                    style={{ paddingBottom: spacer4, paddingTop: spacer2}}
                                    ></Button>
                                </div>
                            </div>
                            <br style={{clear: "both"}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;