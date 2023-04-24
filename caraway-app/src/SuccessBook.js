import * as React from "react";
import "./SuccessBook.css";
import { Link } from 'react-router-dom';

export default function SuccessBook() {

    
  return (
  
    <div className="top-div">
      <div className="sessionForm">
        <p className="form-title">Thank you for booking a session!</p>
        <div className="About-session">
            <p  className="ther-title" >Dr. Sara Diaz</p>
           <div className="details">
            <p className="details1">Time: 4pm CST</p>
            </div> 
            <div className="details">
            <p className="details1" >Location: Virtual</p>
            </div> 
            <p>Confirmation email has been sent to you!</p>
        </div>

        <button className="ssn-button" type="submit" onClick={()=> window.location.href='/'} >
            <Link to="/">Done</Link>
          </button> 
        </div>
        </div>
  );
}