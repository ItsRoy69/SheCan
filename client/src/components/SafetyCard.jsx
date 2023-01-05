import React from 'react';
import '../styles/safetycard.css';

const SafetyCard = ({item}) => {
  return (
    <div className='container safety-card'>
      <img src={item.src} alt="" />
      <div>
      <h1>{item.title}</h1>
      <p><span style={{color:'#596A8C'}}>Location</span> : {item.location}</p>
      </div>
    </div>
  )
}

export default SafetyCard;
