import React from "react";
import "../styles/footer.css";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer-bod">
      <p className="p1" style={{ color: "#fff" }}>
        Stay In Touch
      </p>
      <p className="p2" style={{ color: "#A77EA7" }}>
        Get Our Updates
      </p>
      <div className="foot-in">
        <input type="text" placeholder="Your email address" />
        <button className="footbtn">Sign Up </button>
      </div>
      <div className="foot-head">
        <div className="dl"></div>
        <img src={logo} alt="" />
        <div className="dl"></div>
      </div>
      <div className="foot-btm">
        <a href="#services">Home</a>
        <a href="#services">Services</a>
        <a href="#services">Donate</a>
        <a href="#services">FAQs</a>
        <a href="#services">My Account</a>
        <a href="#services">Join Us</a>
      </div>
    </div>
  );
}

export default Footer;
