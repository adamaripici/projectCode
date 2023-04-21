import * as React from "react";
import "./MentalHealth.css";
import { Link } from 'react-router-dom';

export default function MentalHealth() {
    return (
        <div className="mental-health-page">
            <div classname="top">
            <div className = "front-image">
                <img src="mentalHealth-Hand.png" alt = "comforting hand"/>
            </div>
            </div>

            <div className = "mental-health-title">
            <h1>Mental Health</h1>
            </div>

            <div className = "all-stories">
            <div className = "stories">
                <div className = "story1">
                <a href="https://www.mentalhealth.gov/basics/what-is-mental-health" target="_blank">
                    <img className = "storyImage" src="mentalHealth-mentalHealth.png" alt="girl stressed" />
                    <h3 className="storyTitle">What is mental health?</h3>
                </a>
                <p className="hook">Discusses what mental health is.</p>
                </div>
                <div className = "story">
                <a href="https://positivepsychology.com/what-is-mental-wellbeing/" target="_blank">
                    <img className = "storyImage" src="mentalHealth-HeadPostIts.png" alt="person balancing on a hill" />
                    <h3 className="storyTitle">Mental Wellbeing?</h3>
                </a>
                <p className="hook">Discusses what mental wellbeing includes.</p>
                </div>
                <div className = "story">
                <a href="https://www.talkspace.com/blog/why-is-mental-health-important/" target="_blank">
                    <img className = "storyImage" src="blogs-story3Pic.jpg" alt="person driving with post-it" />
                    <h3 className="storyTitle">Why mental health?</h3>
                </a>
                <p className="hook">Discusses the importance of mental wellness.</p>
                </div>
            </div>
            </div>
            <div className = "newsletter">

            </div>
        </div>
    );
}