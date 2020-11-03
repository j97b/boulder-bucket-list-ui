import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";

import styles from "./styles";
import FormElement from "../../components/formElement/FormElement";

class AddBoulder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      locationName: "",
      grade: "",
      completed: false,
      completionDate: null,
    };
  }

  handleTextChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleToggle = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.checked,
    });
  };

  handleDateChange = (value, name) => {
    this.setState({
      ...this.state,
      [name]: new Date(value).getTime() / 1000,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography variant="h2" className={classes.heading}>
          Add a Boulder
        </Typography>
        <FormElement
          label="Boulder Name"
          name="name"
          value={this.state.name}
          handleChange={this.handleTextChange}
        />
        <FormElement
          label="Boulder Location"
          name="locationName"
          value={this.state.locationName}
          handleChange={this.handleTextChange}
        />
        <FormElement
          label="Boulder Grade"
          name="grade"
          value={this.state.grade}
          handleChange={this.handleTextChange}
          variant="dropdown"
        />
        <FormElement
          label="Completed"
          name="completed"
          value={this.state.completed}
          handleChange={this.handleToggle}
          variant="toggle"
        />
        {this.state.completed ? (
          <FormElement
            label="Completion Date"
            name="completionDate"
            value={this.state.completionDate}
            handleChange={this.handleDateChange}
            variant="date"
          />
        ) : null}
      </>
    );
  }
}

AddBoulder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddBoulder);
