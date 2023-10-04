import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Auth/Css/Game.css';

const Card = () => {
    const [cardData, setCardDta] = useState([]);
    console.log("cardData", cardData);


    const navigate = useNavigate()

    const getCardDta = () => {
        axios.get("http://localhost:3000/api/v1/games/get")
            .then((res) => {
                // console.log("res.data",res.data);
                setCardDta(res.data)


            })
    }

    useEffect(() => {
        getCardDta()
    }, [])

    return (
        <>
            {/* <div class="container mt-2">
                <div class=" ">
                    <div class=" ">
                        <div class="card1 " style={{ display: "flex" }}>
                            {cardData.map((item) => (
                                <div className='card1 ' style={{ width: "20rem" }} key={item.id}>
                                    <img className='card1-img-top h-75' src={`http://localhost:3000${item.image}`} alt='Card image cap' />                                        <div class="card1-body">
                                    </div>
                                    <div className="card1-body card1-p" >
                                        <div className="col" style={{ display: "flex" }}>
                                            <h5>Name:</h5>
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="col" style={{ display: "flex" }}>
                                            <h5>Price:</h5>
                                            <p>{item.price}</p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}

<div className="container">
    <div className="row">
{cardData && cardData?.map((item) => (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card shadow">
                <img src={`http://localhost:3000${item?.image}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div style={{display:"flex"}}> 
                    <label>Name : </label>
                    <h5 className="card-title">{item?.name}</h5>
                    </div>
                    <div style={{display:"flex"}}>
                    <label>Price : </label>
                    <h6 className="card-text">${item?.price}</h6>
                    </div>
                </div>
                <div className="card-body card-p">
                    <div className="row">
                        <div className="col col-xs-4 ">
                        </div>
                        <div className="col col-xs-4 ">
                        </div>
                        <div className="col col-xs-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
        ))}
        </div>
</div>
        </>




    )
}

export default Card;