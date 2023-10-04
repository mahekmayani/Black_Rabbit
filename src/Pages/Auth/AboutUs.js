import React, { useRef } from "react";
import '../Auth/Css/AboutUs.css'
import image from '../Auth/images/06.png';
import image1 from '../Auth/images/18342a71b9230801b5762f4a12fca57d.jpg';
import image2 from '../Auth/images/background.jpg';
import Footer from "./Footer";


const VIDEO_PATH = '123.mp4';

const AboutUs = () => {
    const playerRef = useRef(null);
    return (
        <>
            <div>

                <div className="About-section">
                    <h1>About Us Page</h1>


                </div>

                <div className="d-flex p-3">
                    <div className="about-page">
                        <img src={image} />
                    </div>
                    <div className="about-class-d text-center">
                        <h2 style={{ marginTop: '10px' }}>About EA</h2>
                        <div className="about-content text-center">
                            <p>Headquartered in Redwood City in Northern California, we develop and deliver games &nbsp; content, and online services for Internet-connected consoles, mobile devices &nbsp; and personal computers. Through our cutting-edge games, innovative services&nbsp; and powerful technologies, we bring worlds with infinite possibilities to nearly 600 million active players and fans around the globe, and are recognized for a portfolio of critically acclaimed, high-quality brands such as EA SPORTS™ FIFA, Battlefield™, Apex Legends™, The Sims™, Madden NFL, Need for Speed™, Titanfall® and F1®.</p>
                            <p>Games and sports are very important in one’s life. Those who participate in games and sports have a good outlook on life because they are likely to be physically and mentally fit. They are beneficial in a variety of ways, including helping to maintain blood pressure, increase blood flow, improve thinking capacity and attention, and so on. It assists in the development of a team spirit and develops a leadership quality in the individual, in addition to being physically and intellectually fit. When people participate in sports or games, they become more intelligent, energetic, and courageous. Many children pursue careers in numerous sports and games, making them well-known figures in society.When individuals involve themselves in games and sports, they benefit in many different ways.</p>

                        </div>
                    </div>
                    <div className="about-page">
                        <img src={image1} />
                    </div>
                </div>
            </div>
            <div className="About-card">
            {/* <img src={image2} /> */}
                <h1 style={{ textAlign: "left" }}>Our People</h1>
                <div className="d-flex p-3">
                    <p>
                        Our People
                        Everything we do is designed to inspire the world to play, and we believe we’re at our best when we listen, learn, and empower each other. We celebrate openness and curiosity and are committed to making a positive impact in the world.
                        We hire creative, collaborative, inclusive people with diverse backgrounds who enrich our culture and challenge us to be better people and better at what we do. And we nurture inclusive leaders who foster a belonging culture – a place where everyone can thrive, fulfill their potential and make the best games. Find out what makes us different.</p>

                    <h1>Our Prectice</h1>
                    <p>We believe in the power of positive play and that being part of a gaming community should be a fun, fair, and safe experience for all. We are equally committed to building a workplace that spurs creativity and innovation and is as diverse as the communities we serve.
                        As a leading global entertainment business, we want to inspire through our actions and create a positive impact in the world. This isn’t a destination but an ongoing journey of transparency and continual progress. You can find out how we’re getting on, and read our Impact Report.</p>
                </div>
            </div>

            <div className="about mt-5" >
                <h1 style={{ textAlign: "center"}}>Key Information</h1>
                <div class="row mt-5"  style={{marginLeft:"16%"}}>
                    <div class="col-md-3 mb-2" style={{borderBottom:"1px solid rgb(190, 190, 190)"}}>
                        <label>Founded</label>
                    </div>
                    <div class="col-md-8 mb-2" style={{borderBottom:"1px solid  rgb(190, 190, 190)"}}>
                        <p>1982</p>
                    </div>
                </div>

                <div class="row "  style={{marginLeft:"16%"}}>
                    <div class="col-md-3 mb-2" style={{borderBottom:"1px solid  rgb(190, 190, 190)"}}>
                        <label>Ownership</label>
                    </div>
                    <div class="col-md-8 mb-2" style={{borderBottom:"1px solid  rgb(190, 190, 190)"}}>
                        <p>Public</p>
                    </div>
                </div>
                <div class="row" style={{marginLeft:"16%"}}>
                    <div class="col-md-3 mb-2" style={{borderBottom:"1px solid  rgb(190, 190, 190)"}}>
                        <label>Global Headquarters	</label>
                    </div>
                    <div class="col-md-8 mb-2" style={{borderBottom:"1px solid  rgb(190, 190, 190)"}}>
                        <p>	Redwood City, California</p>
                    </div>
                </div>
                <div class="row"  style={{marginLeft:"16%"}}>
                    <div class="col-md-3 mb-2" style={{borderBottom:"1px solid  rgb(190, 190, 190)"}}>
                        <label>AddressAddress</label>
                    </div>
                    <div class="col-md-8 mb-2" style={{borderBottom:"1px solid  rgb(190, 190, 190)"}}>

                        <p>	Electronic Arts Inc. 209 Redwood Shores Parkway Redwood City, CA 94025</p>
                    </div>
                </div>
                <div class="row"  style={{marginLeft:"16%"}}>
                    <div class="col-md-3 mb-2" style={{borderBottom:"1px solid  rgb(190, 190, 190)"}}>
                        <label>Consumer Purchases</label>
                    </div>
                    <div class="col-md-8 mb-2" style={{borderBottom:"1px solid  rgb(190, 190, 190)"}}>
                        <p>	Residents in the United States, Canada or Japan contract with Electronic Arts Inc., 209 Redwood Shores Parkway, Redwood City, CA 94065, USA. Residents in any other country, then this Agreement is between you and EA Swiss Sàrl, Place du Molard 8, 1204, Geneva, Switzerland (CH-660-2328005-8).</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUs;