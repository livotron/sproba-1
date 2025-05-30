import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import { mainTheme } from "../../App";

const dummyAssociates = [
  {
    name: "ФІВАПФІВАПФІВАПФІВАПФІВАП",
    score: 88,
    supporters: [
      { name: "ПЕТРЕНКО ПЕТРО", score: 23 },
      { name: "ІВАН ІВАНОВИЧ ІВАНОВ", score: 11 },
      { name: "ВАСИЛЕНКО ВАСИЛЬ", score: 4 },
      { name: "СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
      { name: "ПЕТРЕНКО ПЕТРО", score: 1 },
    ],
  },
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
  nestedLevel?: number;
};

const dummyAssociatesUnified: User[] = [];
const associatesPusher = (user: User, nestedLevel: number) => {
  const newNestedLevel = nestedLevel + 1;
  dummyAssociatesUnified.push({ ...user, nestedLevel: newNestedLevel });
  if (user.supporters) {
    user.supporters.forEach((supporter) => {
      associatesPusher(supporter, newNestedLevel);
    });
  }
};
dummyAssociates.forEach((user) => {
  associatesPusher(user, -1);
});
console.log("dummyAssociatesUnified", dummyAssociatesUnified);

const LeadersPage = () => {
  return (
    <List style={{ padding: 0 }}>
      {dummyAssociatesUnified.map((user, idx) => (
        <ListItem
          key={user.name}
          style={{
            padding: 0,
            paddingRight: 0,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <ListItemText
            primary={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    paddingLeft: 8 * ((user.nestedLevel || 0)),
                  }}
                >
                  <Button
                    style={{
                      background: mainTheme.palette.secondary.main,
                      color: mainTheme.palette.primary.main,
                      marginRight: 8,
                      minWidth: 0
                    }}
                  >
                    <KeyboardDoubleArrowDownIcon />
                  </Button>

                  <Typography>{user.name}</Typography>
                </span>
                <div style={{width: 25, textAlign: "center"}}>
                  <Typography>{user.score}</Typography>
                </div>
              </span>
            }
          />
          {/* <List
            style={{
              padding: 0,
              width: "100%",
              paddingRight: 8 * (nestedLevel + 1),
            }}
          >
            {supportersList(user, nestedLevel)}
          </List> */}
        </ListItem>
      ))}
    </List>
  );
};

export default LeadersPage;
