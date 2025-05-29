import { Typography, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { darkTheme } from "../../App";

const dummyAssociates = [
  { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 88,supporters: [
              { name: "ПЕТРЕНКО ПЕТРО", score: 23 },
              { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 11 },
              { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 4 },
              { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
              { name: "ПЕТРЕНКО ПЕТРО", score: 1 },
            ], },
  {
    name: "СВІТЛАНЕНКО СВІТЛАНА",
    score: 66,
    supporters: [
      { name: "ПЕТРЕНКО ПЕТРО", score: 23 },
      { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 11 },
      { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 4 },
      { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
      {
        name: "ПЕТРЕНКО ПЕТРО",
        score: 1,
        supporters: [
          { name: "ПЕТРЕНКО ПЕТРО", score: 23 },
          { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 11 },
          { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 4 },
          { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
          { name: "ПЕТРЕНКО ПЕТРО", score: 1 },
        ],
      },
      { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 1 },
      {
        name: "ВАСИЛЕНКО ВАСИЛЬ",
        score: 1,
        supporters: [
          { name: "ПЕТРЕНКО ПЕТРО", score: 23 },
          { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 11 },
          {
            name: "ВАСИЛЕНКО ВАСИЛЬ",
            score: 4,
            supporters: [
              { name: "ПЕТРЕНКО ПЕТРО", score: 23 },
              { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 11 },
              { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 4 },
              { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
              { name: "ПЕТРЕНКО ПЕТРО", score: 1 },
            ],
          },
          { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
          { name: "ПЕТРЕНКО ПЕТРО", score: 1 },
        ],
      },
      { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
    ],
  },
  { name: "ПЕТРЕНКО ПЕТРО", score: 66 },
  { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 66 },
  { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 66 },
  { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 66 },
  { name: "ПЕТРЕНКО ПЕТРО", score: 66 },
  { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 66 },
  { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 66 },
  { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 66 },
  { name: "ПЕТРЕНКО ПЕТРО", score: 66 },
  { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 1 },
  { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 1 },
  { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
  { name: "ПЕТРЕНКО ПЕТРО", score: 1 },
  { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 1 },
  { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 1 },
  { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
  { name: "ПЕТРЕНКО ПЕТРО", score: 1 },
  { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 1 },
  { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 1 },
  { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
  { name: "ПЕТРЕНКО ПЕТРО", score: 1 },
  { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 1 },
];

type User = {
  name: string;
  score: number;
  supporters?: User[];
};

const supportersList = (user: User, nestedLevel: number) => {
  const newNestedLevel = nestedLevel + 1;
  return (
    user.supporters &&
    user.supporters.map((supporter) => (
      <ListItem
        key={user.name}
        style={{
          padding: 0,
          marginLeft: 16,
          flexDirection: supporter.supporters ? "column" : "row",
          alignItems: supporter.supporters ? "flex-start" : "center",
        }}
      >
        <ListItemText
          primary={
            <span
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                className="bullet-number"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: supporter.supporters ? "0" : "50%",
                  background: darkTheme.palette.primary.main,
                  color: darkTheme.palette.secondary.main,
                  fontSize: 18,
                  marginRight: 8,
                  marginTop: 4,
                  marginBottom: 4,
                  boxSizing: "border-box",
                }}
              >
                {supporter.score}
              </span>
              <Typography>{supporter.name}</Typography>
            </span>
          }
        />
        <List style={{ padding: 0 }}>
          {supportersList(supporter, newNestedLevel)}
        </List>
      </ListItem>
    ))
  );
};

const LeadersPage = () => {
  const nestedLevel = 0;
  return (
    <List style={{ padding: 0 }}>
      {dummyAssociates.map((user, idx) => (
        <ListItem
          key={user.name}
          style={{
            padding: 0,
            paddingRight: 0,
            flexDirection: user.supporters ? "column" : "row",
            alignItems: user.supporters ? "flex-start" : "center",
          }}
        >
          <ListItemText
            primary={
              <span style={{ display: "flex", alignItems: "center" }}>
                <span
                  className="bullet-number"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: user.supporters ? "0" : "50%",
                    background: darkTheme.palette.primary.main,
                    color: darkTheme.palette.secondary.main,
                    fontSize: 18,
                    marginRight: 8,
                    marginTop: 4,
                    marginBottom: 4,
                    border: `2px solid ${darkTheme.palette.secondary.main}`,
                    boxSizing: "border-box",
                  }}
                >
                  {user.score}
                </span>
                <Typography>{user.name}</Typography>
              </span>
            }
          />
          <List style={{ padding: 0 }}>
            {supportersList(user, nestedLevel)}
          </List>
        </ListItem>
      ))}
    </List>
  );
};

export default LeadersPage;
