import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";

import styles from "./styles";
import BoulderCard from "../../components/boulderCard/BoulderCard";
import grades from "../../utils/grades";

const BucketList = () => {
  const [boulders, setBoulders] = useState([]);
  const classes = styles();

  useEffect(() => {
    axios
      .get("http://3.9.14.244:3000/boulders/userId/test")
      .then((res) => setBoulders(res.data));
  });

  const deleteBoulder = (e, id) => {
    axios.delete(`http://3.9.14.244:3000/boulders/boulderId/${id}`);
  };

  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Bucket List
      </Typography>
      {boulders.map((boulder) => (
        <BoulderCard
          key={boulder._id}
          id={boulder._id}
          name={boulder.name}
          location={boulder.locationName}
          grade={grades[boulder.grade]}
          completed={boulder.completed}
          completionDate={new Date(
            boulder.completionDate * 1000
          ).toLocaleDateString("en-GB")}
          deleteBoulder={deleteBoulder}
        />
      ))}
    </>
  );
};

export default BucketList;
