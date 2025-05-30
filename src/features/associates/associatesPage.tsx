import { Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import SearchBar from "./searchBar";
import { useNavigate, useParams } from "react-router-dom";
import SandClock from "./SandClock";
import Medal from "./Medal";
import LetterBubble from "./LetterBubble";
import MutualConnection from "./MutualConnection";

const AssociatesPage = () => {
  const params = useParams<{ associate?: string }>();
  const navigate = useNavigate();
  const [associate, setAssociate] = React.useState(
    params.associate ? params.associate.replaceAll("_", " ") : ""
  );

  // Update URL when associate changes
  useEffect(() => {
    if (associate) {
      navigate(`/associates/${associate.replaceAll(" ", "_")}`, {
        replace: true,
      });
    } else {
      navigate(`/associates`, { replace: true });
    }
    // eslint-disable-next-line
  }, [associate]);

  const getSearchedUser = (name: string | null) => {
    setAssociate(name || "");
  };

  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"space-between"} height={"100%"}>
    <Box>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 8,
          width: "100%",
        }}
      >
        <SearchBar associate={associate} getSearchedUser={getSearchedUser} />
      </div>
            <Box display="flex" justifyContent="center">
        <Typography variant="h6">ЗАРЕЄСТРОВАНО:</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Medal>
          <SandClock />
        </Medal>
        <Typography>02.04.2025</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h6">ПІДТРИМУЄ:</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Medal>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "relative", top: "-1px" }}
          >
            <polygon
              points="12,4 20,20 4,20"
              fill="#FFD600"
              stroke="#FFD600"
              strokeWidth="1.5"
            />
          </svg>
        </Medal>
        <Typography>СЕМЕН СЕМЕНОВИЧ</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h6">ЗАСВІДЧУЄ:</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={1}>
        <Medal title="Arrow Up">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4v16M12 4l-6 6M12 4l6 6"
              stroke="#FFD600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Medal>
        <Typography>СЕМЕН СЕМЕНОВИЧ</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={1}>
        <Medal title="Arrow Right">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12H4M20 12l-6-6M20 12l-6 6"
              stroke="#FFD600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Medal>
        <Typography>СЕМЕН СЕМЕНОВИЧ</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={1}>
        <Medal title="Arrow Down">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20V4M12 20l-6-6M12 20l6-6"
              stroke="#FFD600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Medal>
        <Typography>СЕМЕН СЕМЕНОВИЧ</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={1}>
        <Medal title="Arrow Left">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12h16M4 12l6-6M4 12l6 6"
              stroke="#FFD600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Medal>
        <Typography>СЕМЕН СЕМЕНОВИЧ</Typography>
      </Box>
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
          <MutualConnection style={{opacity: 0}}/>

          <LetterBubble text="PP" />
        </Box>
        <MutualConnection />

        <LetterBubble text="Q" />
      </Box>
    </Box>
  );
};

export default AssociatesPage;
