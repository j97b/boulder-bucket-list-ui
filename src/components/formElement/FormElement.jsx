import React from "react";
import {
  TextField,
  Typography,
  Box,
  Checkbox,
  Select,
  MenuItem,
} from "@material-ui/core";

import styles from "./styles.js";
import grades from "../../utils/grades";

const FormElement = (props) => {
  const classes = styles();

  const variantSwitch = (variant) => {
    switch (variant) {
      case "text":
        return (
          <TextField
            name={props.name}
            variant="outlined"
            onChange={props.handleChange}
            value={props.value}
          />
        );
      case "dropdown":
        return (
          <Select
            name={props.name}
            variant="outlined"
            onChange={props.handleChange}
            value={grades[props.value]}
            className={classes.select}
          >
            {grades.map((value, key) => {
              return (
                <MenuItem key={key} value={key}>
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
        return <Typography>Date goes here</Typography>;
      default:
        return (
          <TextField
            name={props.name}
            variant="outlined"
            onChange={props.handleChange}
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
