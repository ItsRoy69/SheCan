import React from "react";
import "../styles/navbar.css";

import logo from "../images/logo.png";

export default function () {
  return (
    <div className="navbod">
      <div className="navleft">
        <img src={logo} alt="" />
      </div>
      <div className="navright">
        <a href="#">Home</a>
        <a href="#services">Services</a>
        <a href="#services">Donate</a>
        <a href="#services">FAQs</a>
        <a href="#services">My Account</a>
        <a href="#services">Join Us</a>
      </div>
    </div>
  );
}
