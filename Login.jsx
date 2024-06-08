import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div>
        <div className='header'>

        <img src="https://rguktn.ac.in/assets_new/images/logo.png" alt="Logo" className="logo" />
        <button className="home-button">HOME</button>

        </div>
    
    <div className="login-container">
      
      <h1>HOSTEL COMPLAINT MANAGEMENT SYSTEM</h1>
      <div className="login-box">
        <form>
          <label htmlFor="role">Role</label>
          <select id="role" name="role">
            <option value="student">Student</option>
            {/* Add more options as needed */}
          </select>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit" className="login-button">LOGIN</button>
        </form>
        <p className="signup-text">Don’t have an account? <a href="/signup">SignUP</a></p>
      </div>
    </div>
    </div>
  );
};
