import React, { useEffect, useState } from 'react';
import '../Auth/Css/GameDetails.css';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const GameDetails = () => {

    const location = useLocation();

    const [gameDetails, setGameDetails] = useState()
    const navigate = useNavigate()

    return (
        <>
            <div className='container'>
                <div className="banner">
                    <h1> Game Details</h1>
                </div>
            </div>
            <div className="product_container">

                <div id="Slide1" className=" SLider_border Product_tumbnail animate">
                    <img src={`http://localhost:3000${location?.state?.image}`}
                        height={400}
                        width={500}
                    />
                </div>


                <div className="details mt-5">
                    <h1 className="title mb-3"><b> Name : </b>{location?.state?.name}</h1>
                    <span className="price"><b> Price : </b>${location?.state?.price}</span>
                    <div className="star-ratings-css">
                        <div className="star-ratings-css-top"></div>
                        <div className="star-ratings-css-bottom"></div>
                    </div>
                    <p className='description mt-3'><b> Description : </b>{location?.state?.description}</p>
                    <ul className="sub-details">

                        <li><b> Category : </b><FontAwesomeIcon icon={faCaretDown} /> {location?.state?.category}</li>

                    </ul>
                    <tr>
                        <td><p ><span className="game-Cancel-btn mt-4" onClick={() => navigate('/game')}>Cancel</span></p></td>
                        <td><p ><span className="BuyNow-btn" onClick={() => navigate('/membership')}>Buy Now</span></p></td>
                    </tr>
                </div>

            </div>

        </>
    )
}

export default GameDetails