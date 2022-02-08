import React from 'react';
import { Button, Card, CardHeader, CardMedia } from '@mui/material';

const LikedCoin = ({ coin, onDeleteCoin }) => {

  const handleDelete = () => {
    fetch(`http://localhost:3001/coins/${coin.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(onDeleteCoin(coin.id))
  }
  
  return (
    <Card sx={{ maxWidth: 300, margin: 5 }}>
      <CardHeader title={coin.name} />
      <CardMedia
        component="img"
        height="100"
        image={coin.imageUrl} 
        alt={coin.name}
      />
      <Button variant="contained" onClick={handleDelete} >Remove from Portfolio</Button>
    </Card>
    );
};

export default LikedCoin;
