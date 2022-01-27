import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from '@mui/material';

const Transact = ({ coin, cash, handleSetCash }) => {
  const [ownedCoin, setOwnedCoin] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/coins?coinId=${coin.id}`)
      .then((res) => res.json())
      .then((data) => data === undefined ? setOwnedCoin([]) : setOwnedCoin(data[0]))
      .catch(() => {
        console.log(`You don't own ${coin.id} yet`);
      })
    }, [coin.id]);
  
  console.log(ownedCoin)

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



  return (
    <>
      <h2>Trade {coin.name}</h2>
      <h4>Cash available to trade: {cash}</h4>
      <FormControl fullWidth sx={{ m: 1, width: '80%' }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          // value={values.amount}
          // onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
          size="medium"
        />
      </FormControl>
      <h4>Quantity: {/*some value */}</h4>
      <h4>Value: {/*some value */}</h4>
      <Button onClick={() => handlePost()} variant="contained">Buy</Button>
      <Button variant="contained">Sell</Button>
      <h2>Your Portfolio</h2>
      {/* <h4>Number of {coin.name} Owned: {ownedCoin}</h4> */}
      {/* <h4>Current Value: {ownedCoin}</h4> */}
    </>
  );
};

export default Transact;
