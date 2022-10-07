import React from "react";

import SmileyGreen from "../../images/community/stickers/smiley-green.svg";
import SmileyRed from "../../images/community/stickers/smiley-red.svg";
import SmileyBlue from "../../images/community/stickers/smiley-blue.svg";

function Hero() {

    return (
        <header className="community__hero">
            <div className="community__hero__info">
                <h1>We are the <span className="creatives">creatives,</span> the <span className="affordance">affordance&#8209;finders,</span> and the next wave of <span className="problem">problem&#8209;solvers</span> – we are designers from UCSD.</h1>
            </div>
            <div className="community__hero__info-mobile">
                <h1>We are the <span className="creatives">creatives,&nbsp;the</span> <span className="affordance">affordance-</span><span className="affordance-2">finders,</span> and the next wave of <span className="problem">problem-</span><span className="problem-2">solvers</span> – we are designers from UCSD.</h1>
            </div>
            <div className="community__hero__stickers-mobile">
                <img src={SmileyRed} alt="Red Smiley Sticker"/>
                <img src={SmileyGreen} alt="Green Smiley Sticker"/>
            </div>
            <div className="community__grid">
                <div>
                    <h3>DCO: Pixels & Cursors</h3>
                    <p>Grow your design network and blossom new friendships with our social mentorship program, Pixels & Cursors!</p>
                    <a href="https://bit.ly/pnc-app" target="_blank" rel="noreferrer">Apply Now</a>
                    <div className="community__hero__stickers-mobile-2">
                        <img src={SmileyBlue} alt="Blue Smiley Sticker"/>
                    </div>
                </div>
                <div>
                    <h3>Community Page</h3>
                    <p>Connect with a wide network of student designers and alumni from Design Co! It’s like LinkedIn, but exclusively for our UCSD community.</p>
                    <a href="https://community.ucsddesign.co" target="_blank" rel="noreferrer">Meet the Community</a>
                </div>
                <div className="community__c2a-mobile">
                    <h3>Join Our Discord</h3>
                    <p>Grow your design network and blossom new friendships with our social mentorship program, Cursors & Pixels!</p>
                    <a href="https://forms.gle/eZcmChmWNrSmiAs28" target="_blank" rel="noreferrer">Discord Invite</a>
                </div>
            </div>
            <div className="community__c2a">
                <h2>Join Our Discord</h2>
                <p>Chat with other designers, get advice on classes to take, or find a buddy to go with to your next DCo event!</p>
                <a href="https://discord.gg/jpzznvhX3x" target="_blank" rel="noreferrer">Discord Invite</a>
            </div>
        </header>
    );
}

export default Hero;
