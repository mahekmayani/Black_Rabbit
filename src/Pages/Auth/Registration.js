import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Css/Login.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";

const Registration = () => {
  const [regFormData, setRegFormData] = useState({
    FirstName: "",
    LastName: "",
    Mobile: "",
    BookingDate: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [error, setError] = useState({
    FirstName: "",
    LastName: "",
    Mobile: "",
    BookingDate: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    // setIsLogin(!isLogin);
    navigate("/");
  };

  const handleChange = (e) => {
    setRegFormData({
      ...regFormData,
      [e.target.name]: e.target.value,
    });
  };

  const toastify = () => {
    console.log("error");
}

  const SignUp = () => {
    const error = {};
    if (!regFormData.FirstName) {
      error.FirstName = "Please FirstName Required";
    }

    if (!regFormData.LastName) {
      error.LastName = "Please LastName Required";
    }

    const mobileRegex = /^\d+$/;
    if (!regFormData.Mobile) {
      error.Mobile = "Please Mobile Required";
    } else if (!mobileRegex.test(regFormData.Mobile)) {
      error.Mobile = "Invalid Mobile";
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regFormData.Email) {
      error.Email = "Please Email Required";
    } else if (!emailRegex.test(regFormData.Email)) {
      error.Email = "Invalid Email";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    if (!regFormData.Password) {
      error.Password = "Please Password Required";
    } else if (!passwordRegex.test(regFormData.Password)) {
      error.Password = "Invalid Password";
    }

    const ConfirmPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    if (!regFormData.ConfirmPassword) {
      error.ConfirmPassword = "Please ConfirmPassword Required";
    } else if (!ConfirmPasswordRegex.test(regFormData.ConfirmPassword)) {
      error.ConfirmPasswordRegex = "Invalid Password";
    }

    if (
      error.FirstName ||
      error.LastName ||
      error.Mobile ||
      error.Email ||
      error.Password
    ) {
      setError(error);
      return;
    }

    const body = {
      firstName: regFormData.FirstName,
      lastName: regFormData.LastName,
      phone: regFormData.Mobile,
      email: regFormData.Email,
      password: regFormData.Password,
    };

    axios
      .post("http://localhost:3000/api/v1/auth/register", body)
      .then((res) => {
        if (res.status === 201) {
          setRegFormData({
            FirstName: "",
            LastName: "",
            Mobile: "",
            Email: "",
            Password: "",
            ConfirmPassword: "",
          });
        }
        toast("Registration Successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log("error", error);
        if (error.response.data.message === "User already registered") {
          toast.error(<p>{"User already registered"}</p>, {
            position: "top-center",
          });
        }
      });
  };

  const onKeyBtn = (e) => {
    if (e.key === "Enter") SignUp();
  };

  return (
    <>
    <div className='background-image'>
      <div
        className='d-flex justify-content-end align-items-center'
        style={{ minHeight: "100vh" }}
      >
        {/* {isLogin ?  */}
        <form
          className='border border-primary p-4 mr-4'
          style={{ width: "25%" }}
        >
          <h4
            className='text-center box-shadow'
            style={{ textShadow: "2px 2px 5px silver", color: "#E238EC" }}
          >
            Register
          </h4>
          <div className='form-group custom-input' style={{ width: "95%", height:'69px' }}>
            <label htmlFor='inputEmail4'>First Name</label>
            <input
              type='text'
              className='form-control'
              name='FirstName'
              value={regFormData.FirstName}
              id='inputFirst'
              placeholder='First Name'
              onChange={(e) => {
                setError({
                  ...error,
                  FirstName: "",
                });
                handleChange(e);
              }}
            />
            {error.FirstName && <p className="error-msg">{error.FirstName}</p>}
          </div>
          <div className='form-group custom-input' style={{ width: "95%", height:'69px' }}>
            <label htmlFor='inputEmail4'>Last Name</label>
            <input
              type='text'
              name='LastName'
              className='form-control'
              value={regFormData.LastName}
              id='inputLast'
              placeholder='Last Name'
              onChange={(e) => {
                setError({
                  ...error,
                  LastName: "",
                });
                handleChange(e);
              }}
            />
            {error.LastName && <p className="error-msg">{error.LastName}</p>}
          </div>
          <div className='form-group custom-input' style={{ width: "95%",height:'69px' }}>
            <label htmlFor='inputEmail4'>Email</label>
            <input
              type='email'
              name='Email'
              className='form-control'
              value={regFormData.Email}
              placeholder='Email'
              onChange={(e) => {
                setError({
                  ...error,
                  Email: "",
                });
                handleChange(e);
              }}
            />
            {error.Email && <p className="error-msg">{error.Email}</p>}
          </div>
          <div className='form-group custom-input' style={{height:'69px'}}>
            <label htmlFor='inputPassword4'>Password</label>
            <div className='input-group'>
              <input
                type={passwordVisible ? "text" : "password"}
                className='form-control'
                id='inputPassword4'
                placeholder='Password'
                value={regFormData?.Password}
                name="Password"
                onChange={(e) => {
                  setError({
                    ...error,
                    Password: "",
                  });
                  handleChange(e);
                }}
              />
              <div
                className='input-group-append'
                style={{ paddingTop: "4px", marginRight: "auto" }}
              >
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
            {error.Password && <p className="error-msg">{error.Password}</p>}
          </div>

          <div className='form-group custom-input' style={{ width: "95%", height:'69px' }}>
            <label htmlFor='inputPassword4'>Mobile</label>
            <input
              type='mobile'
              name='Mobile'
              className='form-control'
              value={regFormData.Mobile}
              id='inputMobile'
              placeholder='Mobile'
              onChange={(e) => {
                setError({
                  ...error,
                  Mobile: "",
                });
                handleChange(e);
              }}
              onKeyPress={(e) => onKeyBtn(e)}
            />
            {error.Mobile && <p className="error-msg">{error.Mobile}</p>}
          </div>

          {/* <button className='button' style={{ verticalAlign: "middle" }}>
            <span className='sign-in-btn'>Sign Up</span>
          </button> */}
            <p className="button" onClick={SignUp} style={{verticalAlign: "middle" }}><span className="sign-in-btn">Sign Up</span>
            </p>
          <p className='mt-3' style={{color: '#fff'}}>
            Don't have an account?{" "}
            <span
              className='register-link'
              onClick={toggleForm}
              style={{ cursor: "pointer" }}
            >
              Login
            </span>
          </p>
        </form>
        {/* :  */}
        {/* "" */}
      </div>
    </div>
   <ToastContainer />
    </>
  );
};

export default Registration;
