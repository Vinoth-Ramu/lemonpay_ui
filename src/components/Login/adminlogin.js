import React from "react";
import "./adminlogin.scss"; // Importing the CSS file
import Logo from "../../widgets/images/lemonpay 4.png"




const AdminLogin = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <div className="logo">
          <img src={Logo} alt="Lemonpay Logo" className="logo-img" />
          {/* <span className="logo-text">
            <span className="yellow">lemon</span>pay
          </span>
          <p className="tagline">Your success is our focus</p> */}
        </div>
      
        <h1 className="title">Join 8 Million Businesses</h1>
        <p className="highlight">Powering Growth with Lemonpay!</p>
      </div>

      {/* Right Section - Login Form */}
      <div className="right-section">
        <div className="login-box">
          <h2>Welcome Login System</h2>
          <p className="description">
            Your gateway to seamless transactions and easy payments.
          </p>

          {/* Email Input */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="mahadev@lemonpay.tech" />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Min 8 characters" />
          </div>

          {/* Remember Me and Sign Up */}
          <div className="actions">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="signup">Sign Up</a>
          </div>

          {/* Sign In Button */}
          <button className="signin-btn">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
