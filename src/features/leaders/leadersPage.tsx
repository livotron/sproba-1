import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useNavigate } from "react-router-dom";

import { mainTheme } from "../../App";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import FlagIcon from '@mui/icons-material/Flag';

const dummyAssociates = [
  {
    name: "ЛІДЕР ЛІДЕРЧУК",
    score: 88,
    supporters: [
      { name: "2ПЕТРЕНDКО ПЕТsdfРО", score: 23 },
      { name: "2ІВАН ІВDАНОВИЧfsd ІВАНОВ", score: 11 },
      { name: "2ВАСИЛЕDDНКО ВАСИsdfЛЬ", score: 4 },
      { name: "2СВІТЛDDАНsdЕНКО СВsdfІТЛАНА", score: 1 },
      { name: "2ПЕТРЕDDНКО ПЕfТРО", score: 1 },
    ],
  },
  {
    name: "1СВІТЛАНЕНКО СВІТasЛАНА",
    score: 66,
    supporters: [
      { name: "2ПЕТРЕНКО ПjЕТРО", score: 23 },
      { name: "2ІВАН ІВАНОВИЧ ІbВАНОВ", score: 11 },
      { name: "2ВАСИЛЕНКО ВАgСИЛЬ", score: 4 },
      { name: "2СВІТЛАНЕНКО cСВІТЛАНА", score: 1 },
      {
        name: "2ПЕТРЕНКО ПfЕТРО --->",
        score: 5,
        supporters: [
          { name: "3ПЕТРЕНКО ПaЕТРО", score: 23 },
          { name: "3ІВАН ІВАНОВИЧ ІvВАНОВ", score: 11 },
          { name: "3ВАСИЛЕНКО ВАСzИЛЬ", score: 4 },
          { name: "3СВІТЛАНЕНКО СВІcТЛАНА", score: 1 },
          { name: "3ПЕТРЕНКО ПЕТ РО", score: 1 },
        ],
      },
      { name: "ІВАН ІВАНОВИЧ ІВАcНОВ", score: 1 },
      {
        name: "ВАСИЛЕНКО ВАСИxЛЬ--->",
        score: 8,
        supporters: [
          { name: "ПЕТРЕНКО ПЕwТРО", score: 23 },
          { name: "ІВАН ІВАНОВИЧd ІВАНОВ", score: 11 },
          {
            name: "ВАСИЛЕНКО ВАСhИЛЬ---->",
            score: 4,
            supporters: [
              { name: "ПЕТРЕНКО ПdЕТРО", score: 23 },
              { name: "ІВАН ІВАНОВfИЧ ІВАНОВ", score: 11 },
              { name: "ВАСИЛЕНКО ВvАСИЛЬ", score: 4 },
              { name: "СВІТЛАНЕНКО dСВІТЛАНА", score: 1 },
              { name: "ПЕТРЕНКО ПЕТzРО", score: 1 },
            ],
          },
          { name: "СВІТЛАНЕНКО СВІwТЛАНА", score: 1 },
          { name: "ПЕТРЕНКО ПЕТРgО", score: 1 },
        ],
      },
      { name: "СВІТЛАНЕНКО СВІТЛАfНА", score: 1 },
    ],
  },
  { name: "ПЕТРЕНКО ПЕТljРО", score: 66 },
  { name: "ІВАН ІВАНОgfВИЧ ІВАНОВ", score: 66 },
  { name: "ВАСИЛЕНfgКО ВАСИЛЬ", score: 66 },
  { name: "СВfgІТЛАНЕНКО СВІТЛАНА", score: 66 },
  { name: "ПЕТРЕgfНКО ПЕТРО", score: 66 },
  { name: "ІvcВАН ІВАНОВИЧ ІВАНОВ", score: 66 },
  { name: "vcВАСИЛЕНКО ВАСИЛЬ", score: 66 },
  { name: "СDFВІТЛАНЕНКО СВІТЛАНА", score: 66 },
  { name: "FПЕТРЕНКО ПЕТРО", score: 66 },
  { name: "FFІВАН ІВАНОВИЧ ІВАНОВ", score: 1 },
  { name: "ВАGFСИЛЕНКО ВАСИЛЬ", score: 1 },
  { name: "СВІТЛАGFНЕНКО СВІТЛАНА", score: 1 },
  { name: "ПЕТРЕНКDFGО ПЕТРО", score: 1 },
  { name: "ІВАН ІВАGDFНОВИЧ ІВАНОВ", score: 1 },
  { name: "ВАСИЛЕНFDКО ВАСИЛЬ", score: 1 },
  { name: "СВІТЛАНGFDЕНКО СВІТЛАНА", score: 1 },
  { name: "ПЕТРЕНКОDFG ПЕТРО", score: 1 },
  { name: "ІВАН ІВАНFDОВИЧ ІВАНОВ", score: 1 },
  { name: "ВАСИЛЕНКО ВDFАСИЛЬ", score: 1 },
  { name: "СВІТЛАНЕНКО СDFGВІТЛАНА", score: 1 },
  { name: "ПЕТРЕНКО ПGЕТРО", score: 1 },
  { name: "ІВАН ІВАНОFDВИЧ ІВАНОВ", score: 1 },
];

const leadersDummy = [
  { name: "ПЕТРЕНКО ПЕТljРО", score: 66 },
  { name: "ІВАН ІВАНОgfВИЧ ІВАНОВ", score: 66 },
  { name: "ВАСИЛЕНfgКО ВАСИЛЬ", score: 66 },
  { name: "СВfgІТЛАНЕНКО СВІТЛАНА", score: 66 },
  { name: "ПЕТРЕgfНКО ПЕТРО", score: 66 },
  { name: "ІvcВАН ІВАНОВИЧ ІВАНОВ", score: 66 },
  { name: "vcВАСИЛЕНКО ВАСИЛЬ", score: 66 },
  { name: "СDFВІТЛАНЕНКО СВІТЛАНА", score: 66 },
  { name: "FПЕТРЕНКО ПЕТРО", score: 66 },
  { name: "FFІВАН ІВАНОВИЧ ІВАНОВ", score: 1 },
  { name: "ВАGFСИЛЕНКО ВАСИЛЬ", score: 1 },
  { name: "СВІТЛАGFНЕНКО СВІТЛАНА", score: 1 },
  { name: "ПЕТРЕНКDFGО ПЕТРО", score: 1 },
  { name: "ІВАН ІВАGDFНОВИЧ ІВАНОВ", score: 1 },
  { name: "ВАСИЛЕНFDКО ВАСИЛЬ", score: 1 },
  { name: "СВІТЛАНGFDЕНКО СВІТЛАНА", score: 1 },
  { name: "ПЕТРЕНКОDFG ПЕТРО", score: 1 },
  { name: "ІВАН ІВАНFDОВИЧ ІВАНОВ", score: 1 },
  { name: "ВАСИЛЕНКО ВDFАСИЛЬ", score: 1 },
  { name: "СВІТЛАНЕНКО СDFGВІТЛАНА", score: 1 },
  { name: "ПЕТРЕНКО ПGЕТРО", score: 1 },
  { name: "ІВАН ІВАНОFDВИЧ ІВАНОВ", score: 1 },
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

const LeadersPage = () => {
  const [associates, setAssociates] = React.useState<User[]>(dummyAssociates);
  const [selection, setSelection] = React.useState<string[]>([]);
  const navigate = useNavigate();
  return (
    <List style={{ padding: 0 }}>
      {associates.map((user, idx) => (
        <RecursiveListItem
          key={user.name + "SDFSD"}
          user={user}
          nestedLevel={0}
          selection={selection}
          index={idx}
          setSelection={setSelection}
          navigate={navigate}
        />
      ))}
    </List>
  );
};

const RecursiveListItem: React.FC<{
  user: User;
  nestedLevel: number;
  selection: string[];
  index: number;
  setSelection: (selection: string[]) => void;
  navigate: ReturnType<typeof useNavigate>;
}> = ({ user, nestedLevel, selection, index, setSelection, navigate }) => {
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
          borderBottomWidth: 2,
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderStyle: "solid",
          borderColor: mainTheme.palette.secondary.main,
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
                  disabled={user.score === 1}
                  onClick={() => {
                    if (selection.some((s) => s === user.name)) {
                      setSelection(selection.filter((s) => s !== user.name));
                    } else setSelection([...selection, user.name]);
                  }}
                >
                  {user.score === 1 ? (
                    <KeyboardDoubleArrowRight />
                  ) : selection.some((s) => s === user.name) ? (
                    <KeyboardDoubleArrowDownIcon
                      style={{ transform: "rotate(180deg)" }}
                    />
                  ) : (
                    <KeyboardDoubleArrowDownIcon />
                  )}
                </Button>
                <Typography>{user.name}</Typography>
                {newNestedLevel === 1 && index ===0 && (
                  <FlagIcon fontSize="large" style={{color: mainTheme.palette.primary.main, position: "relative", top: -7}} />
                )}
              </span>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  navigate(`/associates/${user.name}`);
                }}
                style={{
                  height: 36,
                  minWidth: 40,
                  padding: 0
                }}
              >
                <Typography>{user.score}</Typography>
              </Button>
            </span>
          }
        />
      </ListItem>
      {user.supporters &&
        selection.some((s) => s === user.name) &&
        user.supporters.map((supporter, idx) => (
          <RecursiveListItem
            key={supporter.name}
            user={supporter}
            nestedLevel={newNestedLevel}
            index={idx}
            selection={selection}
            setSelection={setSelection}
            navigate={navigate}
          />
        ))}
    </>
  );
};

export default LeadersPage;
