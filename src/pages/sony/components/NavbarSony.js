import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarSony.scss";
import logo from "../images/sony_logo.svg";

function NavbarSony() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img className="nav-logo" src={logo} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes color="white" /> : <FaBars color="white" />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Timeline
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarSony;
