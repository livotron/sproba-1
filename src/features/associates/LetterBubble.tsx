import React from "react";

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
      background: "#FFD600",
      color: "#000",
      fontWeight: 700,
      fontSize: 36,
      letterSpacing: 2,
      textTransform: "uppercase",
    }}
    title="Person Initial"
  >
    {text}
  </span>
);

export default LetterBubble;
