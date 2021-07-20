import React from 'react';
import useStyles from './styles'
import ArtistCard from './ArtistCard';

const Artists = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <ArtistCard />
        </div>
    );
}

export default Artists;
