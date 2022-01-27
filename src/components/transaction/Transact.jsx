import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from '@mui/material';

const Transact = ({ coin, cash, handleSetCash }) => {
  const [ownedCoin, setOwnedCoin] = useState({});
  const [amountToTransact, setAmountToTransact] = useState('');
  const [tradeQty, setTradeQty] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3001/coins?coinId=${coin.id}`)
      .then((res) => res.json())
      .then((data) => data === undefined ? setOwnedCoin({}) : setOwnedCoin(data[0]))
      .catch(() => {
        console.log(`You don't own ${coin.id} yet`);
      })
    }, [coin.id]);
  
  console.log(ownedCoin)
  console.log(`Amount to transact: ${parseFloat(amountToTransact)}`)
  console.log(tradeQty);
  console.log(`Current price of ${coin.name}: ${coin.current_price}`)

  const handleTradeQty = () => {
    const qty = (parseFloat(amountToTransact) / coin.current_price).toFixed(6) * 10;
    setTradeQty(qty);
  }



  const exampleData = {
      coinId: "cardano",
      quantity: 2000,
      value: 100000
  }

  const handlePost = () => {
    fetch('http://localhost:3001/coins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(exampleData)
    })
      .then((res) => res.json())
      .then(console.log)
  }

  const handleValueChange = (e) => {
    setAmountToTransact(e.target.value);
    handleTradeQty();
  }

  return (
    <>
      <h2>Trade {coin.name}</h2>
      <h4>Cash available to trade: {cash}</h4>
      <FormControl fullWidth sx={{ m: 1, width: '80%' }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={amountToTransact}
          onChange={handleValueChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
          size="medium"
        />
        <h4>Quantity: {tradeQty}</h4>

        <Button onClick={() => handlePost()} variant="contained">Buy</Button>
        <Button variant="contained">Sell</Button>
      </FormControl>
      <h2>Your Portfolio</h2>
      <h4>Number of { coin.name } Owned: { ownedCoin ? ownedCoin.quantity : 0 }</h4>
      <h4>Current Value: ${ ownedCoin ? ownedCoin.value : 0 }</h4>
    </>
  );
};

export default Transact;
