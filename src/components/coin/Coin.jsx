import React from 'react';
import { useParams } from 'react-router-dom';
import formatCoinData from '../../functions/formatCoinData';

const Coin = ({ coins }) => {
  const param = useParams();
  const coin = coins.filter(coin => coin.id === param.id)[0];
  const [ imageUrl, id, name, symbol, price, rank, high, low, changePercent, marketCap, sparkline ] = formatCoinData(coin);

  console.log(imageUrl, id, name, symbol, price, rank, high, low, changePercent, marketCap, sparkline )
  
  return (
    <div>
      Coin Component
      {/* <img src={coin.image} alt={coin.id} />
      <h2>{coin.name}</h2>
      <p>{coin.symbol}</p>
      <h3>${coin.current_price.toFixed(2)}</h3>
      <ul>
      {/* <li>{coin.}</li> */}
      {/* </ul>  */}
    </div>
  );
};

export default Coin;
