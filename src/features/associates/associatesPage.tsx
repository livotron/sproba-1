import { Typography, Button, TextField, InputAdornment, Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

// Example options for autocomplete
const associates = [
  { label: "Іван Петренко" },
  { label: "Олена Ковальчук" },
  { label: "Сергій Іванов" },
  { label: "Марія Шевченко" },
];

const AssociatesPage = () => (
  <>
    <div style={{ display: "flex", alignItems: "center", marginBottom: 32, width: "100%" }}>
      <Autocomplete
      fullWidth
        options={associates}
        getOptionLabel={(option) => typeof option === "string" ? option : option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Пошук"
            size="small"
            fullWidth
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        )}
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
