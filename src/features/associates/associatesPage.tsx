import { Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import SearchBar from "./searchBar";
import { useNavigate, useParams } from "react-router-dom";

const AssociatesPage = () => {
  const params = useParams<{ associate?: string }>();
  const navigate = useNavigate();
  const [associate, setAssociate] = React.useState(params.associate ? params.associate.replaceAll("_", " ") : "");

  // Update URL when associate changes
  useEffect(() => {
    if (associate) {
      navigate(`/соратники/${associate.replaceAll(" ", "_")}`, { replace: true });
    } else {
      navigate(`/соратники`, { replace: true });
    }
    // eslint-disable-next-line
  }, [associate]);

  const getSearchedUser = (name: string | null) => {
    setAssociate(name || "");
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 32, width: "100%" }}>
        <SearchBar associate={associate} getSearchedUser={getSearchedUser} />
      </div>
      <Typography variant="h4" gutterBottom>
        {associate}
      </Typography>
      <Typography variant="body1">
        Контент для соратників...
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginTop: 2 }}
      >
        Дія
      </Button>
    </>
  );
};

export default AssociatesPage;
