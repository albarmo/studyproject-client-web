import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
// antd ui components
import { Button } from "antd";
import "./LandingPage.css";
import "../components/navbar";
import Navbar from "../components/navbar";

// import animation from lottie
import Lottie from "react-lottie";
import animationData from "../lotties/3046-me-at-office.json";

const LandingPage = () => {
  // navigation
  const history = useHistory();

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
                  <h1>studyproject</h1>
                  <p>
                    Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
                    vestibulum sed facilisi et nulla id bibendum elementum.
                    Lectus dui sollicitudin id elementum aliquam placerat
                    pretium ornare turpis.
                  </p>
                </div>
                <Link to="/login">
                  <div className="btn-landing" type="primary">
                    <h4>Sign In</h4>
                  </div>
                </Link>
                <div>
                  <p>
                    Dont hanve account?...<Link to="/register"> Register</Link>
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
