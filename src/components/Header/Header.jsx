import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, CssBaseline, Collapse } from '@material-ui/core';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import useStyles from './styles'
import logo from '../../static/logo'
import { Link as Scroll } from 'react-scroll'

const Header = () => {
    const classes = useStyles()
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <div className={classes.root} id='header'>
            <CssBaseline />
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.wrapper}>
                    <div>
                        <IconButton>
                            <ArrowLeftRoundedIcon className={classes.menuIcon} />
                        </IconButton>
                        <nav className={classes.navBar}>
                            <ul className={classes.navbar}>
                                <li className={classes.navItem}>
                                    <a href='#' className={classes.navLink} >
                                        <span className={classes.linkText}>Artists</span>
                                    </a>
                                </li>
                                <li className={classes.navItem}>
                                    <a href='#' className={classes.navLink} >
                                        <span className={classes.linkText}>About Us</span>
                                    </a>
                                </li>
                                <li className={classes.navItem}>
                                    <a href='#' className={classes.navLink} >
                                        <span className={classes.linkText}>The Process</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} { ...(checked ? { timeout: 1000} : {})} collapsedSize={50}>
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
                    <Scroll to="artists" smooth={true}>
                        <IconButton>
                            <KeyboardArrowDownRoundedIcon className={classes.downArrow} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;
