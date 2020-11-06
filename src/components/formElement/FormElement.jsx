import React from "react";
import {
  TextField,
  Typography,
  Box,
  Checkbox,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import styles from "./styles.js";
import grades from "../../utils/grades";
import { DatePicker } from "@material-ui/pickers";
import { Today } from "@material-ui/icons";

const FormElement = (props) => {
  const classes = styles();

  const variantSwitch = (variant) => {
    switch (variant) {
      case "text":
      default:
        return (
          <TextField
            name={props.name}
            variant="outlined"
            onChange={props.handleChange}
            value={props.value}
            required
          />
        );
      case "dropdown":
        return (
          <Select
            name={props.name}
            variant="outlined"
            onChange={props.handleChange}
            value={grades[props.value] || ""}
            className={classes.select}
            required
          >
            {grades.map((value, key) => {
              return (
                <MenuItem key={key} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        );
      case "toggle":
        return (
          <Checkbox
            name={props.name}
            onChange={props.handleChange}
            checked={props.value}
          />
        );
      case "date":
        return (
          <DatePicker
            className={classes.date}
            // disableFuture
            variant="inline"
            inputVariant="outlined"
            format="dd/MM/yyyy"
            onChange={(value) => props.handleChange(value, props.name)}
            value={props.value * 1000}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Today />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        );
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4">{props.label}</Typography>
      {variantSwitch(props.variant)}
    </Box>
  );
};

export default FormElement;
