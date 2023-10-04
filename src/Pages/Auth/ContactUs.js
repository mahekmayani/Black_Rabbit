import React, { useState } from 'react';
import '../Auth/Css/ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faWhatsapp, faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';



const ContactUs = () => {
    const [contactForm, setContactForm] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Mobile: '',
        AddYourProject: '',
    });

    const [error, setError] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Mobile: '',
        AddYourProject: '',
    });

    const handleChange = (e) => {
        // console.log("lgnFormData", e.target.value);
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value

        })
    }

    const ContactUsSave = () => {
        const error = {};

        if (!contactForm.FirstName) {
            error.FirstName = "Please FirstName Required"
        }

        if (!contactForm.LastName) {
            error.LastName = "Please LastName Required"
        }

        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!contactForm.Email) {
            error.Email = "Please Email Required"
        } else if (!emailRegex.test(contactForm.Email)) {
            error.Email = "Invalid Email"
        }
        const mobileRegex = /^\d+$/;
        if (!contactForm.Mobile) {
            error.Mobile = "Please Mobile Required"
        } else if (!mobileRegex.test(contactForm.Mobile)) {
            error.Mobile = "Invalid Mobile"
        }
        if (!contactForm.AddYourProject) {
            error.AddYourProject = "Please Add Your Project Required"
        }

        if (error.FirstName || error.LastName || error.Email || error.Mobile || error.AddYourProject) {
            setError(error)
            return;
        }

        const body = {
            firstName: contactForm.FirstName,
            lastName: contactForm.LastName,
            phone: contactForm.Mobile,
            email: contactForm.Email,
            message: contactForm.AddYourProject,
        }

        axios.post("http://localhost:3000/api/v1/contactUs/create", body)
            .then((res) => {
                if (res.status === 201) {
                    setContactForm({
                        FirstName: '',
                        LastName: '',
                        Email: '',
                        Mobile: '',
                        AddYourProject: '',
                    })
                }

                toast("Added successfully")
            }).catch((error) => {
                console.log("error", error);
                // if (error.response.data.message === "User already registered") {
                //   toast.error(<p>{"User already registered"}</p>, {
                //     position: "top-center",
                //   });
                // }
            })
    }

    return (
        <>
            <div className='container mx-auto'>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div className='containe mt-3'>
                        <div className='row justify-content-center mr-0'>
                            <div className='contact-form1'>
                                <form className='p-5 mx-auto' style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                                    <div style={{ height: "404px", width: "700px" }}>
                                        <h2 className='text-center mt-0'>Get In Touch</h2>

                                        <div className="form-row" >
                                            <div className="form-group col-md-6 mt-4">
                                                <input type="text"
                                                    name="FirstName"
                                                    value={contactForm.FirstName}
                                                    className='form-control'
                                                    placeholder='First Name'
                                                    onChange={(e) => {
                                                        setError({
                                                            ...error,
                                                            FirstName: ''
                                                        })
                                                        handleChange(e)
                                                    }}
                                                />
                                                {
                                                    error.FirstName && <p> {error.FirstName} </p>
                                                }

                                            </div>
                                            <div className="form-group col-md-6 mt-4">
                                                <input type="text"
                                                    name="LastName"
                                                    value={contactForm.LastName}
                                                    className='form-control'
                                                    placeholder='Last name'
                                                    onChange={(e) => {
                                                        setError({
                                                            ...error,
                                                            LastName: ''
                                                        })
                                                        handleChange(e)
                                                    }}
                                                />
                                                {
                                                    error.LastName && <p> {error.LastName} </p>
                                                }
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <input type="email"
                                                    name="Email"
                                                    value={contactForm.Email}
                                                    className='form-control'
                                                    placeholder='email'
                                                    onChange={(e) => {
                                                        setError({
                                                            ...error,
                                                            Email: ''
                                                        })
                                                        handleChange(e)
                                                    }}
                                                />
                                                {
                                                    error.Email && <p style={{ color: "red" }}> {error.Email} </p>
                                                }
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="text"
                                                    name="Mobile"
                                                    value={contactForm.Mobile}
                                                    className='form-control'
                                                    placeholder='Mobile Number'
                                                    onChange={(e) => {
                                                        setError({
                                                            ...error,
                                                            Mobile: ''
                                                        })
                                                        handleChange(e)
                                                    }}
                                                />
                                                {
                                                    error.Mobile && <p> {error.Mobile} </p>
                                                }
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <textarea
                                                    name="AddYourProject"
                                                    value={contactForm.AddYourProject}
                                                    className='form-control'
                                                    placeholder='Add Your Project'
                                                    onChange={(e) => {
                                                        setError({
                                                            ...error,
                                                            AddYourProject: ''
                                                        })
                                                        handleChange(e)
                                                    }}
                                                />
                                                {
                                                    error.AddYourProject && <p> {error.AddYourProject} </p>
                                                }
                                            </div>
                                        </div>

                                        <div className="contact-btn mt-5">
                                            <p1 className="button" style={{ verticalAlign: "middle" }}><span onClick={ContactUsSave}>Submit</span>
                                            </p1>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div>

                        <div className='container mt-3 mr-0 ml-0' style={{ backgroundColor: "rgb(0, 73, 115)", color: "white", width: "39.3vh" }}>
                            <div style={{ height: "500px" }}>
                                <h2 className='text-center mb-5'>Say Hi!</h2>

                                <div className="form-row" >
                                    <div className="form-group mt-5">
                                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                                        <div className='contact-form'>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder='email'
                                                value={"BlackRabbit@gmail.com"}

                                                style={{ height: "40px", marginLeft: "7vh", width: "34vh" }}
                                            />
                                            <div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            {/* <FontAwesomeIcon icon={faXmark} /> */}
                                            <div className='contact-form'>
                                                <input
                                                    type="text"
                                                    name="Mobile"
                                                    placeholder='Mobile Number'

                                                    value={"+91 9099975424"}
                                                    style={{ height: "40px", marginLeft: "7vh", width: "34vh" }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <div className='contact-form'>
                                                <input
                                                    type="text"
                                                    name="BlackRabbit"
                                                    placeholder='BlackRabbit'
                                                    value={"BlackRabbit"}
                                                    style={{ height: "40px", marginLeft: "7vh", width: "34vh" }}
                                                /><br></br><br></br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <FontAwesomeIcon icon={faLinkedin} style={{marginTop:"10vh"}}/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </>
    );
}

export default ContactUs;
