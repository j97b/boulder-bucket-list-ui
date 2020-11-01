import React from "react";
import { Typography } from "@material-ui/core";

import styles from "./styles";
import BoulderCard from "../../components/boulderCard/BoulderCard";

const BucketList = () => {
  const classes = styles();

  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Bucket List
      </Typography>
      <BoulderCard name="Test" location="Location" />
    </>
  );
};

export default BucketList;
