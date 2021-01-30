import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
// antd ui components
import { Button, Typography } from "antd";
import "./LandingPage.css";
import "../components/navbar";
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
      <div className="landing">
        <div className="section">
          <Navbar />
          <div className="container-content">
            <div className="section-left">
              <div className="section-left-content">
                <div>
                  <Title style={{ fontWeight: "bolder" }}>StudyProject</Title>
                  <p>
                    Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
                    vestibulum sed facilisi et nulla id bibendum elementum.
                    Lectus dui sollicitudin id elementum aliquam placerat
                    pretium ornare turpis.
                  </p>
                </div>
                <Link to="/login">
                  <div className="btn-landing" type="primary">
                    <Title
                      level={5}
                      style={{
                        fontWeight: "bolder",
                        color: "white",
                      }}
                    >
                      SIGN IN
                    </Title>
                  </div>
                </Link>
                <div>
                  <p>
                    Dont hanve account?...
                    <Link to="/register">
                      <Title
                        level={4}
                        style={{
                          fontWeight: "bolder",
                        }}
                      >
                        Register
                      </Title>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="section-right">
              <Lottie options={defaultOptions} width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
