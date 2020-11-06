import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";

import styles from "./styles";
import FormElement from "../../components/formElement/FormElement";

const AddBoulder = () => {
  const [formData, setFormData] = useState({
    name: "",
    locationName: "",
    grade: "",
    completed: false,
    completionDate: null,
  });

  const classes = styles();

  const handleTextChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleDateChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: new Date(value).getTime() / 1000,
    });
  };

  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Add a Boulder
      </Typography>
      <FormElement
        label="Boulder Name"
        name="name"
        value={formData.name}
        handleChange={handleTextChange}
      />
      <FormElement
        label="Boulder Location"
        name="locationName"
        value={formData.locationName}
        handleChange={handleTextChange}
      />
      <FormElement
        label="Boulder Grade"
        name="grade"
        value={formData.grade}
        handleChange={handleTextChange}
        variant="dropdown"
      />
      <FormElement
        label="Completed"
        name="completed"
        value={formData.completed}
        handleChange={handleToggle}
        variant="toggle"
      />
      {formData.completed ? (
        <FormElement
          label="Completion Date"
          name="completionDate"
          value={formData.completionDate}
          handleChange={handleDateChange}
          variant="date"
        />
      ) : null}
    </>
  );
};

export default AddBoulder;
