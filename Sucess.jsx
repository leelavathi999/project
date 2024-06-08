import React from 'react'
import './sucess.css'
import image from './image 1.png'
export default function Sucess() {
  return (
    <div>
       <div className='header'>
      <img src='https://rguktn.ac.in/assets_new/images/logo.png' className='logo' alt='hostelimage'/>
      <div className='headerButtons'>
        <button className='login'>login</button>
      </div>
      <h1>
            hostel complaint management system
          </h1>
      </div>

      <div className='content'>
            <div className='contenttext'>
            You Are Registered <br/>Successfully
            </div>
            <div className='contentimage'>
                <img src={image} alt="" />
            </div>
      </div>
      <div>
        <p>"Your voice matters—submit your hostel complaints."</p>
      </div>
    </div>
  )
}
