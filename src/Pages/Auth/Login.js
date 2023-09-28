import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [isLogin, setIsLogin] = useState(true); // Initially, show the login form

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and register forms
  };

  return (
    <>

      <div className='container mt-5 mr-0' >
        <div className='col-md-8'>
          <form className='border border-primary p-4'>
            <h4 className='text-center mb-4'>
              Login
            </h4>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label for='inputEmail4'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail4'
                  placeholder='Email'
                />
              </div>
              <div className='form-group col-md-6'>
                <label for='inputPassword4'>Password</label>
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
                        <FontAwesomeIcon icon={faEye} />// Eye slash icon for showinh password
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} /> // Eye icon for hide password
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>



            <button type='submit' className='btn btn-primary'>
              SignIn
              {/* {isLogin ? "Sign in" : "Sign up"}{" "} */}
              {/* Display sign in or sign up based on the state */}
            </button>
            <p className='mt-3'>
              Don't have an account?
              {/* {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "} */}
              <span
                onClick={toggleForm}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Register
                {/* {isLogin ? "Register" : "Login"}{" "} */}
                {/* Toggle between login and register text */}
              </span>
            </p>
          </form>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Login;