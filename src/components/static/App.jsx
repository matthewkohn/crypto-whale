import React, { useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import Portfolio from "../portfolio/Portfolio";
import CoinList from "../coin-list/CoinList";
import Transaction from "../transaction/Transaction";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from "@mui/material";

const headerStyle = {
  height: '80px',
  background: '#00bdcc',
  margin: '10 0 0',
  borderRadius: 10,
  textAlign: 'center',
  padding: 5,
  color: '#fff'
}

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cash, setCash] = useState(1000000);

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
      <Container >
        <header style={headerStyle}>
          <h1>CRYPTO WHALE</h1>
        </header>
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio coins={coins} cash={cash} />} />
          <Route path="/coins" element={<CoinList coins={coins} isLoaded={isLoaded} />} />
          <Route path="/coins/:id" element={<Transaction coins={coins} cash={cash} handleCash={setCash} />} />
        </Routes>  
      </Container>
    </Router>

  );
}

export default App;
