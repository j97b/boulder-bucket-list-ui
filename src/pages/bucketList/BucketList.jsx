import React from 'react';
import { Typography } from '@material-ui/core';

import styles from './styles';

const BucketList = () => {
    const classes = styles();

    return (
        <Typography variant='h2' className={classes.heading}>Bucket List</Typography>
    );
};

export default BucketList;