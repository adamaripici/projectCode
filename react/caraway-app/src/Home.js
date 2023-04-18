import * as React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* <h1 className="project-title"><a className="title-home" >caraway</a></h1> */}
      <img style={{ width: "50%"}}
          src={require('./homeCaraway.jpg')} 
          alt="HomeImage" 
        />
        <div className="AboutCaraway">
          <h1 className="project-title">About Caraway...</h1>
          <p>Many female students don’t have the resources they need to handle their stress through access to therapists. Caraway provides immediate access to these professionals through their app and help with getting virtual appointments.</p>
        </div>
    </div>
  );
}