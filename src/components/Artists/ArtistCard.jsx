import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import { Grow } from '@material-ui/core';

const ArtistCard = ({ artist, position }) => {
  const classes = useStyles();

  return (
        <Grow in={position}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={artist.image}
                title="Artist Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.artsistName}>
                    {artist.name}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" className={classes.button}>
                Learn More
                </Button>
            </CardActions>
            </Card>
        </Grow>
  );
}

export default ArtistCard