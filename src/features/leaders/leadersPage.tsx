import { Typography, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { darkTheme } from "../../App";

const dummyAssociates = [
  "Іван Петренко",
  "Олена Ковальчук",
  "Сергій Іванов",
  "Марія Шевченко",
  "Іван Петренко",
  "Олена Ковальчук",
  "Сергій Іванов",
  "Марія Шевченко",
  "Іван Петренко",
  "Олена Ковальчук",
  "Сергій Іванов",
  "Марія Шевченко",
  "Іван Петренко",
  "Олена Ковальчук",
  "Сергій Іванов",
  "Марія Шевченко",
  "Іван Петренко",
  "Олена Ковальчук",
  "Сергій Іванов",
  "Марія Шевченко",
  "Іван Петренко",
  "Олена Ковальчук",
  "Сергій Іванов",
  "Марія Шевченко",
];

const LeadersPage = () => (
  <List style={{ padding: 0 }}>
    {dummyAssociates.map((name, idx) => (
      <ListItem
        key={name}
        style={{
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <ListItemText
          primary={
            <span
              style={{ display: "flex", alignItems: "center", fontWeight: 700 }}
            >
              <span
                className="bullet-number"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: darkTheme.palette.primary.main,
                  color: darkTheme.palette.secondary.main,
                  fontSize: 18,
                  marginRight: 16,
                  border: `2px solid ${darkTheme.palette.secondary.main}`,
                  boxSizing: "border-box",
                }}
              >
                {idx + 99}
              </span>
              {name}
            </span>
          }
        />
      </ListItem>
    ))}
  </List>
);

export default LeadersPage;
