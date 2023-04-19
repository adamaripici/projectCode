import * as React from "react";
import "./Blogs.css";
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="blog">
      <div className = "page-title">
        <h1>Blogs</h1>
      </div>
      <div className = "front-image">
        <img src="blogs-front-image.png"/>
      </div>
      <div className = "topics-to-explore">
        <h2>Topics To Explore</h2>  
      </div>
      <div className = "box-of-topics">
        <div className="grid">
          <div className="mental-health">
              <h3>Mental Health</h3>
              <p>Articles based around mental health struggles, along with tips to help you get through it</p>
              <button className="explore-button">
              <Link to="/mentalHealth">Explore Mental Health Articles</Link>
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
      <div className = "popular-stories">
        <h2>Popular Stories...</h2> 
        <div className = "stories">
          <div className = "story1">
            {/* pic
            title
            hook */}
          </div>
          <div className = "story2">
            {/* pic
            title
            hook */}
          </div>
          <div className = "story3">
            {/* pic
            title
            hook */}
          </div>
          <div className = "story4">
            {/* pic
            title
            hook */}
          </div>
        </div>
      </div>
      <div className = "newsletter">
        
      </div>
    </div>
  );
}