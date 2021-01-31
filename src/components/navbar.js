import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./navbar.css";
import { Typography } from "antd";

import logo from "../images/logo.png";

const Navbar = () => {
  const Title = Typography;
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="logo" width="150" height="150"></img>
        </div>
        <div className="menu">
          <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>Register</h3>
          <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>About Us</h3>
          <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>Contact Us</h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
