import React from "react";
import "./Nav_bar.css";
import Navbar from "./Nav_bar";
import logoImage from "../Components/treelogo.png";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div  className ="home_body" style={{marginTop:"5rem"}}>
      <h1>Welcome to Home Page</h1>
      <p>Hello</p>
      </div>
      
</div>
  );
};

export default Home;
