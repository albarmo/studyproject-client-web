import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../store/action/userAction";
import "./custom.css";
import { Typography } from "antd";

import logo from "../images/logo.png";

const NavbarLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(userLogout());
    history.push("/");
  };

  const Title = Typography;
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-light">
            <div className="container-fluid">
            <div className="navbar-brand" href="#">
                <img src={logo} alt="logo" width="150" height="150"></img>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                  <Link to="/register">
                    <div className="nav-link">
                      <h3 style={{fontWeight: "bold",fontSize: "20px"}}>Register</h3>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div className="nav-link">
                        <h3 style={{fontWeight: "bold",fontSize: "20px"}}>About</h3>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div className="nav-link">
                      <h3 style={{fontWeight: "bold",fontSize: "20px"}}>Contact</h3>
                    </div>
                  </Link>
                  <div className="nav-link">
                      <h3 style={{ fontWeight: "bold", fontSize: "20px" }} onClick={logout}>Logout</h3>
                    </div>
                </div>
              </div>
            </div>
          </nav>
    </>
  );
};

export default NavbarLogin;
