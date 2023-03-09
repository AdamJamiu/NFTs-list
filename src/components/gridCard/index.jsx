import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Stack } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import "./index.css"


const GridCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }} style={{ boxShadow: "0 0 20px #ccc" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="220"
                    image="https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom align="left" variant="p" component="p">
                        11
                    </Typography>
                    <Typography variant="h5" align="left" color="text.secondary">
                        1345
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <BoltIcon />
                <buttton>Buy now</buttton>
            </Stack>
        </Card>
    );
}

export default GridCard;