import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./custom.css";
import logo from "../images/logo.png";

const Logo = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-light">
          <div class="container-fluid">
            <div class="navbar-brand" href="#">
              <img src={logo} alt="logo" width="150" height="150"></img>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Logo;
