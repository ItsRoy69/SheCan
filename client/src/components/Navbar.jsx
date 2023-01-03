import React from "react";
import "../styles/navbar.css";
import { MdExpandMore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";
import RegProf from "../pages/RegProf";

export default function () {

  const [regModalOpen, setRegModalOpen] = useState(false);

  return (

//     <>
//     <div className="navbod">
//       <a className="navleft" href="/">
//         <img src={logo} alt="" />
//       </a>
//       <div className="navright">
//         <a href="/">Home</a>
//         <a href="#services">Services</a>
//         <a href="/donate">Donate</a>
//         <a href="#services">FAQs</a>
//         <a href="#services">My Account</a>
//         <a href="#"
//         onClick={()=> setRegModalOpen(true)}>
//           Join Us
//         </a>
//       </div>
//     </div>
//     {regModalOpen ? 
//     <RegProf regModalOpen={regModalOpen} setRegModalOpen={setRegModalOpen}/>
//     :""}
//     </>
<>
    <nav className="navbar fixed-top navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <MdExpandMore />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="/">
                Home
              </a> */}
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/donate">
                Donate
              </Link>
            </li>

            <li className="nav-item" onClick={()=> setRegModalOpen(true)}>
              <Link className="nav-link">
                Register as Professional
              </Link>
            </li>

            <li className="nav-item" 
            onClick={()=> setRegModalOpen(true)}
            style={{ paddingRight: "130px" }}>
              <Link className="nav-link">
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        {regModalOpen ? 
    <RegProf regModalOpen={regModalOpen} setRegModalOpen={setRegModalOpen}/>
    :""}
    </>
  );
}
