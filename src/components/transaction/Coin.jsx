import React from 'react';
import { useParams } from 'react-router-dom';
import formatCoinData from '../../functions/formatCoinData';


const Coin = ({ coins }) => {
  const param = useParams();
  const coin = coins.filter(coin => coin.id === param.id)[0];
  const [ imageUrl, id, name, symbol, price, rank, high, low, changePercent, marketCap ] = formatCoinData(coin);
  
  return (
    <div>
      <img src={imageUrl} alt={id} />
      <h2>{name}</h2>
      <p>{symbol}</p>
      <h3>{price}</h3>
      <ul>
        <li>Market Cap: {marketCap}</li>
        <li>Market Cap Rank: #{rank}</li>
        <li>24-hour High: {high}</li>
        <li>24-hour Low: {low}</li>
        <li>24-hour Change: {changePercent}</li>
      </ul>
    </div>
  );
};

export default Coin;
