import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Css/Login.css";
import Registration from "./Registration";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [lgnFormData, setLgnFormData] = useState({
    Email: '',
    Password: '',
  });

  const [error, setError] = useState({
    Email: '',
    Password: ''
  });

  const toggleForm = () => {
    // setIsLogin(!isLogin);
    navigate("/registration");
  };
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
    {/* {isLogin ?  */}
    <div className='background-image'>
        <div className='d-flex justify-content-end align-items-center' style={{ minHeight: "100vh" }}>
          <form className='border border-primary p-4 mr-4' style={{ width: '25%'}}>
            <h4 className='text-center mb-4 box-shadow' style={{textShadow: '2px 2px 5px silver', color:'#E238EC'}}>Login</h4>
            <div className='form-group custom-input' style={{width: '95%'}}>
              <label htmlFor='inputEmail4'>Email</label>
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
                  error.Email && <p className="error-msg"> {error.Email} </p>
                }

            </div>
            <div className='form-group custom-input'>
              <label htmlFor='inputPassword4'>Password</label>
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
                  
                <div className='input-group-append' style={{paddingTop: '4px', marginRight: 'auto'}}>
                  <span
                    className='input-group-text'
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {passwordVisible ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </span>
                </div>
              </div>
              {
                    error.Password && <p className="error-msg">{error.Password}</p>
                  }
            </div>

            {/* <button type='submit' className='button button2'>
              Sign In
            </button> */}
          <p className="button" style={{verticalAlign: "middle"}}><span className="sign-in-btn" onClick={SignIn}>Sign In</span>
            </p>
            <p className='mt-3' style={{color: "#FFF"}}>
              Don't have an account?{" "}
              <span
                className='register-link'
                onClick={toggleForm}
                style={{ cursor: "pointer" }}
              >
                Register
              </span>
            </p>
          </form>
          </div>
      </div>
      {/* : 
      <Registration />
} */}
</>
  );
};

export default Login;
