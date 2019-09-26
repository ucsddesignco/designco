import React from 'react';
import Navbar from '../components/Navbar';
import { spacer3, spacer4 } from '../constants';

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
                                    <div style={{display: "flex", marginTop: spacer3}}>
                                        <h2>Facebook</h2>
                                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <p>
                                        @ucsddesignco
                                    </p>
                                    </div>
                                <div>
                                    <div style={{display: "flex", marginTop: spacer3}}>
                                        <h2>Instagram</h2>
                                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <p>
                                        @ucsddesignco
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div style={{display: "flex", marginTop: spacer3}}>
                                        <h2>LinkedIn</h2>
                                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <p>
                                        @ucsddesignco
                                    </p>
                                    </div>
                                <div>
                                    <div style={{display: "flex", marginTop: spacer3}}>
                                        <h2>E-mail</h2>
                                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <p>
                                        @ucsddesignco
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: spacer4}}>
                            <h1>
                                Or find us on campus:
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;