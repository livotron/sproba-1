import React from "react";
import { darkenColor, lightenColorLinear } from "../../utils/colors";
import { mainTheme, userColor } from "../../App";
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
        mainTheme.palette.secondary.main,
        50
      )},${darkenColor(mainTheme.palette.secondary.main, 90)})`,
      color: "#000",
      position: "relative",
    }}
    title="Person Initial"
  >
    <Typography variant="h4">{text}</Typography>
    <span
      style={{
        position: "absolute",
        top: -8,
        left: 48,
        backgroundColor: mainTheme.palette.secondary.main,
        borderRadius: "50%",
        width: 28,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6">23</Typography>
    </span>
  </span>
);

export default LetterBubble;
