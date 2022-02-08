import React from 'react';
import LikedCoin from './LikedCoin';

const Portfolio = ({ likedCoins, onUpdatePortfolio }) => {

  const deleteCoin = (id) => {
    const updatedCoins = likedCoins.filter((coin) => coin.id !== id);
    onUpdatePortfolio(updatedCoins);
  }

  const likedCoinsList = likedCoins.map((coin) => (
    <LikedCoin key={coin.id} coin={coin} onDeleteCoin={deleteCoin} />
  ));

  return (
    <div>{likedCoinsList}</div>
  );
};

export default Portfolio;
