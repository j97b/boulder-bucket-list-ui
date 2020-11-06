import React from "react";
import { Box, Button, IconButton, Typography } from "@material-ui/core";

import styles from "./styles";
import { Create, Delete, MapOutlined, Room } from "@material-ui/icons";

const BoulderCard = (props) => {
  const classes = styles();

  const handleDelete = () => {
    props.deleteBoulder(props.id);
  };

  return (
    <Box className={classes.root} alignItems="center">
      <Box className={classes.nameAndLocation} alignItems="center">
        <MapOutlined className={classes.map} />
        <Box>
          <Typography className={classes.name}>{props.name}</Typography>
          <Box className={classes.location}>
            <Room />
            <Typography>{props.location}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.grade}>
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
        <Button>View Notes</Button>
        <IconButton>
          <Create />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <Delete className={classes.delete} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default BoulderCard;
