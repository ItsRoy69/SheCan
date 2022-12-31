import React from 'react'
import "../styles/footer.css"
function Footer() {
  return (
    <div className='footer-bod'>
       <p className='p1' style={{color:"#fff"}}>Stay In Touch</p>
       <p className='p2' style={{color:"#A77EA7"}}>Get Our Updates</p>
       <div className="foot-in">
        <input type="text" placeholder='Your email address' />
        <button className='footbtn'>Sign Up </button>
       </div>
       <div className="foot-head">
        <div className='dl'></div>
        <p>SheCan</p>
        <div className='dl'></div>
       </div>
       <div className="foot-btm">
            <p>About</p>
            <p>Services</p>
            <p>Donate</p>
            <p>FAQs</p>
            <p>My Account</p>
            <p>Join Us</p>
        </div>
    </div>
  )
}

export default Footer