import React from 'react';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import styles from './styles';
import { AccountCircleRounded } from '@material-ui/icons';

const Navbar = () => {
    const classes = styles();
    
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>Boulder Bucket List</Typography>
                    <Button color='inherit' className={classes.button}>Bucket List</Button>
                    <Button color='inherit' className={classes.button}>Map</Button>
                    <Button color='inherit' className={classes.button}>Add Boulder</Button>
                    <IconButton color='inherit'>
                        <AccountCircleRounded /> 
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navbar;