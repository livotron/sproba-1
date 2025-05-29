import { Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import SearchBar from "./searchBar";
import { useNavigate, useParams } from "react-router-dom";

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
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 32,
          width: "100%",
        }}
      >
        <SearchBar associate={associate} getSearchedUser={getSearchedUser} />
      </div>
      <Box display="flex" justifyContent="center">
        <Typography variant="body1">ПІДТРИМУЄ:</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#000",
            color: "#FFD600",
            marginRight: 12,
            border: "2px solid #FFD600",
            fontSize: 16,
          }}
          title="triangle Medalion"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", top: "-1px" }}>
            <polygon points="12,4 20,20 4,20" fill="#FFD600" stroke="#FFD600" strokeWidth="1.5"/>
          </svg>
        </span>
        <Typography>СЕМЕН СЕМЕНОВИЧ</Typography>
      </Box>

      <Box display="flex" justifyContent="center">
        <Typography variant="body1">ЗАСВІДЧУЄ:</Typography>
      </Box>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#000",
          color: "#FFD600",
          marginRight: 16,
          border: "2px solid #FFD600",
          fontSize: 16,
        }}
        title="Arrow Up"
      >
        <svg
          width="14"
          height="14"
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
      </span>
      <br />
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#000",
          color: "#FFD600",
          marginRight: 8,
          border: "2px solid #FFD600",
          fontSize: 16,
        }}
        title="Arrow Right"
      >
        <svg
          width="14"
          height="14"
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
      </span>
      <br />
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#000",
          color: "#FFD600",
          marginRight: 8,
          border: "2px solid #FFD600",
          fontSize: 16,
        }}
        title="Arrow Down"
      >
        <svg
          width="14"
          height="14"
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
      </span>
      <br />
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#000",
          color: "#FFD600",
          marginRight: 8,
          border: "2px solid #FFD600",
          fontSize: 16,
        }}
        title="Arrow Left"
      >
        <svg
          width="14"
          height="14"
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
      </span>
    </>
  );
};

export default AssociatesPage;
