import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import columns from '../../functions/columns';
import rows from '../../functions/rows';

const CoinList = ({ id }) => {
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


  console.log(coins);

  let navigate = useNavigate();

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      CoinList Component
      {isLoaded ? 
        <DataGrid
          rows={rows(coins)}
          columns={columns()}
          hideFooter
          onRowClick={(params: GridRowParams) => navigate(`/coins/${params.id}`)}
        />
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default CoinList
