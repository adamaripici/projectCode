import * as React from "react";
import "./ContactUs.css";

export default function ContactUs() {
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
                                <input className="form-input" type="text"/>
                            </div>
                            <div className="input-field">
                                <span className="label-input">Email</span>
                                <input className="form-input" type="text"/>
                            </div>
                            <div className="input-field">
                                <span className="label-input">Subject</span>
                                <input className="form-input" type="text"/>
                            </div>
                            <div className="input-field">
                                <span className="label-input">Message</span>
                                <input className="form-input-message" type="text"/>
                            </div>  
                            <input
                                type="button"
                                value="Submit"
                                onClick={() => {window.location.href='/ContactUs2'}}     //fix this
                                className="submit-message"
                            ></input>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}