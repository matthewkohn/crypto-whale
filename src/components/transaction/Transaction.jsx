import React from 'react';
import Coin from './Coin';
import Transact from './Transact';
import { useParams } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';

const Transaction = ({ coins, cash, handleCash }) => {
  const param = useParams();
  const coin = coins.filter(coin => coin.id === param.id)[0];

  return (
    <Grid container spacing={3}>
      <Grid item xs={8} md={8}>
        <Paper elevation={3} style={{height: "70vh"}}>
          <Coin coin={coin} />
        </Paper>
      </Grid>
      <Grid item xs={4} md={4}>
        <Paper elevation={3} style={{height: "70vh"}}>
          <Transact coin={coin} cash={cash} handleCash={handleCash}/>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Transaction;
