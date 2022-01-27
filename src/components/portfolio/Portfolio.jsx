import React from 'react';
import PortfolioSummary from './PortfolioSummary';
import PortfolioList from './PortfolioList';
import { Grid, Paper } from '@mui/material';

const Portfolio = ({ cash }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4} md={4}>
        <Paper elevation={3} style={{height: "70vh"}}>
          <PortfolioSummary cash={cash} />
        </Paper>
      </Grid>
      <Grid item xs={8} md={8}>
        <Paper elevation={3} style={{height: "70vh"}}>
          <PortfolioList />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
