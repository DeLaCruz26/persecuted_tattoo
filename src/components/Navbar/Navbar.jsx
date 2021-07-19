import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, CssBaseline } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import useStyles from './styles'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.wrapper}>
                    <div>
                        <h2>Persecuted Tattoo</h2>
                    </div>
                    <div className={classes.grow} />
                    <Typography className={classes.logo}>
                        <img src={logo} alt='Persecuted logo' height='80px' width='80px' className={classes.image} />
                    </Typography>
                    <div>
                        <IconButton>
                            <MenuRoundedIcon className={classes.icon} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
