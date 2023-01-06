import React from "react";
import "../styles/regprof.css";
import "../styles/loginprof.css";
import formImg from "../images/login-img.png";
import axios from "axios";
import { useState } from "react";
import RegProf from "./RegProf";
import { Link, useNavigate } from "react-router-dom";

const LogProf = ({ setLogProfModalOpen }) => {
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:5000/auth/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    res = await res.json();
    if (!res.ok) {
      alert(res.message);
      return;
    } else {
      setEmail("");
      setPassword("");
      alert("Logged successfully");
    }
  };

  return (
    <div className="loginprof-wrapper">
      <div className="prof-login-modal">
        <div className="form-box">
          <button
            onClick={() => setLogProfModalOpen(false)}
            id="form-close-btn"
          >
            x
          </button>
          <img className="formimage" src={formImg} alt="" />
          <div className="form-wrapper">
            <br />
            <br />
            <h1>Login as Professional</h1>
            <br />
            <br />
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
              <button type="submit">Submit</button>
            </form>
            <h6>
              Don't have an account ?
              <Link
                onClick={() => {
                  setRegModalOpen(true);
                  setLogProfModalOpen(false);
                }}
              >
                Signup
              </Link>
            </h6>
            {regModalOpen ? (
              <RegProf
                regModalOpen={regModalOpen}
                setRegModalOpen={setRegModalOpen}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogProf;
