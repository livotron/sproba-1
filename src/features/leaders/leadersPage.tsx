import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useNavigate } from "react-router-dom";

import { mainTheme } from "../../App";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import FlagIcon from "@mui/icons-material/Flag";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { fetchLeaders, Leader } from "./leadersSlice";
import { RootState } from "../../rootReducer";


type User = {
  name: string;
  score: number;
  supporters?: User[];
};

const LeadersPage = () => {
  // const [associates, setAssociates] = React.useState<User[]>(dummyAssociates);
  const [selection, setSelection] = React.useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { leaders, loading, error } = useSelector((state: RootState) => state.leaders);

  useEffect(() => {
    dispatch(fetchLeaders());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <List style={{ padding: 0 }}>
      {leaders.map((user, idx) => (
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
                    <CloseIcon />
                  ) : selection.some((s) => s === user.name) ? (
                    <KeyboardDoubleArrowDownIcon
                      style={{ transform: "rotate(180deg)" }}
                    />
                  ) : (
                    <KeyboardDoubleArrowDownIcon />
                  )}
                </Button>
                <Typography>{user.name}</Typography>
                {newNestedLevel === 1 && index === 0 && (
                  <FlagIcon
                    // fontSize="large"
                    style={{
                      color: mainTheme.palette.primary.main,
                      position: "relative",
                      top: -5,
                    }}
                  />
                )}
              </span>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  navigate(`/associates/${user.name.replaceAll(" ", "_")}`);
                }}
                style={{
                  height: 36,
                  minWidth: 40,
                  padding: 0,
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
