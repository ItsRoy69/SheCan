import React from "react";
import Navbar from "../components/Navbar";
import "../styles/navbar.css";
import img1 from "../images/image1.png";
import img2 from "../images/cline.png";
import img3 from "../images/child.png";
import img4 from "../images/self-def.png";
import Footer from "../components/Footer";

import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-bod-first">
        <div className="hfl">
          <p className="hh">Your One-stop Solution To every Problem</p>
          <img src={img2} alt="" className="cline" />
          <p className="ph">
            SheCan is a website dedicated to empowering women in all aspects of
            their life. Be it tech, medicines, health or consulting doctors, we
            have you covered !
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="hfr">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="home-bod-second" id="services">
        <h1 className="hs">Services We Provide</h1>
        <div className="hss">
          <div className="hss-card">
            <img
              src="https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg"
              alt=""
            />
            <p className="bl1">
              <b>Pharmacies, Clinics & Medical Supplies</b>
            </p>
            <p className="bl">
              <b> Explore your needs</b>
            </p>
          </div>
          <div className="hss-card">
            <img
              src="http://whg-pc.com/wp-content/uploads/2020/07/shutterstock_780769447-1.jpg"
              alt=""
            />
            <p className="bl1">
              <b>Consult with doctors & gynecologists</b>
            </p>
            <p className="bl">
              <b> Explore your needs</b>
            </p>
          </div>
          <div className="hss-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_ef_tzmvgQwPFNAaV6kbFDcFnPKUXXtZwkfCqycwAZRxTOWS9iX4azlQuo16fLwWdAI&usqp=CAU"
              alt=""
            />
            <p className="bl1">
              <b>Education, Technology & Empowerment</b>
            </p>
            <p className="bl">
              <b> Explore your needs</b>
            </p>
          </div>
        </div>
      </div>
      <div className="home-bod-first">
        <div className="hfr3">
          <img src={img4} alt="" />
        </div>
        <div className="hfl-def">
          <p className="hh">Making Your Safety a Priority</p>

          <p className="ph">Self defense techniques and helpline numbers</p>
          <button className="btn">Learn How</button>
        </div>
      </div>
      <div className="home-bod-first">
        <div className="hfl-def">
          <p className="hh">Lend a Helping Hand</p>

          <p className="ph">
            Donations for senior citizens, widows and orphans
          </p>
          <button className="btn">Donate</button>
        </div>
        <div className="hfr2">
          <img src={img3} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
