import React from "react";
import "../styles/safety.css";
import safetyImg from '../images/safetyBanner.png'
import callImg from '../images/call.png';
import {BsSearch} from 'react-icons/bs';
import helpLines from "../data/helplineNos";
import safetyEvents from "../data/safetyEvents";
import SafetyCard from "../components/SafetyCard";
import safetyCourses from "../data/safetyCourses";

const Donations = () => {


    const handleSearch =(e)=>{
        e.preventDefault();
        alert("Search clicked");
    }

  return (
    <>
      <div className="safety">
        <div className="container safety_mainparent">
          <div className="safety_subparent">
            <div className="safety_header">
              <div className="safety_headertextdiv">
                <h1>"Making Your Safety a Priority." </h1>
                <p>
                Let’s make you independent and a bit scary to be messed with !{" "}
                </p>
              </div>

              <img src={safetyImg} className="donate_banner" />
            </div>
            <div className="call-section">
                <img src={callImg} alt="" />
                <h1>Call now</h1>
                <p>Check out the list of helpline numbers available</p>


                <div className="search-section">
                    <form onSubmit={handleSearch}>
                        <div className="input-box">
                        <button style={{
                         background:'transparent',
                         color:"#F78BD1",
                         border:'2px solid #F78BD1', 
                         borderTopLeftRadius:'0.5rem',
                         borderBottomLeftRadius:'0.5rem',
                         borderRight:'none'}}>
                            <BsSearch/>
                        </button>
                        <input 
                        type="text" 
                        // className="form-control"
                        placeholder="WEST BENGAL, INDIA"
                         />
                        <button>Search</button>
                        </div>
                    </form>
                </div>

                <div className="helpline-section">
                    <p>Based on your location, here are some helpline numbers</p>
                    {
                        helpLines?.length > 0 ?
                        helpLines?.map((help,index)=>(
                            <p key={index}>
                                <span>
                                    {help.number} -
                                </span>
                                {help.reason}
                            </p>
                        ))
                     :
                    "NA"
                }
                    <p style={{textDecoration:'underline'}}>Load more</p>
                </div>
            </div>
                {/* events section */}
                <div className="event-section">
                    <h1>
                         Check Upcoming Events
                    </h1>
                    <p>
                    Meet our community and get to know real-life incidents, defense techniques, and much more.
                    </p>
                    <div className="event-flexbox">
                        {
                            safetyEvents.length>0 ? 
                            safetyEvents.map((item,index)=>(
                                <>
                                <SafetyCard 
                                key={index}
                                item={item}/>
                                </>
                            ))
                            :
                            ""
                        }
                    </div>
                    
                </div>

                {/* courses section */}
                <div className="courses-section">
                    <h1>
                         Some Popular Courses
                    </h1>
                    <p>
                      Enroll in our quality courses
                    </p>
                    <div className="courses-flexbox">
                        {
                            safetyCourses.length>0 ? 
                            safetyCourses.map((item,index)=>(
                                <>
                                <SafetyCard 
                                key={index}
                                item={item}/>
                                </>
                            ))
                            :
                            ""
                        }
                    </div>
                    
                </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Donations;
