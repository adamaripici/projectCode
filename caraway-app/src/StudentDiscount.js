import * as React from "react";
import "./StudentDiscount.css";
import { Link } from 'react-router-dom';

let studentProgram = require('./images/studentProgram.png');

export default function StudentDiscount() {
  return (
    <div className="student-discount">
      <h1 className="discount-title">Student-Program</h1>
      <div className="student-discount-div">
        <div className="div-discount">
            <div className="studentLeft">
                <img className = "student-img" src={studentProgram} alt="student-img" />
                <button className="btnContact">
                  <Link to="/ContactUs">Contact Us!</Link>
                </button>
            </div>
            <div className="studentRight">
                <h1 className="discount-text">Students of certain filing status and age can get different amounts of financial help based on their eligibility! See below to know what you qualify for, and contact us to see about applying your discount to your first visit!</h1>
                <table className="table1">
                    <thead>
                        <tr>
                        <th>Independent Student</th>
                        <th>$200 off</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>Dependent Student</th>
                        <th>$100 off</th>
                        </tr>
                        <tr>
                        <th>Seniors</th>
                           <th>$50 off additionally</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}