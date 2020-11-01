import React from 'react';
import { Typography } from '@material-ui/core';

import styles from './styles';

const Home = () => {
    const classes = styles();

    return (
        <>
            <Typography className={classes.heading} variant='h1'>Boulder Bucket List</Typography>
            <Typography className={classes.body}>
                Welcome to the Boulder Bucket List! You can use this site to record boudlers around the world you would love to do, and store all your old favourites.
            </Typography>
            <Typography className={classes.body}>
                Get started by adding your first boulder.
            </Typography>
        </>
    );
};

export default Home;