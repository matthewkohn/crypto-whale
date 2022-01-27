import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={6} md={6}>
          <Link to="/">
            <Paper elevation={5} style={{height: "5vh", textAlign: 'center'}}>
              <h2>PORTFOLIO</h2>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={6} md={6}>
          <Link to="/coins">
            <Paper elevation={5} style={{height: "5vh", textAlign: 'center'}}>
              <h2>CRYPTOCURRENCIES</h2>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
