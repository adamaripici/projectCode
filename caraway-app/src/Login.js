import React from 'react';
import { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);


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

  function handlePasswordChange(event) {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  }

  
  function handleSubmit(event) {
    event.preventDefault();

  // Check if email is valid
  const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }
     if (!password) {
      setPasswordError('Please enter a password');
      return;
    } else {
      setPasswordError(null);
    }

    // Do something with the valid input data
    window.location.href='/';
  // If email is valid, do something with the valid input data
  }

  return (
    <div className="login-page">
      <div className="loginForm">
        <p className="form-title">Login</p>
        <div className="links-signup">
          <a href="/login"><span className="login-link">Login</span></a>
          <span>|</span>
          <a href="/signup"><span className="signup-link">Sign Up</span></a>
        </div>
        <div className="form">
          <div className="input-field">
            <span className="label-input">Email</span>
              <input 
                className="form-input-login" 
                type="email" 
                value={email} 
                onChange={handleChange} 
                placeholder="Type your email"/>
            {error && <p className="error">{error}</p>}
          </div>
          <div className="input-field">
            <span className="label-input">Password</span>
            <input
              className="form-input-login"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Type your password"
            />
              {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div className="checkbox">
            <input className="input-checkbox" type="checkbox" name="remember-me" />
            <label className="label-checkbox">Remember Me</label>
          </div>
          <div className="footer-login">
            <p><a className="forgot-link" href='/'>Forgot Password?</a></p>
          </div>
          <button type="submit" onClick={handleSubmit} disabled={!!error} className="submit-login">Login</button>
          {/* <input type="button" value="Login" onClick={() => window.location.href='/'} className="submit-login" /> */}
          {/* <Link to="/login" label="Login">Login</Link> */}
          <div className="or-signup">
            <span>Or Login with</span><br />
            <a href="https://www.google.com/">
              <img
                className="google-logo"
                href="https://www.google.com/"
                width="40px"
                style={{ marginTop: '7px', marginRight: '8px' }}
                alt="Google sign-in"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
