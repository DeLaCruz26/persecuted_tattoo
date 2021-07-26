import React, { useState, useEffect } from 'react';
import { Typography, IconButton, CssBaseline, Collapse } from '@material-ui/core';
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
            <Collapse in={checked} { ...(checked ? { timeout: 1000} : {})} collapsedSize={50}>
                <div className={classes.container}>
                    <Typography className={classes.title}>PERSECUTED</Typography>
                    <Typography className={classes.subTitle}>TATTOO</Typography>
                    <img 
                    src={logo} 
                    alt='Persecuted Tattoo' 
                    height='350px' 
                    width='250px' 
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
