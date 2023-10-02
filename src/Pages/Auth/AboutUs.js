import React, { useRef } from "react";
import '../Auth/Css/AboutUs.css'
import image from '../Auth/images/06.png';
import image1 from '../Auth/images/18342a71b9230801b5762f4a12fca57d.jpg';


const VIDEO_PATH = '123.mp4';

const AboutUs = () => {
    const playerRef = useRef(null);
    return (
        <>
            <div>
                
                <div className="About-section">
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>

                </div>

                <div className="d-flex p-3">
                    <div className="about-page">
                        <img src={image} />
                    </div>
                    <div className="about-class-d text-center">
                        <h2 style={{ marginTop: '10px' }}>About EA</h2>
                        <div className="about-content text-center">
                            <p>Headquartered in Redwood City in Northern California, we develop and deliver games &nbsp; content, and online services for Internet-connected consoles, mobile devices &nbsp; and personal computers. Through our cutting-edge games, innovative services&nbsp; and powerful technologies, we bring worlds with infinite possibilities to nearly 600 million active players and fans around the globe, and are recognized for a portfolio of critically acclaimed, high-quality brands such as EA SPORTS™ FIFA, Battlefield™, Apex Legends™, The Sims™, Madden NFL, Need for Speed™, Titanfall® and F1®.
                            </p>

                        </div>
                    </div>
                    <div className="about-page">
                        <img src={image1} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUs;