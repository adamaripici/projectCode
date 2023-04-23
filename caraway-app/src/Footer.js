import * as React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


export default function Footer() {

  return (
    <footer>
      <div className = "NewletterHome">
          <h1 className = "NL-title">Sign up for our newsletter!</h1>
          <div className="input-field">
              <label htmlFor="email"></label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Enter a valid email"
                    />
            </div>
          <button className="NLSubmit-button">
            <Link to="/newsletter">Submit</Link>
          </button>
        </div>
      <div className="container">
        <div className="row">
          <div className="title-footer">
            <h4>About Us</h4>
            <p>Caraway, Inc. provides mental health services for college women.</p>
          </div>
          <div className="title-footer">
            <h4>Contact Us</h4>
            <p>123 Main St, Chicago USA</p>
            <p>Email: caraway@gmail.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="title-footer">
            <h4>Links</h4>
            <a className="links" href="/careers">Careers</a><br />
            <a className="links" href="/faq">FAQ</a><br />
            <a className="links" href="/press">Press</a><br />
          </div>
          <div className="title-footer">
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com/" target="_blank"><BsFacebook className="bs"/></a>
            <a href="https://www.instagram.com/?hl=en" target="_blank"><BsInstagram className="bs"/></a>
            <a href="https://twitter.com/?lang=en" target="_blank"><BsTwitter className="bs"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}