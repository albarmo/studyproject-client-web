import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
// antd ui components
import { Button, Typography } from "antd";
import "../components/custom.css";
import Navbar from "../components/navbar";

// import animation from lottie
import Lottie from "react-lottie";
import animationData from "../lotties/3046-me-at-office.json";

const LandingPage = () => {
  // navigation
  const history = useHistory();
  const { Title } = Typography;

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
      <Navbar/>
      <div className="header">
        <div className="overlay">
          <div className="figure">
              <Lottie options={defaultOptions} width="100%" height="100%" />
            </div>
          <div className="container">
            <div className="caption">
              <Title style={{ fontWeight: "bolder" }}>StudyProject</Title>
                <p className="lead">
                  Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
                  vestibulum sed facilisi et nulla id bibendum elementum.
                  Lectus dui sollicitudin id elementum aliquam placerat
                  pretium ornare turpis.
                </p>
                <Link to="/login">
                  <div className="btn-landing" type="primary">
                    <Title
                      level={5}
                      style={{
                        fontWeight: "bolder",
                        color: "white",
                        margin: 0,
                      }}
                    >
                      SIGN IN
                    </Title>
                  </div>
                </Link>
                <div className="register-link">
                  <p>
                    Dont hanve account?... <Link to="/register"> Register here</Link>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default LandingPage;
