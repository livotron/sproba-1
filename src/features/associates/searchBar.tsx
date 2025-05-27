import { TextField, InputAdornment, Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const associates = [
  { label: "Іван Петренко" },
  { label: "Олена Ковальчук" },
  { label: "Сергій Іванов" },
  { label: "Марія Шевченко" },
];

const SearchBar = () => (
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
);

export default SearchBar;