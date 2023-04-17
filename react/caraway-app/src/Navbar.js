import * as React from "react";
import { useState } from 'react';
import "./Navbar.css";



export default function NavBar() {
 const [showMenu, setShowMenu] = useState(false);

 function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="menu-bar">
      <ul className={`menu ${showMenu ? "showMenu" : ""}`}>
          <li><a className="menuItem" href="/">Home</a></li>
          <li><a className="menuItem" href="#">Management Tips</a></li>
          <li><a className="menuItem" href="#">Blog</a></li>
          <li><a className="menuItem" href="#">Meet Therapists</a></li>
          <li><a className="menuItem" href="#">Financial Assistance Programs</a></li>
        </ul>
        <button className="hamburger" onClick={toggleMenu}>
        <i className="menuIcon material-icons">menu</i>
        <i className="closeIcon material-icons">close</i>
        <li className="explore">Explore</li>
      </button>
      <div className="logo-div">
        <button className="logo">
          <li className="Caraway"><a className="logoItem" href="/">Caraway</a></li>
          <li className="quote"><a className="logoItem" href="#">Help us help you</a></li>
        </button>
        <div className="login-button">
            <button className="login"  onClick={() => window.location.href='/login'}>Login</button>
          </div>
      </div>
    </div>
  );
}