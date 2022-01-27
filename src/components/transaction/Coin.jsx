import React from 'react';

import formatCoinData from '../../functions/data/formatCoinData';


const Coin = ({ coin }) => {
  
  const [ imageUrl, id, name, symbol, price, rank, high, low, changePercent, marketCap ] = formatCoinData(coin);
  
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
    </>
  );
};

export default Coin;
