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
        <p>Home</p>
        <p>Services</p>
        <p>Donate</p>
        <p>FAQs</p>
        <p>My Account</p>
        <p>Join Us</p>
        <p>My Cart</p>
      </div>
    </div>
  );
}
