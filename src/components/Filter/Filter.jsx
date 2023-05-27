import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filtersSlice";
import { getFilter } from "redux/selectors";
import { Box, TextField } from "@mui/material";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChangeFilter = event => {
        dispatch(setFilter(event.currentTarget.value.toLowerCase()));
      };

    

    return(
        <Box>
        <TextField
            margin="normal"
            fullWidth
            id="filter"
            label="Filter contacts by name"
            autoFocus
            type="text"
            name="filter"
            value={filter}
            onChange={handleChangeFilter}
        />
    </Box>
    )
};

export default Filter;
