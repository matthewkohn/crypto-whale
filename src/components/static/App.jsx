import React, { useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import Portfolio from "../portfolio/Portfolio";
import CoinList from "../coin/CoinList";
import Transact from "../coin/Transact";
import Coin from "../coin/Coin";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank&per_page500&page=1&sparkline=true')
      .then((res) => res.json())
      .then(data => {
        setCoins(data);
        setIsLoaded(true);
      })
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio coins={coins} />} />
        <Route path="/coins" element={<CoinList coins={coins} isLoaded={isLoaded} />} />
        <Route path="/coins/:id" element={
          <>
            <Transact />
            <Coin coins={coins} />          
          </>
        } />
      </Routes>      
    </Router>
  );
}

export default App;
