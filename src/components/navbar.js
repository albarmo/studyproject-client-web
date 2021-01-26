import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <h1>StudyProject</h1>
        </div>
        <div className="menu">
          <h3>Classroom</h3>
          <h3>About Us</h3>
          <h3>Contact Us</h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
