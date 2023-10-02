import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Auth/Css/Login.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [lgnFormData, setLgnFormData] = useState({
    Email: '',
    Password: '',
  });

  const [error, setError] = useState({
    Email: '',
    Password: ''
  });

  const handleChange = (e) => {
    // console.log("lgnFormData", e.target.value);
    setLgnFormData({
      ...lgnFormData,
      [e.target.name]: e.target.value

    })
  }
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


 

  const navigate = useNavigate();

  const SignIn = () => {

    const error = {};

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!lgnFormData.Email) {
      error.Email = "Please Email Required"
    } else if (!emailRegex.test(lgnFormData.Email)) {
      error.Email = "Invalid Email"
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    if (!lgnFormData.Password) {
      error.Password = "Please Password Required"
    } else if (!passwordRegex.test(lgnFormData.Password)) {
      error.Password = "Invalid Password"
    }

    if (error.Email || error.Password) {
      setError(error)
      return;
    }


    const body = {
      email: lgnFormData.Email,
      password: lgnFormData.Password
    }

    axios.post("http://localhost:3000/api/v1/auth/login", body)
      .then((res) => {
        // console.log("res",res);
        if (res.status === 200) {
          setLgnFormData({
            Email: '',
            Password: '',
          })

          localStorage.setItem("token", res.data.token.access.token)
          localStorage.setItem("userName", res.data.user.firstName)

          navigate('/game')
        }
      }).catch((error) => {
        if (error.response.data.message === "Incorrect email or password") {
          toast.error(<p>{"Incorrect email or password..!"}</p>, {
            position: "top-center",
          });
        }
      })
  }

  const onKeyBtn = (e) => {
    if (e.key === "Enter")
      SignIn();
  }

  return (
    <>

      <div className='container mt-5 mr-0' >
        <div className='col-md-8'>
          {/* <div className='login-form'> */}
          <form className='border border-primary p-4'>
            <h4 className='text-center mb-4'>
              Login
            </h4>
            <div className='form-row'>
              <div className='form-group col-md-6'>

                <input
                  type='email'
                  name='Email'
                  className='form-control'
                  value={lgnFormData.Email}
                  id='inputEmail4'
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
                  error.Email && <p> {error.Email} </p>
                }

              </div>
              <div className='form-group col-md-6 mb-0'>
                <div className='input-group'>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name='Password'
                    className='form-control'
                    id='inputPassword4'
                    value={lgnFormData.Password}
                    placeholder='Password'
                    onChange={(e) => {
                      setError({
                        ...error,
                        Password: ''
                      })
                      handleChange(e)
                    }}
                    onKeyPress={(e) => onKeyBtn(e)}
                  />
                  

                  <div className='input-group-append'>
                    <span
                      className='input-group-text'
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      {passwordVisible ? (
                        <FontAwesomeIcon icon={faEye} />// Eye slash icon for showinh password
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} /> // Eye icon for hide password
                      )}
                    </span>
                  </div>
                </div>
                {
                    error.Password && <p>{error.Password}</p>
                  }
              </div>
            </div>


            <div className='login-form'>
              <p onClick={SignIn} className='btn btn-primary'>SingIn</p>
            </div>
            <p onClick={() => navigate("/registration")} className='mt-3'>
              Don't have an account? Register here
            </p>
          </form>
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Login;