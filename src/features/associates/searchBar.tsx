import {
  TextField,
  InputAdornment,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { searchUsersByName } from "./associatesApi";

interface SearchBarProps {
  associate: string;
  getSearchedUser: (value: string | null) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ associate, getSearchedUser }) => {
  const [inputValue, setInputValue] = useState(associate);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<string[]>([]);

  const handleInputValueChange = (newInputValue: string) => {
    console.log("handleInputValueChange", newInputValue);
    const inputValueCapitalized = newInputValue.toUpperCase();
    if (inputValueCapitalized.length === 0) setOptions([]);
    if (
      (inputValueCapitalized.trim().length === 3 && inputValue.length < 3) ||
      (inputValueCapitalized.trim().length > 3 &&
        inputValueCapitalized.substring(0, 3) !== inputValue.substring(0, 3))
    ) {
      setLoading(true);
      searchUsersByName(inputValueCapitalized.substring(0, 3)).then(
        (res): void => {
          setOptions(res.map((user) => (user)));
          setLoading(false);
          console.log(res);
        }
      );
    }
    setInputValue(inputValueCapitalized);
  };

  return (
    <Autocomplete
      fullWidth
      options={options}
      value={inputValue }
      onInputChange={(_, newValue) => handleInputValueChange(newValue)}
      onChange={(event: any, newValue:  string | null) => {
        getSearchedUser(newValue ? newValue : null);
      }}
      noOptionsText={
        inputValue
          ? loading
            ? "Здійснюється пошук..."
            : inputValue.length < 3
            ? "Продовжуйте вводити..."
            : "Не знайдено співпадінь"
          : "Ведіть повне ім'я"
      }
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
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchBar;
