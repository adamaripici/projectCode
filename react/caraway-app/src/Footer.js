import * as React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
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
            <a className="links" href="/careers">Press</a><br />
          </div>
          <div className="title-footer">
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}