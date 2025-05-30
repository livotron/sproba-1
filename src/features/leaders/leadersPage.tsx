import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import { darkTheme, userColor } from "../../App";
import { getContrastYIQ } from "../../utils/colors";

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
const supportersList = (user: User, nestedLevel: number) => {
  const newNestedLevel = nestedLevel + 1;
  return (
    user.supporters &&
    user.supporters.map((supporter) => (
      <ListItem
        key={user.name}
        style={{
          padding: 0,
          marginLeft: 8,
          alignItems: "center",
          width: "100%",
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
              {/* <span
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
              </span> */}
              <span>
                <Button
                  style={{
                    background: darkTheme.palette.primary.main,
                    color: darkTheme.palette.secondary.main,
                  }}
                >
                  <KeyboardDoubleArrowDownIcon />
                </Button>
                <Typography>{supporter.name}</Typography>
              </span>
              <Typography>{supporter.score}</Typography>
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
                      background: userColor,
                      color: getContrastYIQ(userColor),
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
