import { Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import SearchBar from "./searchBar";
import { useNavigate, useParams } from "react-router-dom";
import LetterBubble from "./LetterBubble";
import MutualConnection from "./MutualConnection";
import CakeIcon from "@mui/icons-material/Cake";
import PanToolIcon from "@mui/icons-material/PanTool";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { mainTheme } from "../../App";
const AssociatesPage = () => {
  const params = useParams<{ associate?: string }>();
  const navigate = useNavigate();
  const [associate, setAssociate] = React.useState(
    params.associate ? params.associate.replaceAll("_", " ") : ""
  );

  // Update URL when associate changes
  useEffect(() => {
    if (associate) {
      navigate(`/associates/${associate.replaceAll(" ", "_")}`);
    } else {
      navigate(`/associates`);
    }
    // eslint-disable-next-line
  }, [associate]);

  const getSearchedUser = (name: string | null) => {
    setAssociate(name || "");
  };

  return (
    <>
      <Typography variant="h6">НАЗВАВСЯ:</Typography>
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
