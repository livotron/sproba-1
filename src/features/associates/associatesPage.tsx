import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "./searchBar";

const AssociatesPage = () => {
  const [associate, setAssociate] = useState("");

  const getSearchedUser = (name: string | null) => {
    if (name) setAssociate(name)
  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 32, width: "100%" }}>
        <SearchBar getSearchedUser={getSearchedUser} />
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
