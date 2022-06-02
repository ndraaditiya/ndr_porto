import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

export default function CardContainer() {
  return (
    <Card sx={{ minWidth: 175, borderRadius: 5 }}>
      <CardMedia
        component="img"
        height="100"
        image='./picture.jpg'
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Dayyyyy
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
        </Typography>
      </CardContent>
    </Card>
  );
}
