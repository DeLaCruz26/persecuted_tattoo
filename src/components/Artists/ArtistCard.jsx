import React, { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import useStyles from './styles'
import { Grow } from '@material-ui/core';
import ArtistModal from './ArtistModal';

const ArtistCard = ({ artist, position }) => {
  const classes = useStyles();
  const [modal, setModal] = useState(false)

  const handleOpenModal = () => {
      setModal(true)
  }

  return (
        <Grow in={position}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={artist.image}
                title="Artist Image"
                onClick={() => handleOpenModal(artist.id)}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.artsistName} onClick={() => handleOpenModal(artist.id)}>
                    {artist.name}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" className={classes.button} onClick={() => handleOpenModal(artist.id)}>
                See More
                </Button>
            </CardActions>
            <ArtistModal trigger={modal} setTrigger={setModal}>
                <div className={classes.modalArtistName}>
                    <div>
                        {artist.name}
                    </div>
                    <div>
                        <p className={classes.modalArtistDesc}>{artist.description}</p>
                    </div>
                    <div className={classes.modalArtistImage}>
                        <img src={artist.image} width='600px' height='600px' />
                    </div>
                </div>
            </ArtistModal>
            </Card>
        </Grow>
  );
}

export default ArtistCard