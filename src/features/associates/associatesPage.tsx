import { Typography, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const AssociatesPage = () => (
  <>
    <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
      <TextField
        variant="outlined"
        placeholder="Пошук"
        size="small"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 28 }} />
            </InputAdornment>
          ),
        }}
      />
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
