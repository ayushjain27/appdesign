import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

import { CgLogIn } from "react-icons/cg";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Logged In Successfully", "success")
      navigate('/');
    }
    else {
      props.showAlert("Invalid Details", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card border-dark h-100">
              <div className="card-body">
                <h3 className="text-dark">Login</h3>
                <hr
                  style={{
                    color: "#000",
                    borderTop: "2px solid",
                    opacity: "1",
                  }}
                />
                <h5 className="card-title text-center mt-5">
                  Welcome to Shiv Dhara Telecom
                </h5>
                <p className="text-center text-muted mt-3 mb-5">
                  Enter your credentials and start journey with us.
                </p>
                <form>
                  <div className="mb-4">
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
                      onChange={onChange}
                      placeholder="Password"
                    />
                  </div>
                  <p
                    id="forgetPassword"
                    className={`${styles.forgotPassword} text-end text-dark mb-3 fw-bold`}
                    style={{ cursor: "pointer" }}
                  >
                    Forgot Password ?
                  </p>
                  <div className="mb-5 col-3 d-grid mx-auto">
                    <button type="submit" onClick={handleSubmit} className="btn btn-dark">
                      <CgLogIn className="me-1" />
                      Login
                    </button>
                  </div>
                  <p className="text-center">
                    New User ?{" "}
                    <span
                      onClick={()=>navigate('/register')}
                      className="ms-1 text-dark fw-bold text-decoration-underline"
                      style={{ cursor: "pointer" }}
                    >
                      Create Account
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className={`${styles.right} col-md-6 m-auto`}>
            <img
              className={`${styles.img} img-fluid mt-4`}
              src="./Images/login.svg"
              alt="login"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
