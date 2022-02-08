import React from 'react';
import formatCoinData from '../../functions/data/formatCoinData';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';


const Coin = ({ coins }) => {
  const param = useParams();
  const coin = coins.filter((item) => item.id === param.id)[0];
  const [ imageUrl, id, name, symbol, price, rank, high, low, changePercent, marketCap ] = formatCoinData(coin);
  
  // onClick will:
  //  Post to db.json()
  //  Navigate to Portfolio
  //    Portfolio will update on mount

  return (
    <>
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
      <Button variant="contained" onClick={() => console.log("Ok Great")}>Contained</Button>
    </>
  );
};

export default Coin;
