import * as React from "react";
import "./FamilyDiscount.css";
import { Link } from 'react-router-dom';

let familyImg = require('./images/family.png');

export default function FamilyDiscount() {
  return (
    <div className="family-discount">
      <h1 className="discount-title">Family-Program</h1>
      <div className="student-discount-div">
        <div className="div-discount">
            <div className="studentLeft">
                <img className = "student-img" src={familyImg} alt="family-img" />
                <button className="btnContact">
                  <Link to="/ContactUs">Contact Us!</Link>
                </button>
            </div>
            <div className="studentRight">
                <h1 className="discount-text">Families of different sizes and financial situations can see about getting different amounts of financial aid. Mother must qualify as a college student, whether full or part-time. See below to know what you qualify for, and contact us to see about applying your discount to your first visit!</h1>
                <table className="table1">
                    <thead>
                        <tr>
                        <th>Family of 5 (all under 30)</th>
                        <th>$300 off</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>Family of 4 (all under 30)</th>
                        <th>$250 off</th>
                        </tr>
                        <tr>
                        <th>Family of 3 (all under 30)</th>
                           <th>$200 off</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}