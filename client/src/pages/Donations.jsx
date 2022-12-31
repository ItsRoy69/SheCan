import React from 'react'
import "../styles/donation.css"
import womenEmpowermentClubs from "../data/donateClubs.js"
import { ReactComponent as Donatebanner } from '../assets/donatepage/donatebanner.svg';
import { ReactComponent as Donatelogo } from '../assets/donatepage/shecanlogo.svg';
import Donatemodal from '../components/Donatemodal';

const Donations = () => {

    const [club, setClub] = React.useState(womenEmpowermentClubs[0]);

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

                    <div className='donate_header2'>
                        <p>Clubs you can donate to</p>
                        <hr />
                    </div>

                    <div className="donate_clubsparent">

                        {womenEmpowermentClubs.map(item => (

                            <>
                                <div className="donateclub" data-bs-toggle="modal" data-bs-target={`#one`} onClick={() => {
                                    setClub(item);
                                }} >
                                    <Donatelogo className="donatelogo" />

                                    <div className="donateclub_textdiv">
                                        <p> {item.name} </p>
                                        <p> {item.tagline} </p>
                                    </div>

                                    <p className='donateclub_location'> <span>📍</span> {item.location} </p>
                                </div>



                            </>

                        ))}

                        {club && <Donatemodal club={club} />}

                    </div>
                </div>
            </div>


        </>
    )
}

export default Donations