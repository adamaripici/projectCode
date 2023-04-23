import * as React from "react";
import "./Management.css";

export default function Home() {
  return (
    <div className="management">
      <h1 className="management-title">Management Tips</h1>
      <div className="management-content">
        <div className="management-grid">
        
          <div className="management-tip">
            <h1 className="management-tip-header"> 
              <a href="https://jhsap.org/self_help_resources/school-life_balance/" target="_blank" rel="noreferrer">
              Tips On Balancing School, Work and Life
              </a>
            </h1>
            <p className="management-tip-content">Having a hard time with school, work and trying to have a social life? Look at these tips to help balance them.</p>

          </div>

          <div className="management-tip">
            <h1 className="management-tip-header">
              <a href="https://cognitivebehaviortherapycenter.com/10-ways-to-manage-anxiety-worry-stress/" target="_blank" rel="noreferrer">
                10 Ways to Manage Anxiety
              </a>              
            </h1>
            <p className="management-tip-content">Feeling anxious and don’t know how to manage anxiety from workload? Try out one of these 10 tips!</p>
          </div>

          <div className="management-tip">
            <h1 className="management-tip-header">
              <a href="https://naturesway.com/blogs/articles/8-ways-to-get-through-a-busy-week" target="_blank" rel="noreferrer">
                Preparing for Busy Weeks
              </a>              
            </h1>
            <p className="management-tip-content">Sometimes planning out busy weeks helps reduce overall stress. Here are some tips!</p>
          </div>

          <div className="management-tip">
            <h1 className="management-tip-header">
              <a href="https://money.usnews.com/money/blogs/my-money/articles/affordable-ways-to-relieve-stress-and-unwind" target="_blank" rel="noreferrer">
                Destressing on a Student Budget!
              </a>              
            </h1>
            <p className="management-tip-content">Want to destress after a hectic week, but not sure if you can afford to? Here are some budget friendly options!</p>
          </div>

        </div>
      </div>
    </div>
  );
}