import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, CssBaseline } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import useStyles from './styles'
import logo from '../../assets/logo2.jpeg'

const Navbar = () => {
    const classes = useStyles()
    
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(true)
    },[])

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
                    height='300px' 
                    width='200px' 
                    className={classes.image}
                    />
                    <IconButton>
                        <KeyboardArrowDownRoundedIcon className={classes.downArrow} />
                    </IconButton>
                </div>
        </div>
    );
}

export default Navbar;
