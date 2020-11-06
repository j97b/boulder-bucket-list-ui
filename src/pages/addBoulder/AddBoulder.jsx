import React, { useState } from "react";
import { Button, Snackbar, Typography } from "@material-ui/core";
import axios from "axios";

import styles from "./styles";
import FormElement from "../../components/formElement/FormElement";
import grades from "../../utils/grades";
import { Alert } from "@material-ui/lab";

const AddBoulder = () => {
  const initialFormData = {
    name: "",
    locationName: "",
    grade: "",
    completed: false,
    completionDate: null,
    userId: "test",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const classes = styles();

  const handleTextChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: grades.indexOf(e.target.value),
    });
  };

  const handleToggle = (e) => {
    setFormData({
      ...formData,
      completed: e.target.checked,
      completionDate: e.target.checked
        ? Math.floor(new Date().getTime() / 1000)
        : null,
    });
  };

  const handleDateChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: new Date(value).getTime() / 1000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://3.9.14.244:3000/boulders/", formData)
      .then((res) => {
        console.log(res);
        setAlert({
          open: true,
          severity: "success",
          message: res.data.message,
        });
        setFormData(initialFormData);
      })
      .catch((err) => {
        setAlert({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
      });
  };

  const handleClose = (e, reason) => {
    if (reason !== "clickaway") {
      setAlert({
        open: false,
        severity: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Add a Boulder
      </Typography>
      <form onSubmit={handleSubmit}>
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
          handleChange={handleSelectChange}
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
        <Button type="submit">Submit</Button>
      </form>
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={alert.severity}>{alert.message}</Alert>
      </Snackbar>
    </>
  );
};

export default AddBoulder;
