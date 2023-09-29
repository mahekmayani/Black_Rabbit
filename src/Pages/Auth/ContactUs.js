import React, { useState } from 'react';
import '../Auth/Css/ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faXmark } from "@fortawesome/free-solid-svg-icons";



const ContactUs = () => {
    const [contactForm, setContactForm] = useState(true);

    return (
        <>  
        <div className='container mx-auto'>
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                    <div className='containe mt-3'>
                        <div className='row justify-content-center mr-0'>
                        <div className='contact-form'>
                            <form className='p-5 mx-auto'  style={{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                                <div style={{height:"404px", width: "700px"}}>
                                    <h2 className='text-center mt-0'>Get In Touch</h2>

                                    <div className="form-row" >
                                        <div className="form-group col-md-6 mt-4">
                                            <input type="text"
                                                name="FirstName"
                                                className='form-control'
                                                placeholder='First Name'
                                            />
                                        </div>
                                        <div className="form-group col-md-6 mt-4">
                                            <input type="text"
                                                name="Lastname"
                                                className='form-control'
                                                placeholder='Last name'
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="email"
                                                name="email"
                                                className='form-control'
                                                placeholder='email'
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text"
                                                name="Mobile"
                                                className='form-control'
                                                placeholder='Mobile Number'
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <textarea
                                                name="Add Your Project"
                                                className='form-control'
                                                placeholder='Add Your Project'
                                            />
                                        </div>
                                    </div>

                                    <p className='btn btn-primary'><b>SUBMIT</b></p>
                                    <span
                                        style={{ cursor: "pointer", color: "Blue" }}>
                                    </span>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>

                    <div>
                        <div className='container mt-3 mr-0 ml-0' style={{backgroundColor:"rgb(0, 73, 115)", color:"white", width:"300px"}}>
                                <div style={{height:"500px"}}>
                                <h2 className='text-center md-4'>Get In Touch</h2>
                                <div className="form-row" >
                                    <div className="form-group col-md-6 mt-5">
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
                                    {/* <FontAwesomeIcon icon={faXmark} /> */}
                                        <input
                                            type="text"
                                            name="Mobile"
                                            placeholder='Mobile Number'
                                            value={"+91 9099975424"}
                                        />
                                        
                                    </div>
                                </div>

                                {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                               
                                <input type="text" name="BlackRabbit" placeholder='BlackRabbit' value={"BlackRabbit"} /><br></br><br></br>
                                </div>
                                
                            
                        </div>
                    </div>
                </div>
                </div>
        </>
    );
}

export default ContactUs;
