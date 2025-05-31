import React from "react";
import { lightenColorLinear } from "../../utils/colors";
import { userColor } from "../../App";
import { Typography } from "@mui/material";

interface LetterBubbleProps {
  text: string;
}
const LetterBubble: React.FC<LetterBubbleProps> = ({ text }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: `linear-gradient(${lightenColorLinear(
        userColor,
        60
      )},${userColor})`,
      color: "#000",
      position: "relative",
    }}
    title="Person Initial"
  >
    <Typography variant="h4">{text}</Typography>
    <Typography
      style={{
        position: "absolute",
        top: 44,
        left: 52,
      }}
      variant="h6"
    >
      23
    </Typography>
  </span>
);

export default LetterBubble;
