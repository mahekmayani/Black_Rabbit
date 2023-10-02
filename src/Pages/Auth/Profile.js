import React from 'react'
import '../Auth/Css/Profile.css'
import image from '../Auth/images/1111.png';

const Profile = () => {

    return (
        <>
            <div className="row justify-content-center mr-0" >
                <div className='container p-2' style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", height: "570px" }}>
                    {/* <div className='container mt-3 mr-0'> */}
                    <div className='col-md-8'>
                        {/* <div>
                            <img src={image} class="rounded-circle" />
                        </div> */}
                        <div>
                            <form>
                                <div className="card-header text-center" style={{ width: "460px" }}>
                                    <h2 className="text-center">Profile</h2>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4 mt-5">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='FirstName'
                                            placeholder='FirstName'
                                        />
                                    </div>
                                    <div className="form-group col-md-4 mt-5">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='LastName'
                                            placeholder='LastName'
                                        />
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className="form-group col-md-4 mt-5">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name='Email'
                                            placeholder='Email'
                                        />
                                    </div>
                                    <div className="form-group col-md-4 mt-5">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='Password'
                                            placeholder='Password'
                                        />
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className="form-group col-md-4 mt-5">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='Mobile'
                                            placeholder='Mobile'
                                        />
                                    </div>
                                    <div className="form-group col-md-4 mt-5">
                                        <input
                                            type="birthdate"
                                            className="form-control"
                                            name='BirthDate'
                                            placeholder='BirthDate'
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-md-6 mt-5" >
                                    <h5 for="inputGender" style={{ display: "flex" }}>Gender : </h5>
                                    <input
                                        type="radio"
                                        name='Male'
                                        style={{ marginTop: "25px" }}
                                    />Male
                                    <input
                                        type="radio"
                                        name='Female'
                                        style={{ marginLeft: "30px" }}
                                    />Female
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Profile