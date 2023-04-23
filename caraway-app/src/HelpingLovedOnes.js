import * as React from "react";
import "./HelpingLovedOnes.css";

export default function HelpingLovedOnes() {
    return (
        <div className="helping-loved-ones-article-page">
            <div classname="top">
                <div className = "front-image">
                    <img src="mentalHealth-Hand.png" alt = "comforting hand"/>
                </div>
            </div>
    
            <div className = "helping-loved-ones-title">
                <h1>Helping Loved Ones</h1>
            </div>
    
            <div className = "all-stories">
                <div className = "stories">
                    <div className = "story1">
                        <a href="https://www.psychiatry.org/patients-families/helping-a-loved-one-cope-with-mental-illness#:~:text=Try%20to%20show%20patience%20and,be%20most%20willing%20to%20start." target="_blank" rel="noreferrer">
                            <img className = "storyImage" src="helping-story1.png" alt="girl stressed" />
                            <h3 className="storyTitle">How Do I Start?</h3>
                        </a>
                        <p className="hook">Discusses how we start helping those closest to you! Dive in here!</p>
                    </div>
                    <div className = "story">
                        <a href="https://www.talkspace.com/blog/contributing-to-mental-health-issues/" target="_blank" rel="noreferrer">
                            <img className = "storyImage" src="helping-story2.png" alt="person balancing on a hill" />
                            <h3 className="storyTitle">Am I Really That Impactful?</h3>
                        </a>
                        <p className="hook">on't believe it? You have an impact! Find out how to use it.</p>
                    </div>
                    <div className = "story">
                        <a href="https://nami.org/Blogs/NAMI-Blog/November-2019/The-Importance-of-Community-and-Mental-Health" target="_blank" rel="noreferrer">
                            <img className = "storyImage" src="helping-story3.png" alt="person driving with post-it" />
                            <h3 className="storyTitle">Improving As A Community!</h3>
                        </a>
                        <p className="hook">Discusses how the community as a whole can support each other.</p>
                    </div>
                </div>
            </div>
            <div className = "newsletter">
    
            </div>
        </div>
    );
}