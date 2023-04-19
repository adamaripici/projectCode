import * as React from "react";
import { useState } from 'react';
import "./Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';


let logo = require('./images/logo.png');


export default function NavBar() {
 const [showMenu, setShowMenu] = useState(false);

 function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="menu-bar">
      <div className="logo-div">
      
      <ul className={`menu ${showMenu ? "showMenu" : ""}`}>
          <li><a className="menuItem" href="/">Home</a></li>
          <li><a className="menuItem" href="/management-tips">Management Tips</a></li>
          <li><a className="menuItem" href="/blogs">Blog</a></li>
          <li><a className="menuItem" href="/meet-therapists">Meet Therapists</a></li>
          <li><a className="menuItem" href="/financial-assistance">Financial Assistance Programs</a></li>
      </ul>

      <GiHamburgerMenu className="hamburger" onClick={toggleMenu}/>
      {/* <button className="hamburger" onClick={toggleMenu}>
        <i className="menuIcon material-icons"><GiHamburgerMenu onClick={toggleMenu}/></i>
        <i className="closeIcon material-icons">close</i>
      </button> */}
          <div className="logo-title">
            <a href="/">
              <img className="logo-img" src={logo}/>
            </a>
          </div>
          <button className="login"  onClick={() => window.location.href='/login'}>Login</button>
          <button className="register-btn"  onClick={() => window.location.href='/signup'}>Register</button>
      </div>
    </div>
  );
}