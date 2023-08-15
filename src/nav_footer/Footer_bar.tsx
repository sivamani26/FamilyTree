import React from "react";
import "./Footer_bar.css";
import { Container, Typography } from "@mui/material";
import { Phone, Email } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer: React.FC = () => {
  return (
    <div style={{ height: "300px", position: "relative" }}>
      <Container
        maxWidth="xs"
        style={{
          textAlign: "left", // Align content to the left
          width: "100%",
          marginTop: "50px",
          float: "left",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}>
            <Phone style={{ width: "15px", display: "flex" }} />
            <Typography variant="body2" color="textSecondary" style={{ marginLeft: "5px" }}>
              Contact: 7661069233
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}>
            <Email />
            <Typography variant="body2" color="textSecondary" style={{ marginLeft: "5px" }}>
              Email: venkat.sivamani.04@gmail.com
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <LocationOnIcon />
            <Typography variant="body2" color="textSecondary" style={{ marginLeft: "5px" }}>
              Address: Samalkot, East Godavari, Andhra Pradesh, India
            </Typography>
          </div>
        </div>
      </Container>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography color="gray" style={{ padding: "10px" }}>
          © {new Date().getFullYear()} GSAL PVT.LTD. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
