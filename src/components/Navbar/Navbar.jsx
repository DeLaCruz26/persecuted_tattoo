import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import useStyles from './styles'
import { Link as Scroll } from 'react-scroll'

const Navbar = () => {
    const classes = useStyles()

    const [toggleMenu, setToggleMenu] = useState(false)

    const handleClick = () => setToggleMenu(!toggleMenu)
    const closeMenu = () => setToggleMenu(false)


    return (
        <div className={classes.root}>
             <nav className={classes.navBar}>
                <IconButton onClick={handleClick}>
                    <ArrowLeftRoundedIcon className={toggleMenu ? classes.menuIconActive : classes.menuIcon} />
                </IconButton>
                <div>
                    <div className={toggleMenu ? classes.logoContainerActive : classes.logoContainer}>
                        <Scroll to="header" smooth={true}>
                            <a href='#' className={classes.logo} onClick={closeMenu}>
                                <div className={classes.logoName}>PERSECUTED</div>
                            </a>
                        </Scroll>
                    </div>
                </div>
                 <ul className={toggleMenu ? classes.navbarActive : classes.navbar}>
                    <li className={classes.navItem}>
                        <Scroll to="artists" smooth={true}>
                            <a href='#' className={classes.navLink} onClick={closeMenu}>
                                <span className={classes.linkText}>ARTISTS</span>
                            </a>
                        </Scroll>
                    </li>
                    <li className={classes.navItem}>
                        <Scroll to="about_us" smooth={true}>
                            <a href='#' className={classes.navLink} onClick={closeMenu}>
                                <span className={classes.linkText}>ABOUT US</span>
                            </a>
                        </Scroll>
                    </li>
                        <li className={classes.navItem}>
                            <a href='#' className={classes.navLink} onClick={closeMenu}>
                                <span className={classes.linkText}>THE PROCESS</span>
                            </a>
                        </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
