import React from "react";
import { Box, Card, Typography } from "@material-ui/core";

import styles from "./styles";
import { MapOutlined, Room } from "@material-ui/icons";

const BoulderCard = (props) => {
  const classes = styles();

  return (
    <Card className={classes.root}>
      <MapOutlined color="rgb(70 70 70)" className={classes.map} />
      <Box className={classes.nameAndLocation}>
        <Typography>{props.name}</Typography>
        <Typography>
          <Room />
          {props.location}
        </Typography>
      </Box>
    </Card>
  );
};

export default BoulderCard;
