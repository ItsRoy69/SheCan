import React from "react";
import dashboard from "../images/dashboard.png";
import profile from "../images/profile.png";

import { BsPencilSquare, BsPlusSquare, BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import medicines from "../data/medicines";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_ban">
        <img src={dashboard} alt="" className="dashboard_banner" />
      </div>
      <div className="dashboard_pp">
        <img src={profile} alt="" className="dashboard_banner" />
      </div>
      <div className="dashboard_mid">
        <div className="dashboard_info">
          <h1 className="dashboard_name">Gayathry Narayan</h1>
          <p className="dashboard_email">Student@SomeUniversityName</p>

          <p className="dashboard_about">
            A random little bio. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.{" "}
          </p>
          <Link to="/">
            <button className="dashbtns">
              <BsPencilSquare
                className="Userboard_pencil"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              />
              Edit Your Profile
            </button>
          </Link>
        </div>
        <div className="dashboard_tasks">
          <div className="dashboard_headtasks">
            <h1>My Orders</h1>
            <h1>Registered Events</h1>
            <h1>Questions Asked</h1>
            <h1>Questions Answered</h1>
          </div>
          <div className="dashboard_bodytasks">
            <div className="orders_parent container">
              {medicines.map((medicine) => {
                return (
                  <div className="orderscard">
                    <img src={medicine.img} alt="" />
                    <div className="orderscard_text">
                      <p>{medicine.name}</p>
                      <p>$ {medicine.price}</p>
                      <p>Available : {medicine.quantity} / 200</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
