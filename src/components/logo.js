import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./logo.css";
import logo from "../images/logo.png";

const Logo = () => {
  return (
    <>
      <div className="navbar-container-logo">
        <div className="logo-logo">
          <img src={logo} alt="Girl in a jacket" width="12%" height="12%"></img>
        </div>
      </div>
    </>
  );
};

export default Logo;
