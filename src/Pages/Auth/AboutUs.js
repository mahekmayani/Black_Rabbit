import React from "react";
import '../Auth/Css/AboutUs.css'
import image from '../Auth/images/1111.png';

const AboutUs = () => {
    return (
        <>
            <div className="About-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2>Our Team</h2>
            <div className="row">
                <div className="column">
                    <img src={image} style={{ height: "200px", marginRight: "10px" }} />
                    <div className="container">
                        <h2>Jane Doe</h2>
                        <p class="title">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <button>Contact</button>
                    </div>
                </div>

                <div className="column">
                    <img src={image} style={{ height: "200px", marginRight: "10px" }} />
                    <div className="container">
                        <h2>Mike Ross</h2>
                        <p class="title">Art Director</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>mike@example.com</p>
                        <button>Contact</button>
                    </div>
                </div>

                <div className="column">
                    <img src={image} style={{ height: "200px", marginRight: "10px" }} />
                    <div className="container">
                        <h2>John Doe</h2>
                        <p class="title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <button>Contact</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;