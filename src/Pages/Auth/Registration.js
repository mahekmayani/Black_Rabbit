import React, { useState } from "react";
import '../Auth/Css/Registration.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [isRegister, setIsRegister] = useState(true); // Initially, show the login form

  const toggleForm = () => {
    setIsRegister(!isRegister); // Toggle between login and register forms
  };

  
  return (
    <>
      <div className="f1">
        <div className='container'>
          {/* <div className='row justify-content-center'> */}
            <div className='col-md-8'>
              <form className='border border-primary p-4 '>
                <h4 className='text-center mb-4'style={{color:"white"}}>
                  Registration
                  {/* {isRegister ? "Login" : "Register"}{" "} */}
                  {/* Display login or register based on the state */}
                </h4>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="first"
                      className="form-control"
                      id="inputFirst"
                      placeholder="First Name"
                    />

                  </div>

                  <div className="form-group col-md-6">
                    <input
                      type="last"
                      className="form-control"
                      id="inputLast"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <input
                      type='email'
                      className='form-control'
                      id='inputEmail4'
                      placeholder='Email'
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <div className='input-group'>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className='form-control'
                        id='inputPassword4'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className='input-group-append'>
                        <span
                          className='input-group-text'
                          onClick={togglePasswordVisibility}
                          style={{ cursor: "pointer" }}
                        >
                          {passwordVisible ? (
                            <FontAwesomeIcon icon={faEyeSlash} /> // Eye slash icon for hiding password
                          ) : (
                            <FontAwesomeIcon icon={faEye} /> // Eye icon for showing password
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="mobile"
                      className="form-control"
                      id="inputMobile"
                      placeholder="Mobile"
                    />
                  </div>
                </div>


                <div className='form-group'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='gridCheck'
                    />
                    <label className='form-check-label' for='gridCheck' style={{color: "white"}}>
                      Check me out
                    </label>
                  </div>
                </div>

                <button type='singup' className='btn btn-primary'>
                  SingUp
                  {/* {isRegister ? "Sign in" : "Sign up"}{" "} */}
                  {/* Display sign in or sign up based on the state */}
                </button>
                <p className='mt-3' style={{color:"white"}}>
                  Already have an account?
                  {/* {isRegister
                  ? "Don't have an account? "
                  : "Already have an account? "} */}
                  <span
                    onClick={toggleForm}
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    Login
                    {/* {isRegister ? "Register" : "Login"}{" "} */}
                    {/* Toggle between login and register text */}
                  </span>
                </p>
              </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default Registration;