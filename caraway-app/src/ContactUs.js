import * as React from "react";
import "./ContactUs.css";

import { useState } from 'react';

export default function ContactUs() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(null);
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(null);
    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState(null);

    function handleChange(event) {
        const inputEmail = event.target.value;
        setEmail(inputEmail);

        // Perform email validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(inputEmail)) {
            setError('Invalid email format');
        } else {
            setError(null);
        }
    }

    function handleNameChange(event) {
        const inputName = event.target.value;
        setName(inputName);
    }

    function handleMessageChange(event) {
        const inputMessage = event.target.value;
        setMessage(inputMessage);
    }

    function handleSubjectChange(event) {
        const inputSubject = event.target.value;
        setSubject(inputSubject);
    }
        
    function handleSubmit(event) {
        event.preventDefault();


        if (!name) {
            // There are errors, do not proceed with the submission
            setNameError('Please enter your name');
            alert("Please fill out all the required fields")
            return;
        } else {
            setNameError(null);
        }

        if (!message) {
            setMessageError('Please enter a message');
            alert("Please fill out all the required fields")
            return;
        } else {
            setMessageError(null);
        }

        if (!subject) {
            setSubjectError('Please enter a subject');
            alert("Please fill out all the required fields")
            return;
        } else {
            setSubjectError(null);
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format');
            alert("Please fill out all the required fields")
            return;
        } else {
            setError(null);
        }

        // Do something with the valid input data
        window.location.href='/ContactUs2';
    }


    return (
        <div className="contact-us-page">
            <div classname="title">
                <div className = "contact-us-title">
                    <h1>Contact Us!</h1>
                </div>
            </div>

            <div className="contact-info">
                <div className="left-side">
                    <div className="hours-of-operation">
                        <h3 className="subsection-title">Hours Of Operation:</h3>
                        <h4 className="text1">Mon-Fri: 8am-8pm CST</h4>
                        <h4 className="text1">Saturday: 10am-5pm CST</h4>
                        <h4 className="text1">Sunday: 9am-2pm CST</h4>
                    </div>
                    <div className="call-us">
                        <h3 className="subsection-title">Call Us!</h3>
                        <h4 className="text2">Office Phone: (800) - 434- 1234</h4>
                        <h4 className="text2">Therapist Hotline: (800) - 434- 1272</h4>
                    </div>
                </div>

                <div className="right-side">
                    <div className="send-us-an-email">
                        <h3 className="subsection-title">Send Us An Email:</h3>
                        <div className="form">
                            <div className="input-field">
                                <span className="label-input">Name</span>
                                <input className="form-input" type="text"
                                onChange={handleNameChange}/>
                                {nameError && <p className="error">{nameError}</p>}
                            </div>
                            <div className="input-field">
                                <span className="label-input">Email</span>
                                <input 
                                    className="form-input" 
                                    type="email" 
                                    value={email} 
                                    onChange={handleChange} 
                                    placeholder="Type your email"/>
                                {error && <p className="error">{error}</p>}
                            </div>
                            <div className="input-field">
                                <span className="label-input">Subject</span>
                                <input className="form-input" type="text"
                                onChange={handleSubjectChange}/>
                                {subjectError && <p className="error">{subjectError}</p>}
                            </div>
                            <div className="input-field">
                                <span className="label-input">Message</span>
                                <input className="form-input-message" type="text"
                                onChange={handleMessageChange}/>
                                {messageError && <p className="error">{messageError}</p>}
                            </div>  
                            <input
                                type="button"
                                value="Submit"
                                onClick={handleSubmit} 
                                disabled={!!error}
                                className="submit-message"
                            ></input>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}