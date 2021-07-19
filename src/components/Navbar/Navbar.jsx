import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, CssBaseline } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import useStyles from './styles'
import logo from '../../assets/logo2.jpeg'

const Navbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.wrapper}>
                    <div>
                        <IconButton>
                            <MenuRoundedIcon className={classes.icon} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <Typography className={classes.title}>PERSECUTED</Typography>
                <Typography className={classes.subTitle}>TATTOO</Typography>
                <img 
                src={logo} 
                alt='Persecuted Tattoo' 
                height='400px' 
                width='300px' 
                className={classes.image}
                />
            </div>
        </div>
    );
}

export default Navbar;
