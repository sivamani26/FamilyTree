import React from "react";
import logoImage from "../Components/treelogo.png";
import "./Nav_bar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        top: "0px",
        height: "70px",
        backgroundColor: "#b9fc86",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", left: "10px" }}>
        <img
          src={logoImage}
          style={{
            borderRadius: "0px 50px 50px 0px",
            width: "63px",
          }}
          alt="Family's Tree Logo"
        />
        <h1
          style={{
            color: "#001F3F",
            margin: "0px 10px",
            fontFamily: "Caveat",
            fontSize: "3rem",
          }}
        >
          Family Tree
        </h1>
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "40px",
          margin: "0",
          padding: "0",
          width: "20rem",
          fontFamily: "Caveat",
          color: "#001F3F !important",
          fontSize: "1.3rem",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
