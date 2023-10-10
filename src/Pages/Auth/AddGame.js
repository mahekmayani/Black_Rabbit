import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../Auth/Css/AddGame.css";
import { Button, Modal } from "react-bootstrap";

const categoryDropDown = [
  { label: "Action", value: "Action" },
  { label: "Rampage", value: "Rampage" },
  { label: "Shott Amusement", value: "Shott Amusement" },
  { label: "Adventure", value: "Adventure" },
];

const AddGame = () => {
  const location = useLocation();

  const [addGame, setAddGame] = useState({
    description: "",
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (location?.state) {
      setAddGame(location?.state);
    }
  }, [location]);

  const [error, setError] = useState({
    description: "",
    name: "",
    price: "",
    category: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddGame({
      ...addGame,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    setAddGame({
      ...addGame,
      image: e.target.files[0],
    });

    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setAddGame({
          ...addGame,
          image: file, // Set the image property to the File object directly
        });
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setAddGame({
        ...addGame,
        image: null, // Clear the image property
      });
      setImagePreview(null);
      setError({ image: "Please Select a Valid Image File (JPEG or PNG)." });
    }
  };

  const handlePreview = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const AddGame = () => {
    const error = {};

    if (!addGame.description) {
      error.description = "Please Description Required";
    }

    const nameRegex = /^[a-zA-Z]*$/;
    if (!addGame.name) {
      error.name = "Please Name Required";
    } else if (!nameRegex.test(addGame.name)) {
      error.name = "Valid Name";
    }

    const priceRegex = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
    if (!addGame.price) {
      error.price = "Please Price Required";
    } else if (!priceRegex.test(addGame.price)) {
      error.price = "Invalid price";
    }

    if (!addGame.image) {
      error.image = "Please Image Required";
    }

    if (error.description || error.name || error.price || error.image) {
      setError(error);
      return;
    }

    const form_data = new FormData();
    if (location?.state) {
      form_data.append("id", addGame?.id);
    }

    form_data.append("description", addGame?.description);
    form_data.append("name", addGame?.name);
    form_data.append("price", addGame?.price);
    form_data.append("category", addGame?.category);
    form_data.append("image", addGame?.image);

    if (location?.state) {
      axios
        .put(
          `http://localhost:3000/api/v1/games/update/${location?.state?.id}`,
          form_data
        )
        .then((res) => {
          // console.log("update", res);
          // toast.success("Update Successfully");
          toast.success("Update successfully");

          navigate("/addGameTable");
        });
    } else {
      axios
        .post("http://localhost:3000/api/v1/games/create", form_data)
        .then((res) => {
          // console.log("res",res);
          if (res.status == 201) {
            setAddGame({
              description: "",
              name: "",
              price: "",
              category: "",
              image: "",
            });
          }
          navigate("/addGameTable");
        });
    }
  };

  const cancelBtn = () => {
    navigate("/addGameTable");
  };
  useEffect(() => {
    const handleAddGameShortcut = (e) => {
      if (e.key === "s" && e.altKey) {
        e.preventDefault();
        AddGame();
      }
    };

    const handleCancelShortcut = (e) => {
      if (e.key === "c" && e.altKey) {
        e.preventDefault();
        navigate("/addGameTable");
      }
    };

    document.addEventListener("keydown", handleAddGameShortcut);
    document.addEventListener("keydown", handleCancelShortcut);

    return () => {
      document.removeEventListener("keydown", handleAddGameShortcut);
      document.removeEventListener("keydown", handleCancelShortcut);
    };
  }, []);

  return (
    <>
      <div className='container mt-1'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='content'>
              <form className='  p-4'>
                <h1 style={{ textAlign: "center", marginBottom: "5%" }}>
                  {" "}
                  {location?.state?.id ? "Update" : "Add"} Game
                </h1>
                <div className='form-row'>
                  <div className='form-group col-md-6 mb-0'>
                    <input
                      type='text'
                      className='form-control'
                      name='description'
                      value={addGame.description}
                      placeholder='Description'
                      onChange={(e) => {
                        setError({
                          ...error,
                          description: "",
                        });
                        handleChange(e);
                      }}
                      // style={{marginLeft:"20%"}}
                    />
                    {error.description && <p>{error.description}</p>}
                  </div>
                  <div className='form-group col-md-6 mb-0'>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      value={addGame.name}
                      placeholder='Name'
                      onChange={(e) => {
                        setError({
                          ...error,
                          name: "",
                        });
                        handleChange(e);
                      }}
                      // style={{marginLeft:"70%"}}
                    />
                    {error.name && <p>{error.name}</p>}
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6 mb-0'>
                    <label for='inputPrice'></label>
                    <input
                      type='text'
                      className='form-control'
                      name='price'
                      value={addGame.price}
                      placeholder='Price'
                      onChange={(e) => {
                        setError({
                          ...error,
                          price: "",
                        });
                        handleChange(e);
                      }}
                    />
                    {error.price && <p>{error.price}</p>}
                  </div>
                  <div className='form-group col-md-6'>
                    <label for='inputCategory'></label>
                    <select
                      name='category'
                      id='inputCategory'
                      className='form-control'
                      value={addGame.category}
                      onChange={(e) => handleChange(e)}
                      // style={{marginLeft:"50%"}}
                    >
                      {categoryDropDown &&
                        categoryDropDown?.map((x) => (
                          <option value={x.value}>{x.value}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6 mb-3'>
                    <label htmlFor='inputImage'>Image</label>
                    <div className='custom-file'>
                      <input
                        type='file'
                        className='custom-file-input'
                        id='Image'
                        onChange={(e) => {
                          setError({
                            ...error,
                            image: "",
                          });
                          handleImageChange(e);
                        }}
                      />
                      <label className='custom-file-label' htmlFor='Image'>
                        Choose file
                      </label>
                    </div>
                    {error.image && (
                      <p>{error.image}</p>
                    )}
                  </div>
                  {imagePreview && (
                    <div className='form-group col-md-6 mb-3'>
                      <p
                        className='btn btn-primary'
                        style={{
                          marginTop: "35px",
                          width: "120px",
                          background: "#000",
                          color: "#fff",
                        }}
                        onClick={handlePreview}
                      >
                        Show Preview
                      </p>
                    </div>
                  )}
                </div>

                <div className='add-game-btn mt-5 d-flex'>
                  <p1 className='button' style={{ verticalAlign: "middle" }}>
                    <span onClick={AddGame}>
                      {location?.state?.id ? "Update" : "Add"} Game
                    </span>
                  </p1>

                  <p1 className='button cancel'>
                    <span onClick={cancelBtn}> Cancel</span>
                  </p1>
                </div> 
              </form>
            </div>
          </div>

          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header>
              <Modal.Title>Image Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt='Preview'
                  className='img-preview-modal centered-img'
                  width={470}
                  height={300}
                />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddGame;
