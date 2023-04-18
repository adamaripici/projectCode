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
        <div className="about-financial1">
            <div className="grid">
              <div className="student-discount">
                  <h3>Student Discount</h3>
                  <p>Affordable therapy for students who may be facing financial constraints.</p>
                  <button className="financial-button">Explore Student Discount</button>
              </div>
              <div className="young-parent">
                  <h3>Young Parent Discount</h3>
                  <p>Designed for young student parents access affordable therapy</p>
                  <button className="financial-button">Explore Young Parent Discount</button>
              </div>
              <div className="family-discount">
                  <h3>Family Discount</h3>
                  <p>Affordable therapy for students who may be facing financial constraints.</p>
                  <button className="financial-button">Explore Family Discount</button>
              </div>
              <div className="low-income">
                  <h3>Low Income Discount</h3>
                  <p>Affordable therapy to students for low income students</p>
                  <button className="financial-button">Explore Low Income Discount</button>
              </div>
            </div>
            
        </div>
        
      </div>
    </div>
  );
}