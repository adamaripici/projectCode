import * as React from "react";
import "./LowIncome.css";

let studentProgram = require('./images/low-income.png');

export default function StudentDiscount() {
  return (
    <div className="student-discount">
      <h1 className="discount-title">Low Income-Program</h1>
      <div className="student-discount-div">
        <div className="div-discount">
            <div className="studentLeft">
                <img className = "student-img" src={studentProgram} alt="family-img" />
                <button className="btnContact">Contact Us!</button>
            </div>
            <div className="studentRight">
                <h1 className="discount-text">Those with less than average household income, can apply for financial aid through Caraway! Applicant must be a student, full time or part time. See below to know what you qualify for, and contact us to see about applying your discount to your first visit!</h1>
                <table className="table1">
                    <thead>
                        <tr>
                        <th>$40,000 or more</th>
                        <th>$100 off</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>$40,000 or more)</th>
                        <th>$200 off</th>
                        </tr>
                        <tr>
                        <th>$20,000-$30,000</th>
                           <th>$300 off</th>
                        </tr>
                        <tr>
                        <th>$10,000-$20,000</th>
                        <th>$350 off</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}