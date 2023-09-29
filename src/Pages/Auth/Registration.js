import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../Auth/Css/Registration.css';
import axios from 'axios';
import { ToastContainer, collapseToast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Registration = () => {
  

  const [isRegister, setIsRegister] = useState(); // Initially, show the login form

  // const toggleForm = () => {
  //   setIsRegister(!isRegister); // Toggle between login and register forms
  // };

  const [regFormData,setRegFormData]=useState({
    FirstName: '',
        LastName: '',
        Mobile: '',
        BookingDate: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
    });
  const [error, setError] = useState({
    FirstName: '',
    LastName: '',
    Mobile: '',
    BookingDate: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegFormData({
      ...regFormData,
      [e.target.name]: e.target.value
    })
  }

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toastify = () => {
    console.log("error");
  }

  const SignUp = () => {
    const error = {};
    if (!regFormData.FirstName) {
      error.FirstName = "Please FirstName Required"
    }

    if (!regFormData.LastName) {
      error.LastName = "Please LastName Required"
    }

    const mobileRegex = /^\d+$/;
    if (!regFormData.Mobile) {
      error.Mobile = "Please Mobile Required"
    } else if (!mobileRegex.test(regFormData.Mobile)) {
      error.Mobile = "Invalid Mobile"
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regFormData.Email) {
      error.Email = "Please Email Required"
    } else if (!emailRegex.test(regFormData.Email)) {
      error.Email = "Invalid Email"
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    if (!regFormData.Password) {
      error.Password = "Please Password Required"
    } else if (!passwordRegex.test(regFormData.Password)) {
      error.Password = "Invalid Password"
    }

    const ConfirmPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    if (!regFormData.ConfirmPassword) {
      error.ConfirmPassword = "Please ConfirmPassword Required"
    } else if (!ConfirmPasswordRegex.test(regFormData.ConfirmPassword)) {
      error.ConfirmPasswordRegex = "Invalid Password"
    }


    if (error.FirstName || error.LastName || error.Mobile || error.Email || error.Password) {
      setError(error)
      return;
    }

    const body = {
      firstName: regFormData.FirstName,
      lastName: regFormData.LastName,
      phone: regFormData.Mobile,
      email: regFormData.Email,
      password: regFormData.Password,
    }

    axios.post("https://node-project-oshu.onrender.com/api/v1/auth/register", body)
      .then((res) => {
        if (res.status === 201) {
          setRegFormData({
            FirstName: '',
            LastName: '',
            Mobile: '',
            Email: '',
            Password: '',
            ConfirmPassword: '',
          })
        }
        navigate("/")


      }).catch((error) => {
        console.log("error", error);
        if (error.response.data.message === "User already registered") {
          toast.error(<p>{"User already registered"}</p>, {
            position: "top-center",
          });
        }
      })
  }

  const onKeyBtn = (e) => {
    if (e.key === "Enter")
      SignUp();
  }

  return (
    <>
      <div className="f1" style={{marginLeft:"379px"}}>
        <div className='container mt-3 mr-0'>
          <div className='col-md-8'>
            <form className='border border-primary p-4 '>
              <h4 className='text-center mb-4' style={{ color: "black" }}>
                Registration
              </h4>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name='FirstName'
                    value={regFormData.FirstName}
                    id="inputFirst"
                    placeholder="First Name"
                    onChange={(e) => {
                      setError({
                        ...error,
                        FirstName: ''
                      })
                      handleChange(e)
                    }}
                  />
                  {
                    error.FirstName && <p style={{color : "red"}}>{error.FirstName}</p>
                  }

                </div>

                <div className="form-group col-md-6">
                  <input
                    type="text"
                    name='LastName'
                    className="form-control"
                    value={regFormData.LastName}
                    id="inputLast"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setError({
                        ...error,
                        LastName: ''
                      })
                      handleChange(e)
                    }}
                  />
                  {
                    error.LastName && <p style={{color : "red"}}>{error.LastName}</p>
                  }
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <input
                    type='email'
                    name='Email'
                    className='form-control'
                    value={regFormData.Email}
                    placeholder='Email'
                    onChange={(e) => {
                      setError({
                        ...error,
                        Email: ''
                      })
                      handleChange(e)
                    }}
                  />
                  {
                    error.Email && <p style={{color : "red"}}>{error.Email}</p>
                  }
                </div>
                <div className='form-group col-md-6'>
                  <div className='input-group'>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name='Password'
                      className='form-control'
                      value={regFormData.Password}
                      placeholder='Password'
                      onChange={(e) => {
                        setError({
                          ...error,
                          Password: ''
                        })
                        handleChange(e)
                      }}
                    
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
                {
                      error.Password && <p style={{color : "red"}}>{error.Password}</p>
                    }
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="mobile"
                    name='Mobile'
                    className="form-control"
                    value={regFormData.Mobile}
                    id="inputMobile"
                    placeholder="Mobile"
                    onChange={(e) => {
                      setError({
                        ...error,
                        Mobile: ''
                      })
                      handleChange(e)
                    }}
                    onKeyPress={(e) => onKeyBtn(e)}
                  />
                  {
                    error.Mobile && <p style={{color : "red"}}>{error.Mobile}</p>
                  }
                </div>
              </div>


              <div className='form-group'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    
                    type='checkbox'
                    id='gridCheck'
                  />
                  <label className='form-check-label' for='gridCheck' style={{ color: "black" }}>
                    Check me out
                  </label>
                </div>
              </div>

              <p onClick={SignUp} className='btn btn-primary' >SingUp</p>
              <p className='mt-3' style={{ color: "white" }}>
                Already have an account?
               
                <p onClick={() => navigate("/")}><u>Login</u></p>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />

    </>
  );
};

export default Registration;