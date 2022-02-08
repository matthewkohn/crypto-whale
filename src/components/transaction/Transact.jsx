import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Transact = ({ coin, cash, handleCash }) => {
  const [ownedCoin, setOwnedCoin] = useState({});
  const [buyInput, setBuyInput] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [tradeQty, setTradeQty] = useState(0);
  const [transactObj, setTransactObj] = useState({
    coinId: '',
    quantity: 0,
    value: 0
  })
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/coins?coinId=${coin.id}`)
      .then((res) => res.json())
      .then((data) => data === undefined ? setOwnedCoin({}) : setOwnedCoin(data[0]))
      .catch(() => {
        console.log(`You don't own ${coin.id} yet`);
      })
    }, [coin.id]);

  useEffect(() => {
    const currentQty = parseFloat((buyInput / coin.current_price).toFixed(6));
    setTradeQty(currentQty);
  }, [buyInput, coin]);
  
  useEffect(() => {
    const currentTransactionObj = {
      coinId: coin.id,
      quantity: tradeQty + ownedCoin.quantity,
      value: (coin.current_price * tradeQty) + ownedCoin.value
    }
    setTransactObj(currentTransactionObj)
  }, [coin, tradeQty, ownedCoin]);

  const updateTransaction = (buy) => {
    if (cash < buyInput || ownedCoin.value < sellAmount) {
      console.log("Errorrrrrr")
      return;
    }
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
  
  const handleClick = (buy) => {
 
    if (ownedCoin === undefined) {
      postTransaction();
    } else {
      handleCash(cash - buyInput);
      updateTransaction(buy);
    }
    navigate('/');
  }

  return (
    <>
      <h2>Trade {coin.name}</h2>
      <h4>Cash available to trade: ${cash.toLocaleString()}</h4>
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
          type="text"
          value={buyInput}
          onChange={(e) => setBuyInput(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ max: {cash}, min: 0, inputMode: 'numeric', pattern: '[0-9]*' }}
          // inputProps={{ max: `${cash}` }}
        />
          <Button onClick={(buy) => handleClick(buy)} variant="contained">Buy</Button>
        <TextField
          id="outlined-number"
          label="Amount"
          type="number"
          value={sellAmount}
          onChange={(e) => setSellAmount(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <input type="number" max={cash} min='0' />
        <Button onClick={(buy) => handleClick(!buy)} variant="contained">Sell</Button>
        <h4>Quantity: {tradeQty}</h4>
      </Box>
    

      <h2>Your Portfolio</h2>
      <h4>{ coin.name } Owned: { ownedCoin ? ownedCoin.quantity : 0 }</h4>
      <h4>Current Value: ${ ownedCoin ? ownedCoin.value : 0 }</h4>
    </>
  );
};

export default Transact;
