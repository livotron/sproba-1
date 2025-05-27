import { Typography, Button } from "@mui/material";
import React from "react";
import SearchBar from "./searchBar";

const AssociatesPage = () => (
  <>
    <div style={{ display: "flex", alignItems: "center", marginBottom: 32, width: "100%" }}>
      <SearchBar />
    </div>
    <Typography variant="h4" gutterBottom>
      Соратники
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

export default AssociatesPage;
