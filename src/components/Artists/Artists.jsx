import React from 'react';
import { Grid } from '@material-ui/core'
import useGridStyles from './styles'
import useStyles from './styles'
import ArtistCard from './ArtistCard';
import artists from '../../static/artists'

const Artists = () => {
    const gridStyles = useGridStyles()
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Grid classes={gridStyles} container spacing={4} wrap={'wrap'}>
                {artists.map((artist) => (
                    <Grid item key={artist.id}>
                        <ArtistCard artist={artist} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Artists;
