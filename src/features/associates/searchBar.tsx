import {
  TextField,
  InputAdornment,
  Autocomplete,
  CircularProgress,
  Box,
  Typography,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { searchUsersByName } from "./associatesApi";

interface SearchBarProps {
  associate: string;
  getSearchedUser: (value: string | null) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  associate,
  getSearchedUser,
}) => {
  const [inputValue, setInputValue] = useState(associate);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [searchActive, setSearchActive] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputValueChange = (newInputValue: string) => {
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
          setOptions(res.map((user) => user));
          setLoading(false);
        }
      );
    }
    setInputValue(inputValueCapitalized);
  };

  if (!searchActive) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="start"
        width="100%"
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setInputValue("");
            setOptions([]);
            setSearchActive(true);
            setTimeout(() => {
              if (inputRef.current) inputRef.current.focus();
            }, 0);
          }}
          style={{
            height: 40,
            minWidth: 40,
            paddingRight: 8,
            paddingLeft: 8,
            marginRight: 8,
          }}
        >
          <SearchIcon color="action" style={{position: "absolute"}} />
        </Button>
        <Typography>{associate}</Typography>
      </Box>
    );
  }

  return (
    <Autocomplete
      fullWidth
      options={options}
      value={inputValue}
      onInputChange={(_, newValue) => handleInputValueChange(newValue)}
      onChange={(event: any, newValue: string | null) => {
        if (newValue) {
          getSearchedUser(newValue);
          setSearchActive(false);
        }
      }}
      onBlur={() => {
        setSearchActive(false);
      }}
      noOptionsText={
        inputValue
          ? loading
            ? "Здійснюється пошук..."
            : inputValue.length < 3
            ? "Продовжуйте вводити..."
            : "Не знайдено співпадінь"
          : "Ведіть ім'я"
      }
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={inputRef}
          variant="outlined"
          placeholder="Пошук"
          size="small"
          fullWidth
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment
                        style={{ paddingLeft: 4}}
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = "";
                    inputRef.current.blur();
                  }
                }}
                position="start"
              >
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
