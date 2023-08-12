import React from "react";
import "./Nav_bar.css";
import Navbar from "./Nav_bar";

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div  style={{marginTop:"5rem"}}>
      <h1>Welcome to About Page</h1>
      <p>Hi</p>
      </div>
    </div>
  );
};

export default About;
