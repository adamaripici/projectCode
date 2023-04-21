import * as React from "react";
import "./practicalArticles.css";

export default function PracticalArticles() {
    return (
        <div className="practical-article-page">
            <div classname="top">
                <div className = "front-image">
                    <img src="mentalHealth-Hand.png" alt = "comforting hand"/>
                </div>
            </div>
    
            <div className = "practicals-title">
                <h1>Practicals To Try</h1>
            </div>
    
            <div className = "all-stories">
                <div className = "stories">
                    <div className = "story1">
                        <a href="https://www.verywellmind.com/how-your-environment-affects-your-mental-health-5093687#:~:text=Three%20main%20types%20of%20environmental,outdoor%20spaces%2C%20and%20messy%20environments" target="_blank">
                            <img className = "storyImage" src="practicals-story1.png" alt="girl stressed" />
                            <h3 className="storyTitle">Why is this happening?</h3>
                        </a>
                        <p className="hook">Discusses how external factors might impact our mental health.</p>
                    </div>
                    <div className = "story">
                        <a href="https://www.carolinawellnesspsychiatry.com/blog/5-habits-to-help-improve-your-mental-health#:~:text=By%20eating%20healthy%20foods%20that,good%20hormones%20serotonin%20and%20dopamine." target="_blank">
                            <img className = "storyImage" src="practicals-story2.png" alt="person balancing on a hill" />
                            <h3 className="storyTitle">Recommended Healthy Habits</h3>
                        </a>
                        <p className="hook">Discusses habits we can include to benefit our mental health.</p>
                    </div>
                    <div className = "story">
                        <a href="https://wellbeing-project.org/9-tested-tips-to-improve-your-wellbeing-and-quality-of-life-post/" target="_blank">
                            <img className = "storyImage" src="practicals-story3.png" alt="person driving with post-it" />
                            <h3 className="storyTitle">How To Grow My Wellbeing?</h3>
                        </a>
                        <p className="hook">Discusses methods to improve wellbeing long-term.</p>
                    </div>
                </div>
            </div>
            <div className = "newsletter">
    
            </div>
        </div>
    );
}
