import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import useStyles from "../../styles";

const SearchBox = (props) => {
    const classes = useStyles();

  return (
    <Box className={classes.searchBox}>
        <TextField
          placeholder="Search"
              className={classes.searchBoxTextField}
              onChange={(e) => props.updateSearchString(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
  );
};

export default SearchBox;
