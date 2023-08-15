import React from "react";
import logoImage from "../Components/treelogo.png";
import "./Nav_bar.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
        zIndex: "999999",
        backgroundColor: "#b9fc86",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link to="/"><div style={{ display: "flex", alignItems: "center", left: "10px" }}>
      <img
          src={logoImage}
          style={{
            borderRadius: "0px 50px 50px 0px",
            width: "63px",
          }}
          alt="Uncover Your Legacy Logo"
        />
        <h1
          style={{
            color: "#001F3F",
            margin: "0px 10px",
            fontFamily: "Caveat",
            fontSize: "3rem",
          }}
        >
          Uncover Your Legacy
        </h1>
        
      </div></Link>
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
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/signin">
            <Button variant="outlined">Sign in</Button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <Button variant="outlined">Login</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
