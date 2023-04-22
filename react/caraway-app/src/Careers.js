import * as React from "react";
import "./Careers.css";

let CareersImage = require('./images/careers-home.jpg');

export default function Careers() {
  return (
    <div className="careers">
      <img className = "careers-image" src={CareersImage} alt="CareersImage"/>

      <div className="CareersIntro">
            <h1 className="Careers-title">Careers</h1>
            <p className="Careers-text">We'd love to have you as a part of the team! Unfortunately, 
            Caraway is not hiring at the moment. Check back in August, 
            as we'll have more roles available then!
            </p>
      </div>
    </div>
  );
}
