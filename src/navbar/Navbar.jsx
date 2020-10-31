import React from 'react';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import styles from './styles';
import { AccountCircleRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = styles();
    
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Link to='/'>
                        <Typography variant='h6' className={classes.title}>Boulder Bucket List</Typography>
                    </Link>
                    <Link to='/bucketList'>
                        <Button color='inherit' className={classes.button}>Bucket List</Button>
                    </Link>
                    <Link to='/map'>
                        <Button color='inherit' className={classes.button}>Map</Button>
                    </Link>
                    <Link to='/addBoulder'>
                    <Button color='inherit' className={classes.button}>Add Boulder</Button>
                    </Link>
                    <IconButton color='inherit'>
                        <AccountCircleRounded /> 
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navbar;