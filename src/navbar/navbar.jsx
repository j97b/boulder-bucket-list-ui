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
                    <Button color='inherit'>Bucket List</Button>
                    <Button color='inherit'>Map</Button>
                    <Button color='inherit'>Add Boulder</Button>
                    <IconButton color='inherit'>
                        <AccountCircleRounded /> 
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navbar;