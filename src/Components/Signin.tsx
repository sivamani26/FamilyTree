import React, { useState } from "react";
import { Button, TextField, Container, Paper, Typography } from "@mui/material";
import "./Signin.css";
import Navbar from "../nav_footer/Nav_bar";
import BgImage from "../Components/SignIn_image.png";
import { Link } from "react-router-dom";
import e from "express";

const Signin: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (inputPhoneNumber.length <= 10) {
      setPhoneNumber(inputPhoneNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Container
        component="main"
        maxWidth="xl"
        className="Signin_container"
        style={{
          marginTop: "71px",
          padding: "20px",
          // backgroundImage: `url(${BgImage})`,
        }}
      >
        <img
          src={BgImage}
          alt="Image"
          style={{
            width: "54%",
            height: "98%",
            boxShadow:
              "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
          }}
        />
        <Paper
          elevation={3}
          className="Signin_paper"
          style={{
            width: "35%",
            padding: "33px 50px 50px 50px",
          }}
        >
          <Typography variant="h5">Sign In</Typography>
          <form>
            <TextField label="Email" fullWidth margin="normal" required />
            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              type="tel"
              id="phone-number"
              value={phoneNumber}
              onChange={handlePhoneNumChange}
              required
              inputProps={{ maxLength: 10 }} // Set maximum length to 10 digits
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              required
            />
            <TextField
              label="Confirm Password"
              fullWidth
              margin="normal"
              type="password"
              required
            />
            <div style={{ marginTop: "8px" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign In
              </Button>
            </div>
            <Link to="/login" style={{ color: "blue", marginTop: "10px" }}>
              Already a member? Click Here
            </Link>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Signin;
