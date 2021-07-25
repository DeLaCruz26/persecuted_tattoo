import React from 'react';
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import ArtistCard from './ArtistCard';
import artists from '../../static/artists'
import useWindowPosition from '../../hook/windowPosition';

const Artists = () => {
    const classes = useStyles()
    const position = useWindowPosition('header') 
    return (

        <div className={classes.root} id="artists">
            <Grid className={classes.container}>
                {artists.map((artist) => (
                    <Grid item key={artist.id}>
                            <ArtistCard artist={artist} position={position} />
                    </Grid>
                ))}
            </Grid>
        </div>

    );
}

export default Artists;
