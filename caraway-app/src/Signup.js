import * as React from "react";
import "./Signup.css";
import { useState } from 'react';
// import { setMaxListeners } from "events";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [lname, setLname] = useState('');
  const [lnameError, setLnameError] = useState(null);
  const [username, setUsername] = useState('');
  const [errorUser, setErrorUser] = useState(null);
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(null);
  const [zip, setZip] = useState('');
  const [errorZip, setErrorZip] = useState(null);
  const [selected, setSelected] = useState(false);
  const [errorSelected, setErrorSelected] = useState(null);
  const [selected2, setSelected2] = useState(false);
  const [errorSelected2, setErrorSelected2] = useState(null);
  
  function handleChange(event) {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    // Perform email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(inputEmail)) {
      setError('Invalid email format');
    } else {
      setError(null);
    }
  }

  function handleBubbleChange(event) {
    setSelected(event.target.checked);
  }
  function handleBubbleChange2(event) {
    setSelected2(event.target.checked);
  }

  function handleNameChange(event) {
    const inputName = event.target.value;
    setName(inputName);
  }

  function handleLnameChange(event) {
    const inputLname = event.target.value;
    setLname(inputLname);
  }

  function handleUserChange(event) {
    const inputUser = event.target.value;
    setUsername(inputUser);
  }

  function handlePhoneChange(event) {
    const inputPhone = event.target.value;
    setPhone(inputPhone);
  }

  function handleZipChange(event) {
    const inputZip = event.target.value;
    setZip(inputZip);
  }
  
  function handleSubmit(event) {
    event.preventDefault();


    if (!name) {
      // There are errors, do not proceed with the submission
      setNameError('Please enter your name');
      alert("Please fill out all the required fields")
      return;
    } else {
      setNameError(null);
    }

    if (!lname) {
      setLnameError('Please enter your last name');
      alert("Please fill out all the required fields")
      return;
    } else {
      setLnameError(null);
    }

    if (!username) {
      setErrorUser('Please enter a username');
      alert("Please fill out all the required fields")
      return;
    } else {
      setErrorUser(null);
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      alert("Please fill out all the required fields")
      return;
    } else {
      setError(null);
    }

    if (!phone) {
      setErrorPhone('Please enter a phone number');
      alert("Please fill out all the required fields")
      return;
    } else {
      setErrorPhone(null);
    }

    if (!zip) {
      setErrorZip('Please enter a zip code');
      alert("Please fill out all the required fields")
      return;
    } else {
      setErrorZip(null);
    }

    if (!selected) {
      setErrorSelected('Please select an option');
      alert("Please fill out all the required fields")
      return;
    } else {
      setErrorSelected(null);
    }
    
    if (!selected2) {
      setErrorSelected2('Please select an option');
      alert("Please fill out all the required fields")
      return;
    } else {
      setErrorSelected2(null);
    }

    // Do something with the valid input data
    window.location.href = '/AccountConfirmation';
  }
  return (
    <div className="signup">
      <div className="signupForm">
        <p className="form-title">Create Account</p>
        <div className="links-signup">
          <a href="/login">
            <span className="login-link">Login  </span>
          </a>
          <span> | </span>
          <a href="/signup">
            <span className="signup-link">  Sign Up</span>
          </a>
        </div>

        <div className="form">
          <div className="input-field">
            <span className="label-input">First Name</span>
            <input className="form-input" type="text" placeholder="First Name" 
            onChange={handleNameChange}/>
            {nameError && <p className="error">{nameError}</p>}
          </div>
          <div className="input-field">
            <span className="label-input">Last Name</span>
            <input className="form-input" type="text" placeholder="Last Name" 
            onChange={handleLnameChange}/>
            {lnameError && <p className="error">{lnameError}</p>}
          </div>
          <div className="input-field">
            <span className="label-input">Username</span>
            <input className="form-input" type="text" placeholder="Username" 
            onChange={handleUserChange}/>
            {errorUser && <p className="error">{errorUser}</p>}
          </div>
          <div className="input-field">
            <span className="label-input">Email</span>
              <input 
                className="form-input" 
                type="email" 
                value={email} 
                onChange={handleChange} 
                placeholder="Type your email"/>
            {error && <p className="error">{error}</p>}
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
              onChange={handlePhoneChange}
              onKeyDown={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            {errorPhone && <div className="error">{errorPhone}</div>}
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
              onChange={handleZipChange}
              onKeyDown={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            {errorZip && <div className="error">{errorZip}</div>}
          </div>
          <div className="input-field">
            <span className="label-input">Student?</span>
            <br />
            <div className="student-input">
              <input  onChange={handleBubbleChange} className="bubble-input" type="radio" name="student" /> Yes
              <input  onChange={handleBubbleChange} className="bubble-input" type="radio" name="student" /> No
              {errorSelected && <div className="error">{errorSelected}</div>}
            </div>
          </div>

          {/* Change to a drop down menu? */}
          <div className="input-field">
            <span className="label-input-finance">Are you eligible for any financial assistance programs?</span>
            <br />
            <input onChange={handleBubbleChange2} className="bubble-input" type="radio" name="assis" /> Yes
            <input  onChange={handleBubbleChange2} className="bubble-input" type="radio" name="assis" /> No
            {errorSelected2 && <div className="error">{errorSelected2}</div>}
          </div>
          <button type="submit" onClick={handleSubmit} disabled={!!error} className="submit-signup">Create Account</button>
        </div>
      </div>
    </div>
  );
}