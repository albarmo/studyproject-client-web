import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const RegisterPage = () => {
  return (
    <>
      <div className="register">
        <div className="section-register">
          <div className="section-left-register">
            <div className="clear"></div>
            <div className="content-up">
              <h2>Studyproject</h2>
              <p>
                Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
                vestibulum sed facilisi et nulla id bibendum elementum
              </p>
            </div>
            <div className="content-down">
              <p>Have account ?</p>
              <Link to="/login">
                <h3>Sign In</h3>
              </Link>
            </div>
          </div>
          <div className="section-right-register">
            <h2>Right</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
