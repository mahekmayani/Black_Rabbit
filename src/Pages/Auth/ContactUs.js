import React, { useState } from 'react';
import '../Auth/Css/ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faXmark } from "@fortawesome/free-solid-svg-icons";



const ContactUs =() => {
const [contactForm, setContactForm] = useState(true);

    const toggleForm = () => {
        setContactForm(!contactForm);
    };

    return (
        <>
            <div className='container mt-3 mr-0 ml-0'>
                <div className='contact-form'>
                    <form className="border border-primary p-4">
                        <h2 className='text-center md-4'>Get In Touch</h2>

                        <div className="form-row">
                            <div className="form-group col-md-4 mt-3">
                                <input type="text"
                                    name="FirstName"
                                    placeholder='First Name'


                                />
                            </div>
                            <div className="form-group col-md-4 mt-3">
                                <input type="text"
                                    name="Lastname"
                                    placeholder='Last name'
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <input type="email"
                                    name="email"
                                    placeholder='email'
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <input type="text"
                                    name="Mobile"
                                    placeholder='Mobile Number'
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <textarea
                                    name="Add Your Project"
                                    placeholder='Add Your Project'
                                />
                            </div>
                        </div>

                        <button type='submit' className='btn-btn-primary'><b>SUBMIT</b></button>
                        <span 
                        onClick={toggleForm}
                        style={{ cursor: "pointer" , color: "blue" }}>
                        </span>
 
                     </form>
                </div>
            </div>
            <div className='container mt-3 mr-0 ml-0'>
            <form className="border border-primary p-4">
                <h2 className='text-center md-4'>Get In Touch</h2>
                <div className="form-row">
                <div className="form-group col-md-6">
                <input
                    type="email"
                    name="email"
                    placeholder='email'
                    value={"BlackRabbit@gmail.com"}
                />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                <input
                    type="text"
                    name="Mobile"
                    placeholder='Mobile Number'
                    value={"+91 9099975424"}
                />
                </div>
                </div>
                {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                <FontAwesomeIcon icon={faXmark} />
                <input type="text" name="BlackRabbit" placeholder='BlackRabbit' value={"BlackRabbit"} /><br></br><br></br>
            </form>
            </div>
        </>
    );
}

export default ContactUs;
