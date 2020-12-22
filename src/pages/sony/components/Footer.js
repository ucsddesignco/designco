import React, { useState } from "react";
import { Link } from "react-router-dom";
import dco_logo from "../images/designco_logo.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img className="nav-logo" src={dco_logo} alt="logo" />
        </Link>
        <Link to="/" className="navbar-logo">
          <h3 className="dco-copyright">Design Co © 2020</h3>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
