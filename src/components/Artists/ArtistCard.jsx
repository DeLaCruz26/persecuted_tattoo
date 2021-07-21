import React from 'react';
import { Typography, CardActionArea, Card, CardContent, CardMedia } from '@material-ui/core';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree'
import useStyles from './styles'

const ArtistCard = ({ artist }) => {
    const classes = useStyles()
    const mediaStyles = useFourThreeCardMediaStyles()
    return (
        <CardActionArea className={classes.actionArea}>
            <Card className={classes.card}>
                <CardMedia className={mediaStyles} image={artist.image} />
                <CardContent className={classes.content}>
                    <Typography className={classes.name}>
                        {artist.name}
                    </Typography>
                    <Typography className={classes.description}>See More</Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    );
}

export default ArtistCard;
