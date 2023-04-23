import * as React from "react";
import "./Faq.css";

let faq = require('./images/faq.png');

export default function Faq() {
  return (
    <div className="faq">
        <h1 className = "faq-title">Frequently Asked Questions</h1>
        <img className = "faq-img" src={faq} alt="faq" />
        <div className="all-questions-div">
            <div className="question-div"> 
                <h2 className="question">Q: How can I schedule or cancel an appointment?</h2>
                <p className="answer">If you need to schedule an appointment, you can either call, email, or use the online booking system. You should provide your name, contact information, and a brief description of the reason for your appointment. You may also need to provide some additional details, such as your availability or insurance information.
                Remember to always be polite and professional when scheduling or canceling an appointment. By doing so, you'll help ensure that the process is as smooth and hassle-free as possible for everyone involved.
                </p>
                <p className="answer">Remember to always be polite and professional when scheduling or canceling an appointment. By doing so, you'll help ensure that the process is as smooth and hassle-free as possible for everyone involved.</p>
            </div>
            <div className="question-div"> 
                <h2 className="question">Q: How long does it take to receive a discount information?</h2>
                <p className="answer">In most cases, you should receive your discount information 5-7 business days upon completion of the registration process. Once you've signed up for the website, you should be able to log in and access your discount code or link. This will allow you to schedule your therapy sessions at a reduced rate.</p>
            </div>
            <div className="question-div"> 
                <h2 className="question">Q: How can i post on the blog page?</h2>
                <p className="answer">If you have been given permission to post on a blog page, there are a few steps you can take to create and publish a blog post:</p>
                <p className="answer">1. Log in to Caraway: Navigate to the platform that you've been given access to and log-in using your username and password. </p>
                <p className="answer">2. Create a new post: Once you've logged in, locate the option to create a new post. This is typically found in the dashboard or main menu of the blogging platform. Click on "Create a New Post" or a similar option to get started.</p>
            </div>
        </div>
    </div>
  );
}
