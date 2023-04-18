import * as React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* <h1 className="project-title"><a className="title-home" >caraway</a></h1> */}
      <img 
          src={require('./homeCaraway.jpg')} 
          alt="HomeImage" 
        />
    </div>
  );
}