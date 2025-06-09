import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { searchUsersByName } from "./associatesApi";

interface Props {
  getSearchedUser: (user: string) => void;
}
const SimpleAutocomplete = ({ getSearchedUser }: Props) => {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

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
          setOptions(res);
          setLoading(false);
          console.log(res);
        }
      );
    }
    setInputValue(inputValueCapitalized);
  };
  const handleValueChange = (newValue: string | null) => {
    setValue(newValue);
    const underscoredValue = newValue?.replaceAll("_", "") || "";
    getSearchedUser(underscoredValue);
  };

  return (
    <Autocomplete
      value={value}
      size="small"
      title="ІМ'Я КОРИСТУВАЧА"
      onChange={(event: any, newValue: string | null) => {
        handleValueChange(newValue);
      }}
      noOptionsText={
        inputValue
          ? loading
            ? "ЗАГРУЗКА"
            : inputValue.length < 3
            ? "ПРОДОВЖУЙТЕ ВВІД"
            : "НЕ ЗНАЙДЕНО"
          : "ВВЕДІТЬ ІМ'Я"
      }
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        handleInputValueChange(newInputValue);
      }}
      id="controllable-states-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="ПОШУК ПО ІМЕНІ" />}
    />
  );
};

export default SimpleAutocomplete;
