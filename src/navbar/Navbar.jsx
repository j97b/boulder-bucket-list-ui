import React from 'react';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import styles from './styles';
import { AccountCircleRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = styles();
    
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <div>
                        <Typography variant='h5' className={classes.title} component={Link} to='/'>Boulder Bucket List</Typography>
                    </div>
                    <Button color='inherit' className={classes.button} component={Link} to='/bucketList'>Bucket List</Button>
                    <Button color='inherit' className={classes.button} component={Link} to='/map'>Map</Button>
                    <Button color='inherit' className={classes.button} component={Link} to='/addBoulder'>Add Boulder</Button>
                    <IconButton color='inherit'>
                        <AccountCircleRounded /> 
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navbar;