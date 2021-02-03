import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./custom.css";
import logo from "../images/logo.png";

const Logo = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-light">
          <div className="container-fluid">
            <div className="navbar-brand">
              <Link to="/">
                <img src={logo} alt="logo" width="150" height="150"/>
              </Link>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Logo;
