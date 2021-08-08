import React from 'react'
import useStyles from './styles'
import { IconButton } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

function ArtistModal(props) {
    const classes = useStyles()

    return (props.trigger) ? (
        <div className={classes.modal} onClick={() => props.setTrigger(false)}>
            <div className={classes.innerModal}>
                <IconButton className={classes.closeModal} onClick={() => props.setTrigger(false)}>
                    <CloseRoundedIcon  />
                </IconButton>
                {props.children}
            </div>
        </div>
    ) : ''
}

export default ArtistModal
