import * as React from "react";
import "./Blogs.css";

export default function Blog() {
  return (
    <div classname="blog">
      <div classname = "page-title">
        <h1>Blogs</h1>
      </div>
      <div classname = "front-image">
        <img src="blogs-front-image.png"/>
      </div>
      <div classname = "topics-to-explore">
        <h2>Topics To Explore</h2>  
      </div>
      <div classname = "box-of-topics">
        
      </div>
      <div classname = "popular-stories">
        <h2>Popular Stories...</h2> 
        <div classname = "stories">
          <div classname = "story1">

          </div>
          <div classname = "story2">
            
          </div>
          <div classname = "story3">
            
          </div>
        </div>
      </div>
      <div classname = "newsletter">
        
      </div>
    </div>
  );
}