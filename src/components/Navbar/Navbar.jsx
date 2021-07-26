import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
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
    );
}

export default Navbar;
