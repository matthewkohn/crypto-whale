import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
// import { Link } from 'react-router-dom';
import columns from '../../functions/columns';

const CoinList = ({ id }) => {
  const [coins, setCoins] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank&per_page500&page=1&sparkline=true')
      .then((res) => res.json())
      .then(data => {
        setCoins(data);
        setIsLoaded(true);
      })
  }, []);

  // useEffect(() => {
  //   fetch()
  //     .then((res) => res.json())
  //     .then(data => console.log(data))
  // }, [selections])

  
  /*
"https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615"
"https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615"
  */
  const rows = coins.map((coin) => {
    return {
      id: coin.id,
      rank: coin.market_cap_rank,
      image: coin.image,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      price: `$${coin.current_price.toFixed(2).toLocaleString()}`,
      change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
    }
  });

  console.log(coins);
  console.log(selections)

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      CoinList Component
      {isLoaded ? 
        <DataGrid
          rows={rows}
          columns={columns()}
          pageSize={100}
          rowsPerPageOptions={[100]}
          // checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(checked) => {
            setSelections(checked);
          }}
          selectionModel={selections}
        />
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default CoinList
