import * as React from "react";
import "./Blogs.css";
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="blog">
      <div classname="top">
        <div className = "page-title">
          <h1>Blogs</h1>
        </div>
        <div className = "front-image">
          <img src="blogs-front-image.png" alt = "chat boxes"/>
        </div>
      </div>

      <div className = "topics-to-explore">
        <h2>Topics To Explore</h2>        
        <div className = "box-of-topics">
          <div className="grid">
            <div className="mental-health">
                <h3>Mental Health</h3>
                <p>Articles based around mental health struggles, along with tips to help you get through it</p>
                <button className="explore-button">
                  <Link to="/mentalHealth">Explore Mental Health Articles</Link>
                  {/* <a href="/mentalHealth">Exlpore</a> */}
                </button>
            </div>
            <div className="therapy">
                <h3>Therapy</h3>
                <p>Everyone has fears about getting int therapy...Let us debunk some myths, and give you tips ofn finding the right therapist for you!</p>
                <button className="explore-button">
                  <Link to="/therapyArticles">Explore Therapy Articles</Link>
                </button>
            </div>
            <div className="practicals-to-try">
                <h3>Practicals To Try</h3>
                <p>Having diffuculties overcoming mental health strugges? Let us help you.</p>
                <button className="explore-button">
                  <Link to="/practicalArticles">Explore Practials</Link>
                </button>
            </div>
            <div className="helping-loved-ones">
                <h3>Helping Loved Ones</h3>
                <p>Not quite sure how to help? Hear from some of clients on what helps them the most, to be the best you can be for your loved one.</p>
                <button className="explore-button">
                  <Link to="/helpingLovedOnes">Explore Helping Others</Link>
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className = "popular-stories">
        <h2 className="popular-stories-title">Popular Stories...</h2> 
        <div className = "stories">
          <div className = "story">
            <a href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/stress/causes-of-stress/" target="_blank">
              <img className = "storyImage" src="blogs-story1Pic.jpg" alt="girl stressed" />
              <h3 className="storyTitle">Understanding Stress</h3>
            </a>
            <p className="hook">What is stress? What causes it? How can you work through it? Check out the article to learn more!</p>
          </div>
          <div className = "story">
            <a href="https://www.bestcolleges.com/resources/work-life-school-balance/" target="_blank">
              <img className = "storyImage" src="blogs-story2Pic.jpg" alt="person balancing on a hill" />
              <h3 className="storyTitle">Finding Balance</h3>
            </a>
            <p className="hook">Having a hard time doing work for school and work to pay for school? Look here for tips!</p>
          </div>
          <div className = "story">
            <a href="https://www.wework.com/ideas/professional-development/creativity-culture/how-to-prioritize-tasks" target="_blank">
              <img className = "storyImage" src="blogs-story3Pic.jpg" alt="person driving with post-it" />
              <h3 className="storyTitle">Prioritizing</h3>
            </a>
            <p className="hook">It’s easy to overload yourself, or naturally have a lot on your plate. Learn how to manage it here</p>
          </div>
          <div className = "story">
            <a href="https://www.healthline.com/health/breathing-exercises-for-anxiety" target="_blank">
              <img className = "storyImage" src="blogs-story4Pic.jpg" alt="girl srunched in a ball" />
              <h3 className="storyTitle">Breathing Tips for Anxiety</h3>
            </a>
            <p className="hook">Everyone gets anxiety! There are many things you can try, but breathing exercises prove to be the most helpful. Learn some helpful ones here!</p>
          </div>
        </div>
      </div>
      <div className = "newsletter">

      </div>
    </div>
  );
}