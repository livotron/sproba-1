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
      { name: "2ПЕТРЕНКО ПЕТРО", score: 23 },
      { name: "2ІВАН ІВАНОВИЧ ІВАНОВ", score: 11 },
      { name: "2ВАСИЛЕНКО ВАСИЛЬ", score: 4 },
      { name: "2СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
      { name: "2ПЕТРЕНКО ПЕТРО", score: 1 },
    ],
  },
  {
    name: "1СВІТЛАНЕНКО СВІТЛАНА",
    score: 66,
    supporters: [
      { name: "2ПЕТРЕНКО ПЕТРО", score: 23 },
      { name: "2ІВАН ІВАНОВИЧ ІВАНОВ", score: 11 },
      { name: "2ВАСИЛЕНКО ВАСИЛЬ", score: 4 },
      { name: "2СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
      {
        name: "2ПЕТРЕНКО ПЕТРО",
        score: 1,
        supporters: [
          { name: "3ПЕТРЕНКО ПЕТРО", score: 23 },
          { name: "3ІВАН ІВАНОВИЧ ІВАНОВ", score: 11 },
          { name: "3ВАСИЛЕНКО ВАСИЛЬ", score: 4 },
          { name: "3СВІТЛАНЕНКО СВІТЛАНА", score: 1 },
          { name: "3ПЕТРЕНКО ПЕТРО", score: 1 },
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

// const dummyAssociatesUnified: User[] = [];
// const associatesPusher = (user: User, nestedLevel: number) => {
//   const newNestedLevel = nestedLevel + 1;
//   // dummyAssociatesUnified.push({ ...user, nestedLevel: newNestedLevel });
  // if (user.supportersOpen && user.supporters) {
  //   user.supporters.forEach((supporter) => {
  //     associatesPusher(supporter, newNestedLevel);
  //   });
  // }
// };
// dummyAssociates.forEach((user) => {
//   associatesPusher(user, -1);
// });

const RecursiveListItem: React.FC<{
  user: User;
  nestedLevel: number;
  selection: number[];
  index: number;
  setSelection: (selection: number[]) => void;
}> = ({ user, nestedLevel, selection, index, setSelection }) => {
  const newNestedLevel = nestedLevel + 1;
  return (
    <>
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
                }}
              >
                <Button
                  style={{
                    background: mainTheme.palette.secondary.main,
                    color: mainTheme.palette.primary.main,
                    marginRight: 8,
                    minWidth: 0,
                    marginLeft: 8 * nestedLevel,
                  }}
                  onClick={() => {
                    setSelection([index]);
                  }}
                >
                  <KeyboardDoubleArrowDownIcon />
                </Button>

                <Typography>{user.name}</Typography>
              </span>
              <div style={{ width: 25, textAlign: "center" }}>
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
      {user.supporters &&
        index === selection[0] &&
          user.supporters.map((supporter, idx) => (
            <RecursiveListItem
              user={supporter}
              nestedLevel={newNestedLevel}
              index={idx}
              selection={selection}
              setSelection={setSelection}
            />
          ))}
    </>
  );
};

const LeadersPage = () => {
  const [associates, setAssociates] = React.useState<User[]>(dummyAssociates);
  const [selection, setSelection] = React.useState<number[]>([]);
  return (
    <List style={{ padding: 0 }}>
      {associates.map((user, idx) => (
        <RecursiveListItem
          user={user}
          nestedLevel={0}
          selection={selection}
          index={idx}
          setSelection={setSelection}
        />
      ))}
    </List>
  );
};

export default LeadersPage;
