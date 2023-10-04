import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import '../Auth/Css/AddGame.css';


const categoryDropDown = [
    { label: "Action", value: "Action" },
    { label: "Rampage", value: "Rampage" },
    { label: "Shott Amusement", value: "Shott Amusement" },
    { label: "Adventure", value: "Adventure" }
];


const AddGame = () => {
    const location = useLocation();

    const [addGame, setAddGame] = useState({
        description: '',
        name: '',
        price: '',
        category: '',
        image: ''
    });

    useEffect(() => {
        if (location?.state) {
            setAddGame(location?.state)
        }
    }, [location])


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
    const toastify = () => {
        console.log("error");
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
        if (location?.state) {
            form_data.append("id", addGame?.id)
        }

        form_data.append("description", addGame?.description)
        form_data.append("name", addGame?.name)
        form_data.append("price", addGame?.price)
        form_data.append("category", addGame?.category)
        form_data.append("image", addGame?.image)

        // console.log("hello");

        if (location?.state) {
            console.log("location?.state", location?.state);
            axios.put(`http://localhost:3000/api/v1/games/update/${location?.state?.id}`, form_data)
                .then((res) => {
                    // console.log("update", res);
                    // toast.success("Update Successfully");
                    navigate("/addGameTable");
                })

        } else {
            axios.post("http://localhost:3000/api/v1/games/create", form_data)
                .then((res) => {
                    // console.log("res",res);
                    if (res.status == 201) {
                        setAddGame({
                            description: '',
                            name: '',
                            price: '',
                            category: '',
                            image: ''
                        })
                    }
                    navigate("/addGameTable")
                })
        }
    }

    return (
        <>
            <div className="container mt-1">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="content">
                            <form className="  p-4">
                                <h1 style={{ textAlign: "center" , marginBottom:"5%"}}> {location?.state?.id ? "Update" : "Add" } Game</h1>
                                <div className="form-row">
                                    <div className="form-group col-md-6 mb-0">
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
                                        // style={{marginLeft:"20%"}}
                                        />
                                        {
                                            error.description && <p>{error.description}</p>
                                        }
                                    </div>
                                    <div className="form-group col-md-6 mb-0">
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
                                        // style={{marginLeft:"70%"}}
                                        />
                                        {
                                            error.name && <p>{error.name}</p>
                                        }
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 mb-0">
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
                                            error.price && <p>{error.price}</p>
                                        }
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputCategory"></label>
                                        <select name="category" id="inputCategory" className="form-control"
                                            value={addGame.category}
                                            onChange={(e) =>
                                                handleChange(e)
                                            }
                                        // style={{marginLeft:"50%"}}
                                        >
                                            {categoryDropDown &&
                                                categoryDropDown?.map((x) => (
                                                    <option value={x.value}>{x.value}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 mb-3">
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
                                            error.image && <p>{error.image}</p>
                                        }
                                    </div>
                                </div>
                                <div className="add-game-btn mt-5">
                                    <p1 className="button" style={{ verticalAlign: "middle" }}><span onClick={AddGame}>{location?.state?.id ? "Update" : "Add" } Game</span>

                                    </p1>
                                </div>
                            </form>
                        </div>
                    </div>

                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default AddGame;