import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const Transact = ({ coin, cash, handleSetCash }) => {
  const [ownedCoin, setOwnedCoin] = useState({});
  const [amount, setAmount] = useState('');
  const [tradeQty, setTradeQty] = useState(0);
  const [transactObj, setTransactObj] = useState({
    coinId: '',
    quantity: 0,
    value: 0
  })

  useEffect(() => {
    fetch(`http://localhost:3001/coins?coinId=${coin.id}`)
      .then((res) => res.json())
      .then((data) => data === undefined ? setOwnedCoin({}) : setOwnedCoin(data[0]))
      .catch(() => {
        console.log(`You don't own ${coin.id} yet`);
      })
    }, [coin.id]);

  useEffect(() => {
    const currentQty = parseFloat((amount / coin.current_price).toFixed(6));
    setTradeQty(currentQty);
  }, [amount, coin.current_price]);
  
  useEffect(() => {
    const currentTransactionObj = {
      coinId: coin.id,
      quantity: tradeQty,
      value: (coin.current_price * tradeQty)
    }
    setTransactObj(currentTransactionObj)
  }, [amount, coin.id, tradeQty, coin.current_price])
  

  console.log(typeof tradeQty)


  
  const updateTransaction = () => {
    fetch(`http://localhost:3001/coins/${ownedCoin.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactObj)
    })
    .then((res) => res.json())
    .then(console.log)
  }
  
  const postTransaction = () => {
    fetch('http://localhost:3001/coins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactObj)
    })
    .then((res) => res.json())
    .then(console.log)
  }
  
  const handleClick = () => {
    
    ownedCoin === undefined ? postTransaction() : updateTransaction();
    // console.log(transactObj)
  }

  return (
    <>
      <h2>Trade {coin.name}</h2>
      <h4>Cash available to trade: {cash}</h4>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
         <TextField
          id="outlined-number"
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <h4>Quantity: {tradeQty}</h4>
        <Button onClick={handleClick} variant="contained">Buy</Button>
        <Button onClick={handleClick} variant="contained">Sell</Button>
      </Box>
        

      <h2>Your Portfolio</h2>
      <h4>Number of { coin.name } Owned: { ownedCoin ? ownedCoin.quantity : 0 }</h4>
      <h4>Current Value: ${ ownedCoin ? ownedCoin.value : 0 }</h4>
    </>
  );
};

export default Transact;
