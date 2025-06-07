import React from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { Associate } from "./associatesSlice";

interface ModityProps {
  associate: Associate;
}

const Modify: React.FC<ModityProps> = ({ associate }) => {
  return (
    <Box width="100%">
      <Typography variant="h6">Редагується {associate.name}</Typography>
      <Typography variant="body1" color="textSecondary">
        За один запит можна модифікувати не більше одного засвідчення
      </Typography>
      {/* <Autocomplete 
        options =
        renderInput={(params) => <TextField {...params} label="Movie" />}

      /> */}
    </Box>
  );
};

export default Modify;
