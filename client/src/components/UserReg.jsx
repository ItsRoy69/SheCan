import React from 'react'
import '../styles/userreg.css';
import formImg from "../images/login-img.png";
import axios from 'axios';
import { useState } from 'react';

const UserReg = ({ setUserRegModalOpen }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch('http://localhost:5000/auth/uregister', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
                address})
        });
        res = await res.json();
        if(!res.ok){
            alert(res.message);
            return;
        }
        else{
            setName("");
            setEmail("");
            setPassword("");
            setPhone("");
            setAddress("");
            alert("Registered successfully");
        }
    }

    return (
        <div className='userreg-wrapper'>
            <div className="prof-reg-modal">
                <div className="form-box">
                    <button
                        onClick={() => setUserRegModalOpen(false)}
                        id='form-close-btn'>
                        x
                    </button>
                    <div className="form-wrapper">
                        <h1>User Registration</h1>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className="form-control"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Enter name"
                                required />
                            <input
                                className="form-control"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter email"
                                required />                            
                            <input
                                className="form-control"
                                type="number"
                                minLength={10}
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="Enter phone no"
                                required />
                            <input
                                className="form-control"
                                type="text"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                placeholder="Enter address"
                                required />
                            <input
                                className="form-control"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter password"
                                required />
                            <button
                                type="submit">
                                Submit
                            </button>
                        </form>
                        <p>By continuing you agree to our <a href="">Terms of Use</a></p>
                        <p>Read our <a href="">Privacy policy</a></p>
                    </div>
                    
                    <img className='uformimage' src={formImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default UserReg
