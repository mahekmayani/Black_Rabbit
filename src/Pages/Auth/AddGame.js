import React from "react";

const AddGame = () => {
    return (
        <>
            <div className="contaiter mt-3 mr-0 ml-0">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className="border border-primary p-4">
                            <h4 className="text-center md-4">
                                Add Game
                            </h4>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputName"></label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        id="Name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="inputDescription"></label>
                                    <input
                                        type="description"
                                        className="form-control"
                                        id="Description"
                                        placeholder="Description"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputPrice"></label>
                                    <input
                                        type="price"
                                        className="form-control"
                                        id="Price"
                                        placeholder="Price"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputCategory"></label>
                                    <select id="inputCategory" className="form-control">
                                        <option selected>Action</option>
                                        <option>Rampage</option>
                                        <option>Shott Amusement</option>
                                        <option>Adventure</option>
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
                                    />
                                </div>
                            </div>
                            <button type="sumbit" className="btn btn-primary">
                                Sumbit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddGame;