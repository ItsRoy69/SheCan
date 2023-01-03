import React from 'react'
import '../styles/regprof.css';
import formImg from "../images/login-img.png";
import axios from 'axios';
import { useState } from 'react';

const RegProf = ({ setRegModalOpen }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profession, setProfession] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch('http://localhost:5000/auth/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                profession,
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
            setProfession("");
            setPassword("");
            setPhone("");
            setAddress("");
            alert("Registered successfully");
        }
    }

    return (
        <div className='regprof-wrapper'>
            <div className="prof-reg-modal">
                <div className="form-box">
                    <button
                        onClick={() => setRegModalOpen(false)}
                        id='form-close-btn'>
                        x
                    </button>
                    <img src={formImg} alt="" />
                    <div className="form-wrapper">
                        <h1>Register as Professional</h1>
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
                            <select
                                value={profession}
                                onChange={e => setProfession(e.target.value)}
                                className="form-select"
                                name="select-profession"
                                placeholder='Select profession'
                                id=""
                                required>
                                <option value="" disabled defaultValue>Select profession</option>
                                <option value="instructor">Instructor</option>
                                <option value="gynaecologist">Gynaecologist</option>
                                <option value="pharmacist">Pharmacist</option>
                                <option value="professor">Professor</option>
                                <option value="sexeducator">Sex educator</option>
                            </select>
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
                </div>
            </div>
        </div>
    )
}

export default RegProf
