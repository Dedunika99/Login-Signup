import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from "../Assests/person.png";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Log in");

  return (
    <div className="Container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {/* Username field should be present for both Login and Sign up */}
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Username" />
        </div>

        {/* Conditionally render the email field only for Sign up */}
        {action === "Sign up" && (
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
        )}

        {/* Password field should be present for both Login and Sign up */}
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>

        {/* Show "Lost Password" link only for Log in */}
        {action === "Log in" && (
          <div className="forgot-password">
            Lost Password? <span>Click Here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Log in" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign up" ? "submit gray" : "submit"}
            onClick={() => setAction("Log in")}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
