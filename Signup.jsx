import React from 'react'
import './signup.css'

function Signup() {
  return (
    <div>
      <div className='header'>
      <img src='https://rguktn.ac.in/assets_new/images/logo.png' className='logo' alt='hostelimage'/>
      <div className='headerButtons'>
        <button className='home'>HOME</button>
      </div>
      <h1>
            hostel complaint management system
          </h1>
      </div>
      
      <div className='role'>
        <h2>Registration role</h2>
      </div>

      <div className='round'>
        
          <img className='adminrole' src='https://cdn-icons-png.flaticon.com/128/3790/3790091.png' alt=''/>
          <img className='wardenrole' src="https://lh4.googleusercontent.com/proxy/fyFODCoSNo9x5W3lvx3bmdXgSz66riQZwrvyATQM3vdYvmdGOgl58tzjQtE8otPaqUWLkMFWcoVklZHebLghHg3PP5Y" alt="" />
          <img className='studentrole' src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" alt="" />
      </div>
      <div className='roletext'>
          <button>admin</button>
          <button>warden</button>
          <button>student</button>
      </div>
    </div>
  )
}

export default Signup
