import React from 'react'
import "../styles/donation.css"
import womenEmpowermentClubs from "../data/donateClubs.js"
import { ReactComponent as Donatebanner } from '../assets/donatepage/donatebanner.svg';
import { ReactComponent as Donatelogo } from '../assets/donatepage/shecanlogo.svg';
import Donatemodal from '../components/Donatemodal';

const Donations = () => {
    return (
        <>
            <div className="container donate_mainparent">
                <div className="donate_subparent">

                    <div className="donate_header">
                        <div className='donate_headertextdiv'>
                            <h1>"No one has ever become poor by giving." </h1>
                            <p>Welcome to the donations page. Whatever you donate make goes straight into the club's fund. </p>
                        </div>

                        <Donatebanner className="donate_banner" />
                    </div>

                    <div className="donate_clubsparent">

                        {womenEmpowermentClubs.map(club => (

                            <>
                                <div className="donateclub" data-bs-toggle="modal" data-bs-target={`#${club.slug}`}>
                                    <Donatelogo className="donatelogo" />

                                    <div className="donateclub_textdiv">
                                        <p> {club.name} </p>
                                        <p> {club.tagline} </p>
                                    </div>

                                    <p className='donateclub_location'> <span>📍</span> {club.location} </p>
                                </div>

                                <Donatemodal club={club} />

                            </>

                        ))}

                    </div>
                </div>
            </div>


        </>
    )
}

export default Donations