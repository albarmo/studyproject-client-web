import React, { useState, UseEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "antd";
import { userLogin } from "../store/action/userAction";
import { Link } from "react-router-dom";

import "./loginPage.css";
import Logo from "../components/logo";

import Lottie from "react-lottie";
import animationData from "../lotties/38435-register.json";

const LoginPage = () => {
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };

  const access_token = useSelector((state) => state.userReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    console.log("login");
    dispatch(userLogin(email, password));
    console.log(access_token, "state");
  }

  function emailHandler(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <div className="section-login">
        <Logo />
        <div className="container-content-login">
          {/* 1st section */}
          <div className="section-left-login">
            <div className="section-left-content-login">
              <h1>Something About The Apps</h1>
              <Lottie options={defaultOptions} width="100%" height="100%" />
              <p>
                Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
                vestibulum sed facilisi et nulla id bibendum elementum
              </p>
            </div>
          </div>
          {/* 2nd section */}
          <div className="section-right-login">
            <h1>Login</h1>
            {/* <p>{email}</p>
            <p>{password}</p> */}
            <div className="input-form-login">
              <Form>
                <input
                  className="input-login"
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => emailHandler(e)}
                  placeholder="email..."
                ></input>

                <input
                  className="input-login"
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => passwordHandler(e)}
                  placeholder="password..."
                ></input>

                <h3 className="btn-signIn" onClick={login} htmlType="submit">
                  SIGN IN
                </h3>
              </Form>
            </div>
            <p>
              Dont have an account?...
              <Link to="/register">
                <h3>Register</h3>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
