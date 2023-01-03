import React from "react";
import "../styles/navbar.css";

import logo from "../images/logo.png";
import { useState } from "react";
import RegProf from "../pages/RegProf";

export default function () {

  const [regModalOpen, setRegModalOpen] = useState(false);

  return (
    <>
    <div className="navbod">
      <a className="navleft" href="/">
        <img src={logo} alt="" />
      </a>
      <div className="navright">
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="/donate">Donate</a>
        <a href="#services">FAQs</a>
        <a href="#services">My Account</a>
        <a href="#"
        onClick={()=> setRegModalOpen(true)}>
          Join Us
        </a>
      </div>
    </div>
    {regModalOpen ? 
    <RegProf regModalOpen={regModalOpen} setRegModalOpen={setRegModalOpen}/>
    :""}
    </>
  );
}
