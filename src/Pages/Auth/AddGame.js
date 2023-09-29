import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const categoryDropDown = [
    { label: "Action", value: "Action" },
    { label: "Rampage", value: "Rampage" },
    { label: "Shott Amusement", value: "Shott Amusement" },
    { label: "Adventure", value: "Adventure" }
];

const AddGame = () => {
    const [addGame, setAddGame] = useState({
        description: '',
        name: '',
        price: '',
        category: '',
        image: ''
    });

    const [error, setError] = useState({
        description: '',
        name: '',
        price: '',
        category: '',
        image: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setAddGame({
            ...addGame,
            [e.target.name]: e.target.value
        })
    }


    const handleImageChange = (e) => {
        setAddGame({
            ...addGame,
            image: e.target.files[0]
        })
    }

    const AddGame = () => {
        const error = {};

        if (!addGame.description) {
            error.description = "please description required";
        }

        const nameRegex = /^[a-zA-Z]*$/;
        if (!addGame.name) {
            error.name = "please name required";
        } else if (!nameRegex.test(addGame.name)) {
            error.name = "valid name"
        }

        const priceRegex = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
        if (!addGame.price) {
            error.price = "please price required";
        } else if (!priceRegex.test(addGame.price)) {
            error.price = "Invalid price"
        }

        if (!addGame.image) {
            error.image = "please Image required";
        }

        if (error.description || error.name || error.price || error.image) {
            setError(error)
            return;
        }


        const form_data = new FormData();

        form_data.append("description", addGame?.description)
        form_data.append("name", addGame?.name)
        form_data.append("price", addGame?.price)
        form_data.append("category", addGame?.category)
        form_data.append("image", addGame?.image)
        
        // console.log("hello");

        axios.post("https://node-project-oshu.onrender.com/api/v1/games/create", form_data)
            .then((res) => {
                if (res) {
                    setAddGame({
                        description: '',
                        name: '',
                        price: '',
                        category: '',
                        image: ''
                    })
                }
                navigate("/game")
            })
    }

    return (
        <>
            <div className="contaiter mt-3 mr-0 ml-0">
                <div className="row justify-content-center mr-0">
                    <div className="col-md-6">
                        <form className="p-4"  style={{boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)" ,height:"530px"}}>
                            <h4 className="text-center md-4">
                                Add Game
                            </h4>
                            <div className="form-row pt-5">
                                <div className="form-group col-md-4 ">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="description"
                                        value={addGame.description}
                                        placeholder="Description"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                description: ''
                                            })
                                            handleChange(e)
                                        }}
                                    />
                                    {
                                        error.description && <p style={{ color: "red" }}>{error.description}</p>
                                    }
                                </div>
                                <div className="form-group col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={addGame.name}
                                        placeholder="Name"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                name: ''
                                            })
                                            handleChange(e)
                                        }}
                                    />
                                    {
                                        error.name && <p style={{ color: "red" }}>{error.name}</p>
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputPrice"></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="price"
                                        value={addGame.price}
                                        placeholder="Price"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                price: ''
                                            })
                                            handleChange(e)
                                        }}
                                    />
                                    {
                                        error.price && <p style={{ color: "red" }}>{error.price}</p>
                                    }
                                </div>
                                <div className="form-group col-md-6" >
                                    <label for="inputCategory"></label>
                                    <select name="category" id="inputCategory" className="form-control" style={{ width: "90%" }}                                         
                                              value={addGame.category}
                                            onChange={(e) =>
                                                handleChange(e)
                                            }>
                                            {categoryDropDown &&
                                                categoryDropDown?.map((x) => (
                                                    <option value={x.value}>{x.value}</option>
                                                ))
                                            }
                                        </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputImage">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="Image"
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                image: ''
                                            })
                                            handleImageChange(e)
                                        }}
                                    />

                                    {
                                        error.image && <p style={{ color: "red" }}>{error.image}</p>
                                    }
                                </div>
                            </div>
                            <p onClick={AddGame} className='btn btn-primary'>Addbooks</p>

                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}


export default AddGame;