// Header.jsx

import React from 'react';
import "./header.css";
import hostel from './hostel.png';

export default function Header() {
  return (
    <div>
      <div className='header'>
        <img src='https://rguktn.ac.in/assets_new/images/logo.png' className='logo' alt='hostelimage'/>
        <div className='headerButtons'>
          <span className='logintitle'>LOGIN</span>
          <span className='signuptitle'>SIGN UP</span>
        </div>
      </div>
      <div className="bodyContent">
        <p>HOSTEL <br /> COMPLAINT<br />
        MANAGEMENT <br /> SYSTEM</p>
        
      </div>
      <div className='image'>
        <img className='headerImg' src={hostel} alt='' />
      </div>
     
        
      
    </div>
  );
}
