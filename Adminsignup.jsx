import React from 'react'
import './Adminsignup.css'
function Adminsignup() {
  return (
    <div>
        <div className='header'>
      <img src='https://rguktn.ac.in/assets_new/images/logo.png' className='logo' alt='hostelimage'/>
      <div className='headerButtons'>
        <button className='signup'>signup</button>
      </div>
      <h1>
            hostel complaint management system
          </h1>
      </div>
      <div className='signup-container'>
            <div className='signup-box'>
                <div className='signup-heading'><h2>admin registration</h2></div>
                
                    <form className='signup-form'>
                        <div className='labels'>
                            <label htmlFor="username">user name</label>
                        </div>
                        <div className='inputf'>
                            <input type="text" id='username' name='username'/>

                        </div>
                    </form>
                
            
            </div>
      </div>

      
    </div>
  )
}

export default Adminsignup
