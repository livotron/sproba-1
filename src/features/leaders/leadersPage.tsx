import { Typography } from "@mui/material";
import React from "react";

const LeadersPage = () => (
  <div
    style={{
      background: "#000",
      height: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 16,
    }}
  >
    <Typography
      variant="h1"
      sx={{
        color: "#FFD600",
        fontSize: "12rem",
        fontWeight: 900,
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      O
    </Typography>
  </div>
);

export default LeadersPage;
