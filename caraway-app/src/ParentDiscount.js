import * as React from "react";
import "./ParentDiscount.css";
import { Link } from 'react-router-dom';

let parent = require('./images/parent.png');
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
export default function ParentDiscount() {
  return (
    <div className="parent-discount">
      <h1 className="discount-title">Young Parent-Program</h1>
      <div className="student-discount-div">
        <div className="div-discount">
            <div className="studentLeft">
                <img className = "student-img" src={parent} alt="family-img" />
                <button className="btnContact" onClick={scrollToTop}>
                  <Link to="/ContactUs">Contact Us!</Link>
                </button>
            </div>
            <div className="studentRight">
                <h1 className="discount-text">Parents whether, single or together, are able to also apply for financial aid. The parent must be a student whether full time or part time. See below to know what you qualify for, and contact us to see about applying your discount to your first visit!</h1>
                <table className="table1">
                    <thead>
                        <tr>
                        <th>Parent/Full-Time Student</th>
                        <th>$200 off</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>Parent/Part-Time Student</th>
                        <th>$100 off</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}