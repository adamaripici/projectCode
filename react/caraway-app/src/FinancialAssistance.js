import * as React from "react";
import "./FinancialAssistance.css";

let student = require('./images/financial-student.png');

export default function FinancialAssistance() {
  return (
    <div className="FinancialAssistance">
      <h1 className="project-title">Financial Assistance Programs</h1>
      <div className="about-financial">
            <p className="financial-text">Our Financial Assistance Programs are designed to provide students with affordable and accessible medical coverage. We understand that healthcare costs can be a significant financial burden for students, and that is why we offer a student discount program that is tailored to their income. Our aim is to ensure that every student has access to the healthcare they need, regardless of their financial circumstances. With our financial assistance program, students can rest assured that they will receive top-quality medical care at an affordable cost. Explore our website to learn more about our program and how it can benefit you.</p>
            <img className = "financial-student" src={student} alt="student" />
      </div>
      <div className="programs-to-explore">
        <h1 className="project-title">Programs To Explore</h1>
      </div>
    </div>
  );
}