import React from 'react';

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import styles from './styles';

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
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navbar;