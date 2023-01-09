import React from 'react';
import { useState } from 'react';
import '../styles/professionals.css';
import axios from 'axios';
import { useEffect } from 'react';
import profCardImg from '../images/doc-card.jpg';

const url = "https://shecan-production.up.railway.app";

const Professionals = () => {

    const [professionalsArr, setProfessionalsArr] = useState([]);

    // const handleSelection = async(e)=>{
    //     e.preventDefault();
    //     setProfessionalsArr([]);
    //     // replace `` with url
    //     const res = await axios.get(`http://localhost:8000/professional/get-professional-by-profession/${e.target.value}`);
    //    if(res.status === 200){
    //         setProfessionalsArr(res.data.Professionals);
    //         // console.log(professionalsArr);
    //    }else{
    //        console.log("Error from server");
    //    }
    // }

    // fetch instructors
    const fetchInstructors = async () => {
        try {
            const res = await axios.get("http://localhost:8000/professional/get-professional-by-profession/instructor");
            if (res.status === 200) {
                setProfessionalsArr(res.data.Professionals);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setProfessionalsArr([]);
        fetchInstructors();
    }, []);

    return (
        <div className='professionals-wrapper'>
            <h1>Get to know about the Professionals here</h1>
            <p>Below is the list of well renowned instructors who have joined us</p>
            <div className="professional-container">
                {/* <select
                onChange={handleSelection} 
                className="form-select">
                    <option value="" disabled selected>Choose profession</option>
                    <option value="instructor">Instructor</option>
                    <option value="pharmacist">Pharmacist</option>
                    <option value="gynaecologist">Gynaecologist</option>
                </select> */}
                <div className="professionals-flexbox">
                    {
                        professionalsArr?.length > 0 ?
                            professionalsArr.map((item, index) => (
                                <>
                                    <div
                                        className="professional-card"
                                        key={index}>
                                        <img src={profCardImg} alt="card photo" />
                                        <div className="details-container">
                                            <p className="name"><span>Name: </span>{item.name}</p>
                                            <p className="ph-no"><span>Phone: </span>{item.phone}</p>
                                            <p className="address"><span>Address: </span>{item.address}</p>
                                        </div>
                                    </div>
                                </>
                            ))
                            :
                            <>
                                <p className='nothing-to-show'>No professionals to show</p>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Professionals;
