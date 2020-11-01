import React from "react";
import { Box, Card, IconButton, Typography } from "@material-ui/core";

import styles from "./styles";
import { Create, Delete, MapOutlined, Room } from "@material-ui/icons";

const BoulderCard = (props) => {
  const classes = styles();

  return (
    <Box className={classes.root} alignItems="center">
      <Box className={classes.nameAndLocation} alignItems="center">
        <MapOutlined color="rgb(70 70 70)" className={classes.map} />
        <Box>
          <Typography className={classes.name}>{props.name}</Typography>
          <Box className={classes.location}>
            <Room />
            <Typography>{props.location}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4">Grade: {props.grade}</Typography>
      </Box>
      <Box className={classes.completed} alignItems="center">
        {props.completed ? (
          <>
            <Typography variant="h4">Completed</Typography>
            <Typography className={classes.date}>
              {props.completionDate}
            </Typography>
          </>
        ) : (
          <Typography variant="h4">Not Completed</Typography>
        )}
      </Box>
      <Box className={classes.cardActions} alignItems="center">
        <Typography>View Notes</Typography>
        <IconButton>
          <Create />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
};

export default BoulderCard;
