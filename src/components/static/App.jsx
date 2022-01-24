import React from "react";
import Navbar from "../navigation/Navbar";
import Portfolio from "../portfolio/Portfolio";
import CoinList from "../coin/CoinList";
import Transact from "../coin/Transact";
import Coin from "../coin/Coin";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/coins" element={<CoinList />} />
        <Route path="/coins/{id}" element={
          <>
            <Transact />
            <Coin />          
          </>
        } />
      </Routes>      
    </Router>
  );
}

export default App;
