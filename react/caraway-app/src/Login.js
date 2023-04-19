import React from 'react';
import './Login.css';
import { Link } from "react-router-dom"

function Login() {
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
            <span className="label-input">Username</span>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Type your username"
            />
          </div>
          <div className="input-field">
            <span className="label-input">Password</span>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Type your password"
            />
          </div>
          <div className="checkbox">
            <input className="input-checkbox" type="checkbox" name="remember-me" />
            <label className="label-checkbox">Remember Me</label>
          </div>
          <div className="footer-login">
            <p><a className="forgot-link" href='/home.html'>Forgot Password?</a></p>
          </div>
          <input type="button" value="login" onClick={() => window.location.href='/home'} className="submit-login" />
          <Link to="/login" label="Login">Login</Link>
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

