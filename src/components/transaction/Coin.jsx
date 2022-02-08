import React from 'react';
import formatCoinData from '../../functions/data/formatCoinData';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from '@mui/material';


const Coin = ({ coins, onAddCoin }) => {
  const param = useParams();
  const navigate = useNavigate();

  const coin = coins.filter((item) => item.id === param.id)[0];
  const [ imageUrl, id, name, symbol, price, rank, high, low, changePercent, marketCap ] = formatCoinData(coin);
  
  const handleClick = () => {
    
    fetch('http://localhost:3001/coins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, imageUrl })
    })
      .then((res) => res.json())
      .then((data) => onAddCoin(data))
    
    navigate('/');
  }
  

  return (
    <Card sx={{maxWidth: 800}}>
      <div style={{display: 'flex', padding: 40}}>
        <img src={imageUrl} alt={id} style={{ width: 80, height: 80, marginRight: 80 }}/>
        <div style={{background: '#DDD'}}>
          <p>{symbol}</p>
          <h2>{name}</h2>
          <h3>{price}</h3>
        </div>
      </div>
      <ul style={{ textAlign: 'center', listStyle: 'none'}}>
        <li>Market Cap: {marketCap}</li>
        <li>Market Cap Rank: #{rank}</li>
        <li>24-hour High: {high}</li>
        <li>24-hour Low: {low}</li>
        <li>24-hour Change: {changePercent}</li>
      </ul>    
      <Button variant="contained" onClick={handleClick} >Add to Portfolio</Button>
      <Button variant="contained" onClick={() => navigate('/coins')} >Back to List</Button>
    </Card>
  );
};

export default Coin;
