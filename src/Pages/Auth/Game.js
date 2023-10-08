import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Auth/Css/Game.css';

const categoryDropDown = [
    { label: "Action", value: "Action" },
    { label: "Rampage", value: "Rampage" },
    { label: "Shott Amusement", value: "Shott Amusement" },
    { label: "Adventure", value: "Adventure" }
];

const Card = () => {
    const [cardData, setCardDta] = useState([]);

    const navigate = useNavigate()

    const getCardData = (category) => {

        axios.get(`http://localhost:3000/api/v1/games/get?category=${category}`)
            .then((res) => {
                setCardDta(res.data)
            })
    }

    useEffect(() => {
        getCardData("")
    }, [])

    return (
        <>


            <div className="container">
                <div className="form-group col-md-6">
                    <label for="inputCategory"></label>
                    <select name="category" id="inputCategory" className="form-control"
                        value={cardData.category}
                        onChange={(e) =>
                            getCardData(e.target.value)
                        }
                        >
                            <option value="">Select Category</option>
                        {categoryDropDown &&
                            categoryDropDown?.map((x) => (
                                <option value={x.value}>{x.value}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="row">
                    {cardData && cardData?.map((item) => (
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card shadow">
                                <img src={`http://localhost:3000${item?.image}`} className="card-img-top" alt="..." onClick={() => navigate('/gameDetails')} />
                                <div className="card-body">
                                    <div style={{ display: "flex" }}>
                                        <label>Name : </label>
                                        <h5 className="card-title">{item?.name}</h5>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <label>Price : </label>
                                        <h6 className="card-text">${item?.price}</h6>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <label>Description : </label>
                                        <h6 className="card-text">{item?.description}</h6>
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