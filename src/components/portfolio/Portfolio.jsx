import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [likedCoins, setLikedCoins] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/coins')
      .then((res) => res.json())
      .then((coins) => setLikedCoins(coins))
  }, []);

  console.log(likedCoins); // map list cards for each liked coin
  

  return (
    <div>Portfolio Component</div>
  );
};

export default Portfolio;
