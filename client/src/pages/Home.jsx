import React from "react";

import "../styles/navbar.css";
import img1 from "../images/image1.png";
import img2 from "../images/cline.png";
import img3 from "../images/child.png";
import img4 from "../images/self-def.png";

import "../styles/home.css";
import AuthModal from '../components/Auth/AuthModal'
import { useSheModal } from "../context/sheContext";

const Home = () => {

  const { openauthmodal } =
    useSheModal();

  return (

    <div id="homemain">

      {openauthmodal && <AuthModal />}
      <div >
        <div className="home-bod-first">
          <div className="hfl">
            <p className="hh">Your One-stop Solution To every Problem</p>
            <img src={img2} alt="" className="cline" />
            <p className="ph">
              SheCan is a website dedicated to empowering women in all aspects of
              their life. Be it tech, medicines, health or consulting doctors, we
              have you covered !
            </p>
            <a href="#services">
              <button className="btns">Get Started</button>
            </a>
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
                <b> Pharmacies & Other Supplies </b>
              </p>
              <a className="bl" href="/meds">
                <b> Explore your needs</b>
              </a>
            </div>
            <div className="hss-card">
              <img
                src="http://whg-pc.com/wp-content/uploads/2020/07/shutterstock_780769447-1.jpg"
                alt=""
              />
              <p className="bl1">
                <b>Consult with doctors & gynecologists</b>
              </p>
              <a className="bl" href="/professionals">
                <b> Get online consultation</b>
              </a>
            </div>
            <div className="hss-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_ef_tzmvgQwPFNAaV6kbFDcFnPKUXXtZwkfCqycwAZRxTOWS9iX4azlQuo16fLwWdAI&usqp=CAU"
                alt=""
              />
              <p className="bl1">
                <b>Education, Technology & Empowerment</b>
              </p>

              <a className="bl" href="/edtech">
                <b> Check upcoming events</b>
              </a>
            </div>
          </div>
        </div>
        <div className="home-bod-secondlast">
          <div className="hfr3">
            <img src={img4} alt="" />
          </div>
          <div className="hfl-def">
            <p className="hh">Making Your Safety a Priority</p>

            <p className="ph">Self defense techniques and helpline numbers</p>
            <a href="/safety">
              <button className="btns">Learn How</button>
            </a>
          </div>
        </div>
        <div className="home-bod-last">
          <div className="hfl-def">
            <p className="hh">Lend a Helping Hand</p>

            <p className="ph">
              Donations for senior citizens, widows and orphans
            </p>
            <a href="/donate">
              <button className="btns">Donate</button>
            </a>
          </div>
          <div className="hfr2">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
