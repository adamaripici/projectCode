import * as React from "react";
import "./FinancialAssistance.css";

let student = require('./images/financial-student.png');
let user1 = require('./images/user1.png');
let user2 = require('./images/user2.png');
let user3 = require('./images/user3.png');
let user4 = require('./images/user4.png');

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
      <div className="past-experiences">
        <h1 className="project-title">Past Experiences</h1>
        <div className="past-div">
          <p className="experience-text">We hope that these stories will provide insight into how these programs can be a valuable resource for those seeking therapy, and inspire others to seek the care they need for themselves. Whether you are a student, a young parent, or a member of a family, we believe that everyone deserves access to high-quality mental health care, regardless of their financial circumstances.</p>
        </div>
        <div className="experiences">
          <div className="row-financial">
            <div className="user">
                <img className = "user1-img" src={user1} alt="user1" />
                  <h3 className="name-review">Lily</h3>
                  <p className="review">"As a student, finances are always a concern, and therapy sessions can be a significant expense. However, with this discount program, I was able to access high-quality therapy services at a reduced cost."</p>
              </div>
              <div className="user">
                  <img className = "user2-img" src={user2} alt="user1" />
                  <h3 className="name-review">Sydney</h3>
                  <p className="review">"The student discount program  was a life-saver. The program was easy to use, affordable, and I was able to connect with a therapist who was skilled and compassionate."</p>
              </div>
              <div className="user">
                  <img className = "user3-img" src={user3} alt="user1" />
                  <h3 className="name-review">Jayla</h3>
                  <p className="review">"The affordability of the program made it accessible to me and the community support was incredibly valuable. My therapist was knowledgeable, supportive, and helped me gain the tools I needed to manage my mental health."</p>
              </div>
              <div className="user">
                  <img className = "user4-img" src={user4} alt="user1" />
                  <h3 className="name-review">Camila</h3>
                  <p className="review">"The therapy discount program for women college students is a fantastic resource for those who are looking for affordable mental health care. This program offers a safe space for women to talk to licensed therapists and access mental health services at a discounted rate."</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}