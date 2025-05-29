import React from "react";

interface MedalProps {
  children?: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
}

const Medal: React.FC<MedalProps> = ({ children, title, style }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "#000",
      color: "#FFD600",
      marginRight: 8,
      border: "2px solid #FFD600",
      fontSize: 22,
      ...style,
    }}
    title={title}
  >
    {children}
  </span>
);

export default Medal;
