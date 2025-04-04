import React, { useState } from "react";
import "./signup.scss";

const RegisterScreen = () => {
  const [image, setImage] = useState(null);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview selected image
    }
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <div className="logo">
          <img src="/logo.png" alt="Lemonpay Logo" className="logo-img" />
          <span className="logo-text">
            <span className="yellow">lemon</span>pay
          </span>
        </div>
        <p className="tagline">Your success is our focus</p>
        <h1 className="title">Join 8 Million Businesses</h1>
        <p className="highlight">Powering Growth with Lemonpay!</p>
      </div>

      {/* Right Section - Registration Form */}
      <div className="right-section">
        <div className="register-box">
          <h2>Welcome Sign Up System</h2>
          <p className="description">
            Your gateway to seamless transactions and easy payments.
          </p>

          {/* Image Upload */}
          <div className="image-upload">
            {image ? (
              <img src={image} alt="Profile Preview" className="profile-pic" />
            ) : (
              <div className="placeholder">Profile Image</div>
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

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

          {/* Confirm Password Input */}
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Min 8 characters" />
          </div>

          {/* Remember Me and Sign In */}
          <div className="actions">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="signin">Sign In</a>
          </div>

          {/* Sign Up Button */}
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
