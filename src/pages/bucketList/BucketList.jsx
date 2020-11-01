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
      <BoulderCard
        name="Girl On Our Mind"
        location="Rocklands (South Africa)"
        grade="6C+"
        completed="true"
        completionDate="23/02/2019"
      />
    </>
  );
};

export default BucketList;
