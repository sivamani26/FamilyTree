import React,{ useState } from "react";
import Navbar from "../nav_footer/Nav_bar";
import { Button, TextField, Container, Paper, Typography } from "@mui/material";
import WelcomeImage from "./WelcomeImage.png";
import "./Home.css";

const Contact: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

    const handlePhoneNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputPhoneNumber = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
      if (inputPhoneNumber.length <= 10) {
        setPhoneNumber(inputPhoneNumber);
      }
    }

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
        }}
      >
        <img src={WelcomeImage} alt="Image" style ={
          {
          width: "54%",
          height: "98%",
          boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)"
        }
        }/>
        <Paper
          elevation={3}
          className="Signin_paper"
          style={{
            width: "35%",
            height: "66%",
            padding: "100px 50px 50px 50px",
          }}
        >
          <Typography variant="h5">Login</Typography>
          <form>
            <TextField label="Email" fullWidth margin="normal" required />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              required
            />
            <div style={{ marginTop: "15px" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login In
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
     
    </>
  );
};

export default Contact;
