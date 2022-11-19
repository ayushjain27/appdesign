import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

import { IoIosLock } from "react-icons/io";

const SignUp = (props) => {
  const[credentials, setCredentials] = useState({name:"", email:"", password:""})
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json()
    console.log(json);
    if(json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/');
      props.showAlert("Account Created Successfully", "success")
    }
    else{
      props.showAlert("Invalid Credential", "danger")
    }  
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div
            className={`${styles.left} col-md-6 d-flex justify-content-center m-auto`}
          >
            <img
              className={`${styles.img} img-fluid`}
              src="./Images/signup.png"
              alt="welcome"
            />
          </div>
          <div className="col-md-6 m-auto">
            <div className="card border-dark">
              <div className="card-body">
                <h3 className="text-dark">Sign Up</h3>
                <p className="text-muted">
                  Please fill in this form to create an account!
                </p>
                <hr
                  style={{
                    color: "#000",
                    borderTop: "2px solid",
                    opacity: "1",
                  }}
                />
                <form className="mt-5">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          onChange={onChange}
                          placeholder="Enter your name"
                          />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={onChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3 d-grid col-4 mx-auto">
                    <button type="submit" onClick={handleSubmit} className="btn btn-dark">
                      <IoIosLock className="fs-4 me-1" />
                      Create Account
                    </button>
                  </div>
                  <p className={`${styles.new} text-center`}>
                    Already have an account ?{" "}
                    <span
                      onClick={()=>navigate('/login')}
                      className="ms-1 text-dark fw-bold text-decoration-underline"
                      style={{ cursor: "pointer" }}
                    >
                      Login here
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
