import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Auth/Css/Forgot.css';

const Forgot = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='form2' id='img'>
                <div className='f1'>
                    <p></p>

                    <div className='Forgot-form'>
                        <h1>Forgot Password</h1>

                        <input 
                        type="password" 
                        name="Password" 
                        placeholder='New Password'
                        /><br></br><br></br>
                        <input 
                        type="confirmpassword" 
                        name="Confirm Password" 
                        placeholder='Confirm Password'
                        /><br></br><br></br>
                        <input type='button' button onClick={() => navigate("/")} name='Save' value="Save" required />
                        <input type='button' button onClick={() => navigate("/")} name='Cancel' value="Cancel" required />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Forgot;
