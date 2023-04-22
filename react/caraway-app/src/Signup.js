import * as React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup">
      <div className="signupForm">
        <p className="form-title">Create Account</p>
        <div className="links-signup">
          <a href="/login">
            <span className="login-link">Login</span>
          </a>
          <span>|</span>
          <a href="/index.html">
            <span className="signup-link">Sign Up</span>
          </a>
        </div>

        <div className="form">
          <div className="input-field">
            <span className="label-input">First Name</span>
            <input className="form-input" type="text" placeholder="First Name" />
          </div>
          <div className="input-field">
            <span className="label-input">Last Name</span>
            <input className="form-input" type="text" placeholder="Last Name" />
          </div>
          <div className="input-field">
            <span className="label-input">Username</span>
            <input className="form-input" type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <span className="label-input">Email</span>
            <input className="form-input" type="text" placeholder="Email" />
          </div>
          <div className="input-field">
            <span className="label-input">Phone Number</span>
            <input
              className="form-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="1234567890"
              pattern="[0-9]{10}"
              inputMode="numeric"
              maxLength="10"
            />
          </div>
          <div className="input-field">
            <span className="label-input">Zip Code</span>
            <input
              className="form-input"
              type="zip"
              id="zipcode"
              name="zipcode"
              placeholder="12345"
              pattern="[0-9]{5}"
              inputMode="numeric"
              maxLength="5"
            />
          </div>
          <div className="input-field">
            <span className="label-input">Student?</span>
            <br />
            <div className="student-input">
              <input className="bubble-input" type="radio" name="student" /> Yes
              <input className="bubble-input" type="radio" name="student" /> No
            </div>
          </div>

          {/* Change to a drop down menu? */}
          <div className="input-field">
            <span className="label-input-finance">Are you eligible for any financial assistance programs?</span>
            <br />
            <input className="bubble-input" type="radio" name="assis" /> Yes
            <input className="bubble-input" type="radio" name="assis" /> No
          </div>
          <input
            type="button"
            value="Create Account"
            onClick={() => {window.location.href='/'}}
            className="submit-signup"
          ></input>
        </div>
      </div>
    </div>
  );
}