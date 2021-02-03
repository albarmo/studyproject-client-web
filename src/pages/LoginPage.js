import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Typography } from "antd";
import { userLogin, userLogout } from "../store/action/userAction";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

import "../components/custom.css";
import Logo from "../components/logo";

import Lottie from "react-lottie";
import animationData from "../lotties/38435-register.json";

const LoginPage = () => {
  // getAccess
  const history = useHistory();
  const dispatch = useDispatch();

  const { Title } = Typography;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const access_token = localStorage.getItem("access_token");
  const isLogin = useSelector((state) => state.userReducer.isLogin);

  useEffect(() => {
    localStorage.clear();
    dispatch(userLogout());
  }, []);

  useEffect(() => {
    if (isLogin) {
      history.push("/homepage");
      swal({
        title: "Hello!",
        text: "success login to the apps",
        icon: "success",
        button: "Close",
      });
    }
  }, [isLogin]);

  function login() {
    dispatch(userLogin(email, password));
  }

  function emailHandler(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };
  return (
    <>
      <div className="login">
          <Logo></Logo>
          <div className="col-md-8">
            <div className="container">
                <div className="login-caption">
                  <Title style={{ fontWeight: "bolder" }}>
                      Something About The Apps
                  </Title>
                  <div className="login-figure">
                    <Lottie options={defaultOptions} width="100%" height="100%" />
                  </div>
                  <p>
                    Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
                    vestibulum sed facilisi et nulla id bibendum elementum
                  </p>
                </div>
            </div>
          </div>
          <div className="col-md-4 login-form">
            <div >
            <div className="login-title">
              <Title style={{ fontWeight: "bolder", color: "white" }}>
                Login
              </Title>
            </div> 
            <div className="input-login">
              <Form>
                  <input
                    className="input-form-login"
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => emailHandler(e)}
                    placeholder="Email address"
                  ></input>

                  <input
                    className="input-form-login"
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => passwordHandler(e)}
                    placeholder="password..."
                  ></input>

                  <button className="btn-signIn" onClick={login} htmlType="submit">
                    SIGN IN
                  </button>
                </Form>
              </div>
              <div className="register-link">
                <p>Dont have an account?...</p>
                <Link to="/register">
                  <Title level={3} style={{ color: "white"}}>
                    Register
                  </Title>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default LoginPage;
