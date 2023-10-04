import React from 'react';
import '../Auth/Css/GameDetails.css';

const GameDetails = () => {

    return (
        <>
        <div class="container my-5">

            <div class="card-details-card p-0">
                <div class="row">

                    <div class="col-md-6 col-sm-12">
                        <img class="img-fluid details-img" src="https://source.unsplash.com/5Tm4YRqnNcM" alt="" />
                    </div>
                    <div class="col-md-6 col-sm-12 description-container p-5">
                        <div class="main-description">
                            <p class="product-category mb-0">Graphite</p>
                            <h3>iPhone 7 Graphite - 256GB</h3>
                                <p class="product-price">$1199.00</p>
                                <form class="add-inputs" method="post">
                                    <input type="number" class="form-control" id="cart_quantity" name="cart_quantity" value="1" min="1" max="10" />
                                        <button name="add_to_cart" type="submit" class="btn btn-primary btn-lg">Add to cart</button>
                                </form>
                                <form class="add-inputs" method="post">
                                    <button name="add_to_cart" type="submit" class="btn btn-primary btn-lg">Add to Wishlist</button>
                                </form>
                                <div style={{clear:"both"}}></div>



                                    <p class="product-title mt-4 mb-1">About this product</p>
                                    <p class="product-description mb-4">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis assumenda voluptatem tempore dolor quod. Expedita, id, minus similique dolor sed adipisci aliquam natus amet doloremque delectus cupiditate? Sint, quasi, ad necessitatibus omnis quaerat tenetur corporis porro aut, natus ex ab id vel odit veniam fugiat temporibus aperiam quia rem minima!
                                    </p>


                                        <p class="product-title mt-4 mb-1">Share this product</p>


                        </div>
                        

                    </div>
                </div>
            </div>
            </div>
            </>
            )
}

            export default GameDetails