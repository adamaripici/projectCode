import * as React from "react";
import "./Press.css";
import { Link } from 'react-router-dom';

let press = require('./images/press.png');

export default function Press() {
  return (
    <div className="press-div">
        <img className = "press-img" src={press} alt="press"/>
        <h1 className = "press-title">Press Appearances</h1>
        <div className="about-press">
            <div className="left-section">
              <h2 className="name-press">Interviews and Articles</h2>
              <a className="link-txt" href="https://www.prnewswire.com/news-releases/caraway-launches-virtual-healthcare-services-for-women-at-colleges-across-the-united-states-301673112.html" target="_blank">Women’s + Healthcare in Cision Article</a>
            </div>
            <div className="right-section">
              <h2 className="name-press">Write About Us</h2>
              <h4 className="write-txt">Reach out to inquire about interviews!</h4>
              <button className="btn-Contact">
                <Link to="/ContactUs">Contact Us!</Link>
              </button>
            </div>
        </div>
    </div>
  );
}
