import React, { useEffect, useState } from 'react';
import '../Auth/Css/GameDetails.css';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GameDetails = () => {


    const navigate = useNavigate();


    return (
        <>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo+Narrow&display=swap" rel="stylesheet" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


            <div className="banner">
                <h1> Game Details</h1>
            </div>

            <div className="product_container">
                <div className="sidebar product_slides slide_border">
                    <img src="https://source.unsplash.com/150x150/?watch" className="product_slides-item slide_images slide_option slide_image_color inline-photo2 show-on-scroll2" onclick="changeSlide(event,'Slide1')" />
                    <img src="https://source.unsplash.com/150x150/?handwatch" className="product_slides-item slide_images slide_option inline-photo2 show-on-scroll2" onclick="changeSlide(event,'Slide2')" />
                    <img src="https://source.unsplash.com/150x150/?wallclock" className="product_slides-item slide_images slide_option inline-photo2 show-on-scroll2" onclick="changeSlide(event,'Slide3')" />
                </div>


                <div id="Slide1" className="Slider_Container SLider_border Product_tumbnail animate">
                    <img src="https://source.unsplash.com/450x450/?watch" />
                </div>

                <div id="Slide2" className="Slider_Container SLider_border Product_tumbnail animate" style={{ display: "none" }}>
                    <img src="https://source.unsplash.com/450x450/?handwatch" />
                </div>

                <div id="Slide3" className="Slider_Container SLider_border Product_tumbnail animate" style={{ display: "none" }}>
                    <img src="https://www.wallpaperflare.com/search?wallpaper=GAME" />
                </div>
                <div className="details">
                    <h1 className="title">Games</h1>
                    <span className="price">$149.99</span> <strike className="strike">$160</strike>
                    <div className="star-ratings-css">
                        <div className="star-ratings-css-top"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <ul className="sub-details">
                        <li><i className="fa fa-shield"></i> Secured Payment</li>
                        <li><i className="fa fa-truck"></i> Delivered in 2-5 working days</li>
                    </ul>
                    <tr>
                        <td><p  ><span className="game-Cancel-btn">Cancel</span></p></td>
                        <td><p  ><span className="BuyNow-btn">BUY NOW</span></p></td>
                    </tr>
                    </div>

            </div>

            <div className="reviews inline-photo show-on-scroll">
                <div className="review_sidebar review_bar_block review_gray review_card">
                    <button className="review-bar-item review-button tablink btn4 active_button" onclick="opentab_type(event, 'Description')">Description</button>
                    <button className="review-bar-item review-button tablink btn4" onclick="opentab_type(event, 'Specification')">Specification</button>
                    <button className="review-bar-item review-button tablink btn4" onclick="opentab_type(event, 'User_reviews')">Reviews</button>
                </div>

                <div>

                    <div id="Description" class="review_container tab_type">
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div id="Specification" class="review_container tab_type" style={{ display: "none" }}>
                        <h2>Specification</h2>
                        <table class="specification_table">
                            <tr>
                                <td>Dimension</td>
                                <td>24cm</td>
                            </tr>
                            <tr>
                                <td>Material</td>
                                <td>Stainless Steel</td>
                            </tr>
                            <tr>
                                <td>Warrenty</td>
                                <td>1 Year</td>
                            </tr>
                            <tr>
                                <td>Waterproof</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Return</td>
                                <td>No</td>
                            </tr>
                        </table>
                    </div>

                    <div id="User_reviews" class="review_container tab_type" style={{ display: "none" }}>
                        <div class="user_star_ratings">
                            <section class="overall_rating">
                                <span class="sub-title">OVERALL RATING</span>
                                <span class="title">4.0</span>
                                <p>(123 Reviews)</p>
                            </section>
                            <section class="rating_blocks">
                                <span class="sub-title">BASED ON 123 REVIEWS</span>
                                <ul>
                                    <li>
                                        5 Star
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        23
                                    </li>
                                    <li>
                                        4 Star
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        40
                                    </li>
                                    <li>
                                        3 Star
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        35
                                    </li>
                                    <li>
                                        2 Star
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        10
                                    </li>
                                    <li>
                                        1 Star
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        15
                                    </li>
                                </ul>
                            </section>
                            <section class="reviews_recorded">
                                <ul>
                                    <li>
                                        <img src="https://source.unsplash.com/50x50/?person" alt="User" /> <b>Albert</b>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </li>
                                    <li>
                                        <img src="https://source.unsplash.com/50x50/?person" alt="User" /> <b>Albert</b>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </li>
                                </ul>
                                <button class="btn1" style={{ width: "150px" }}>Load More...</button>
                            </section>
                        </div>
                        <div class="enter_user_star_ratings">
                            <h1 class="title">ADD YOUR REVIEW</h1>
                            <div class="rating-box">
                                <div class="rating-container">
                                    <input type="radio" name="rating" value="5" id="star-5" /> <label for="star-5" >&#9733;</label>

                                    <input type="radio" name="rating" value="4" id="star-4" /> <label for="star-4" >&#9733;</label>

                                    <input type="radio" name="rating" value="3" id="star-3" /> <label for="star-3" >&#9733;</label>

                                    <input type="radio" name="rating" value="2" id="star-2" /> <label for="star-2" >&#9733;</label>

                                    <input type="radio" name="rating" value="1" id="star-1" /> <label for="star-1" >&#9733;</label>
                                </div>
                            </div>
                            <textarea placeholder="Write a review" name="userreview" required></textarea>
                            <button class="btn2">SUBMIT</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default GameDetails