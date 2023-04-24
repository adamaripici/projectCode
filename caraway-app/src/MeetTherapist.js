import * as React from "react";
import "./MeetTherapist.css";
import { Link } from 'react-router-dom';


let therapist1 = require('./images/user1.jpeg');
let therapist2 = require('./images/user3.jpeg');
let therapist3 = require('./images/user2.jpeg');


export default function meetTherapist() {
  return (
    <div className="MeetTherapist">
      <h1 className="project-title">Meet our Team Members!</h1>
      <div className="about-therapist">
            <img className = "therapist-img" src={therapist1} alt="student" />
            <div className="details-therapist">
              <h3 className="therapist-name">Lucy Williams, LCPC </h3>
              <p className="financial-text">Hi, my name is Lucy. My nickname is Lu. I help woman who long to experience true confidence and clarity. I believe that women deserve to be loud, messy, sensitive, angry - and loved for exactly who they are. As a friend and experienced theerapist I know how to slow down your hectic life. explore your dreams and thoughts through mindfulness, play and more and develop new ways of coping creativity. </p>
             <button className="Session-button" type="submit" onClick={()=> window.location.href='/bookSession'} >
            <Link to="/bookSession">Book Session</Link>
          </button>    
            </div>
      </div>
      <div className="programs-to-explore">
        <h1 className="space-bet"></h1>
      </div>
      <div className="about-therapist">
            <div className="details-therapist">
              <h3 className="therapist-name">Sarah Diaz, LCPC </h3>
              <p className="financial-text">Hi, my name is Sarah. My nickname is Sary. I help woman who long to experience true confidence and clarity. I believe that women deserve to be loud, messy, sensitive, angry - and loved for exactly who they are. As a friend and experienced theerapist I know how to slow down your hectic life. explore your dreams and thoughts through mindfulness, play and more and develop new ways of coping creativity. </p>
              <button className="Session-button" type="submit" onClick={()=> window.location.href='/bookSession'} >
            <Link to="/bookSession">Book Session</Link>
          </button>    
            </div>
            <img className = "therapist-img" src={therapist2} alt="student" />
      </div>
      <div className="programs-to-explore">
        <h1 className="space-bet"></h1>
      </div>
      <div className="about-therapist">
            <img className = "therapist-img" src={therapist3} alt="student" />
            <div className="details-therapist">
              <h3 className="therapist-name">Farah Khan, LCPC </h3>
              <p className="financial-text">Hi, my name is Farah. My nickname is Fari. I help woman who long to experience true confidence and clarity. I believe that women deserve to be loud, messy, sensitive, angry - and loved for exactly who they are. As a friend and experienced theerapist I know how to slow down your hectic life. explore your dreams and thoughts through mindfulness, play and more and develop new ways of coping creativity. </p>
              <button className="Session-button" type="submit" onClick={()=> window.location.href='/bookSession'} >
            <Link to="/bookSession">Book Session</Link>
          </button>    
            </div>            
      </div>
    
    </div>
  );
}