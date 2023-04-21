import * as React from "react";
import "./therapyArticles.css";

export default function TherapyArticles() {
    return (
        <div className="therapy-article-page">
            <div classname="top">
                <div className = "front-image">
                    <img src="mentalHealth-Hand.png" alt = "comforting hand"/>
                </div>
            </div>
    
            <div className = "therapy-title">
                <h1>Therapy</h1>
            </div>
    
            <div className = "all-stories">
                <div className = "stories">
                    <div className = "story1">
                    <a href="https://www.mentalhealth.gov/basics/what-is-mental-health" target="_blank">
                        <img className = "storyImage" src="therapy-story1.png" alt="girl stressed" />
                        <h3 className="storyTitle">What is therapy?</h3>
                    </a>
                    <p className="hook">Discusses what therapy is, common fears and misconceptions! Dive in here.</p>
                    </div>
                    <div className = "story">
                    <a href="https://positivepsychology.com/what-is-mental-wellbeing/" target="_blank">
                        <img className = "storyImage" src="therapy-story2.png" alt="person balancing on a hill" />
                        <h3 className="storyTitle">Benefits of therapy!</h3>
                    </a>
                    <p className="hook">Discusses benefits of therapy, and how it has helped many people process.</p>
                    </div>
                    <div className = "story">
                    <a href="https://www.talkspace.com/blog/why-is-mental-health-important/" target="_blank">
                        <img className = "storyImage" src="therapy-story3.png" alt="person driving with post-it" />
                        <h3 className="storyTitle">Therapy process</h3>
                    </a>
                    <p className="hook">Discusses how therapy can affect daily moods.</p>
                    </div>
                </div>
            </div>
            <div className = "newsletter">
    
            </div>
        </div>
    );
}