import * as React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
// import { TextField } from "@mui/material";

let HomeImage = require('./images/homeCaraway.jpg');
let userIntro1 = require('./images/userIntro1.jpg');
let userIntro2 = require('./images/userIntro2.jpg');

export default function Home() {
  return (
    <div className="home">
      <img className = "home-image" src={HomeImage} alt="HomeImage" />
        <div className="HomeIntro">
          <h1 className="AboutCaraway">About Caraway...</h1>
          <p className="AboutCaraway-text">Many female students don’t have the resources they need to handle their stress through access to therapists. Caraway provides immediate access to these professionals through their app and help with getting virtual appointments.</p>
        </div>

        
        <div className = "userHome-intro">
          <div className = "user-pic">
            <h1 className = "userHome-name">Learn about Sara!</h1>
            <img className = "userHome-image" src={userIntro1} alt="User 1" />
          </div>          
          <p className = "userHome-text">Sara is a second-year Computer Science foreign student and is also working part-time as a TA. 
          She struggled to balance her school and personal life while having to work on the side. Caraway helped her find a 
          therapist that could work on her schedule, and give her tips!</p> 
        </div>

        <div className = "userHome-intro">         
          <p className = "userHome-text">Jaleesa is a junior majoring in Chemical Engineering. During the weekends, she works part time 
          as barista at her local coffee shop. In her free time she likes to explore the city with her friends and catch up on her 
          favorite tv series. As a full time student, balancing her social life, work and grades is frustrating.  After using Caraway, 
          she was able to find resources to help her learn how to manage her responsibilities and still have time for herself.</p> 
          <div className = "user-pic">
            <h1 className = "userHome-name">Learn about Jaleesa!</h1>
            <img className = "userHome-image" src={userIntro2} alt="User 1" />
          </div> 
        </div>

        <div className = "NewletterHome">
          <h1 className = "NL-title">Sign up for our newsletter!</h1>
          
          <button className="NLSubmit-button">
            <Link to="/newsletter">Submit</Link>
          </button>
        </div>
    </div>
  );
}