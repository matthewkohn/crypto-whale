import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import columns from '../../functions/helper/columns';
import rows from '../../functions/helper/rows';

const CoinList = ({ coins, isLoaded }) => {

  let navigate = useNavigate();

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      {isLoaded ? 
        <DataGrid
          rows={rows(coins)}
          columns={columns()}
          hideFooter
          onRowClick={(params) => navigate(`/coins/${params.id}`)}
        />
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default CoinList
