import { Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import SearchBar from "./searchBar";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import LetterBubble from "./LetterBubble";
import MutualConnection from "./MutualConnection";
import CakeIcon from "@mui/icons-material/Cake";
import PanToolIcon from "@mui/icons-material/PanTool";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { mainTheme } from "../../App";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";

const AssociatesPage = () => {
  const location = useLocation();
  const [associate, setAssociate] = React.useState("");
  const { leaders } = useSelector((state: RootState) => state.leaders)

  // Set associate according to location.pathname
  useEffect(() => {
    const match = location.pathname.match(/^\/associates\/(.+)$/);
    if (match && match[1]) {
      const decodedURI =decodeURIComponent(match[1]);
      setAssociate(decodedURI.replaceAll("_", " "));
    } else if (leaders.length){
      setAssociate(leaders[0].name);
    }
  }, [location.pathname, leaders]);

  const getSearchedUser = (name: string | null) => {
    setAssociate(name || "");
  };

  return (
    <>
      <Typography variant="h6">ПРЕДСТАВИВСЯ:</Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <SearchBar associate={associate} getSearchedUser={getSearchedUser} />
      </div>
      <Typography variant="h6">ДОЄДНАВСЯ:</Typography>
      <Box display="flex" alignItems="center">
        <Button
          color="primary"
          style={{
            background: mainTheme.palette.secondary.main,
            color: mainTheme.palette.primary.main,
            marginRight: 8,
            minWidth: 40,
            minHeight: 40,
          }}
        >
          <CakeIcon />
        </Button>
        <Typography variant="h6">02.04.2025</Typography>
      </Box>
      <Typography variant="h6">ПІДТРИМАВ:</Typography>
      <Box display="flex" alignItems="center">
        <Button
          color="primary"
          style={{
            background: mainTheme.palette.secondary.main,
            color: mainTheme.palette.primary.main,
            marginRight: 8,
            minWidth: 40,
            maxHeight: 40,
          }}
        >
          <span style={{ position: "relative", left: "-2px", top: "2px" }}>
            <PanToolIcon fontSize="medium" />
          </span>
        </Button>
        <Typography>СЕМЕН СЕМЕНОВИЧ</Typography>
      </Box>
      <Typography variant="h6">ЗАСВІДЧИВ:</Typography>
      <Box display="flex" alignItems="center" marginBottom={1}>
        <Button
          title="Arrow Up"
          style={{
            background: mainTheme.palette.secondary.main,
            color: mainTheme.palette.primary.main,
            marginRight: 8,
            minWidth: 40,
          }}
        >
          <KeyboardDoubleArrowUpIcon />
        </Button>
        <Typography>VLAD СЕМЕНОВИЧ</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={1}>
        <Button
          title="Arrow Right"
          style={{
            background: mainTheme.palette.secondary.main,
            color: mainTheme.palette.primary.main,
            marginRight: 8,
            minWidth: 40,
          }}
        >
          <KeyboardDoubleArrowRightIcon />
        </Button>
        <Typography>GOSHA СЕМЕНОВИЧ</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={1}>
        <Button
          title="Arrow Down"
          style={{
            background: mainTheme.palette.secondary.main,
            color: mainTheme.palette.primary.main,
            marginRight: 8,
            minWidth: 40,
          }}
        >
          <KeyboardDoubleArrowDownIcon />
        </Button>
        <Typography>VIRTOR СЕМЕНОВИЧ</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={1}>
        <Button
          title="Arrow Left"
          style={{
            background: mainTheme.palette.secondary.main,
            color: mainTheme.palette.primary.main,
            marginRight: 8,
            minWidth: 40,
          }}
        >
          <KeyboardDoubleArrowLeftIcon />
        </Button>
        <Typography>OLEG СЕМЕНОВИЧ</Typography>
      </Box>

      <Box
        height={250}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <LetterBubble text="AB" />
        <MutualConnection />
        <Box display="flex" flexDirection="column" alignItems="center">
          <LetterBubble text="K" />
          <MutualConnection />
          <LetterBubble text="KR" />
          <MutualConnection style={{ opacity: 0 }} />

          <LetterBubble text="PP" />
        </Box>
        <MutualConnection />

        <LetterBubble text="Q" />
      </Box>
    </>
  );
};

export default AssociatesPage;
