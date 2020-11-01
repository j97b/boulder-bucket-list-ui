import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";

import styles from "./styles";
import BoulderCard from "../../components/boulderCard/BoulderCard";

const BucketList = () => {
  const [boulders, setBoulders] = useState([]);
  const classes = styles();

  useEffect(() => {
    axios
      .get("http://3.9.14.244:3000/boulders/")
      .then((res) => setBoulders(res.data));
  });

  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Bucket List
      </Typography>
      {boulders.map((boulder) => (
        <BoulderCard
          name={boulder.name}
          location={boulder.locationName}
          grade={boulder.grade}
          completed={boulder.completed}
          completionDate={boulder.completionDate}
        />
      ))}
    </>
  );
};

export default BucketList;
