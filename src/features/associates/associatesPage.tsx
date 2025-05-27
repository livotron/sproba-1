import { Typography, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const AssociatesPage = () => (
  <>
    <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
      <TextField
        variant="outlined"
        placeholder="Пошук"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span
                style={{
                  background: "#FFD600",
                  borderRadius: "50%",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchIcon sx={{ color: "#000" }} />
              </span>
            </InputAdornment>
          ),
        }}
        sx={{
          width: 300,
          "& .MuiInputBase-input": {
            color: "#FFD600",
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FFD600",
            },
            "&:hover fieldset": {
              borderColor: "#FFD600",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFD600",
            },
          },
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
