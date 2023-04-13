import * as React from "react";
import "./Navbar.css";

export default function Home() {
  return (
    <div className="navlinks">
      <ul class="menu">
          <li><a class="menuItem" href="/">Home</a></li>
          <li><a class="menuItem" href="#">Management Tips</a></li>
          <li><a class="menuItem" href="#">Blog</a></li>
          <li><a class="menuItem" href="#">Meet Therapists</a></li>
          <li><a class="menuItem" href="#">Financial Assistance Programs</a></li>
        </ul>
    </div>
  );
}