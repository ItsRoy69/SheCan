import React from 'react';
import { useState } from 'react';
import '../styles/editprofile.css';

const EditProfile = ({setEditProfileOpen}) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleEditFormSubmit = (e)=>{
        e.preventDefault();
        alert("Form submitted");
          // setName("");setPassword("");setPhone("");setAddress("");
        setEditProfileOpen(false);
    }

  return (
    <div className='edit-profile-wrapper'>
        <div className="edit-profile-modal">
                <div className="form-box">
                    <button
                        onClick={() => setEditProfileOpen(false)}
                        id='form-close-btn'>
                        x
                    </button>
                    <div className="form-wrapper">
                        <h1>Edit profile</h1>
                        <form onSubmit={handleEditFormSubmit}>
                            <input
                                className="form-control"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Enter name"
                                required />                           
                            <input
                                className="form-control"
                                type="number"
                                minLength={10}
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="Enter new phone no"
                                required />
                            <input
                                className="form-control"
                                type="text"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                placeholder="Enter new address"
                                required />
                            <input
                                className="form-control"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter new password"
                                required />
                            <button
                                type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default EditProfile;
