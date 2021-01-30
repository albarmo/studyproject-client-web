import React, { useState, UseEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Typography } from "antd";
import { userLogin } from "../store/action/userAction";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

import "./loginPage.css";
import Logo from "../components/logo";

import Lottie from "react-lottie";
import animationData from "../lotties/38435-register.json";

const LoginPage = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const access_token = useSelector((state) => state.access_token);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };

  function login() {
    console.log("login");
    dispatch(userLogin(email, password));
    localStorage.setItem("access_token", access_token);
    let access = localStorage.getItem("access_token");
    if (access) {
      swal("Good job!", "Success Login", "success");
      history.push("/homepage");
      console.log("success login and redirect to homepage");
    } else {
      swal("Ops!", "email or password wrong!");
      console.log("error >>> email or password wrong");
    }
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
              <Title style={{ fontWeight: "bolder" }}>
                Something About The Apps
              </Title>
              <Lottie options={defaultOptions} width="100%" height="100%" />
              <p>
                Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
                vestibulum sed facilisi et nulla id bibendum elementum
              </p>
            </div>
          </div>
          {/* 2nd section */}
          <div className="section-right-login">
            <Title style={{ fontWeight: "bolder", color: "white" }}>
              Login
            </Title>
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
                <Title level={5} style={{ color: "white", fontWeight: "bold" }}>
                  Register
                </Title>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
