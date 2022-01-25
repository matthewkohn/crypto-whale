export default function formatCoinData(coin) {
  const imageUrl = coin.image;
  const id = coin.id;
  const name = coin.name;
  const symbol = coin.symbol;
  const price = formatPrice(coin.current_price);
  const rank = coin.market_cap_rank;
  const high = formatPrice(coin.high_24h);
  const low = formatPrice(coin.low_24h);
  const changePercent = (coin.price_change_percentage_24h / 100).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
  const marketCap = `$${(coin.market_cap / 1000000).toFixed(3)} million`;
  const sparkline = coin.sparkline_in_7d;
  
  return [ imageUrl, id, name, symbol, price, rank, high, low, changePercent, marketCap, sparkline ];
}

const formatPrice = (price) => {
  return price.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

// imageUrl, id, name, symbol, price, high, low, changePercentage, marketCap, rank, sparkline

/*
ath: 69045
ath_change_percentage: -46.62105
ath_date: "2021-11-10T14:24:11.849Z"
atl: 67.81
atl_change_percentage: 54251.74033
atl_date: "2013-07-06T00:00:00.000Z"
circulating_supply: 18939850
current_price: 36778
fully_diluted_valuation: 774790450707
high_24h: 37542
id: "bitcoin"
image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
last_updated: "2022-01-25T20:33:19.596Z"
low_24h: 35707
market_cap: 698781662754
market_cap_change_24h: 9497353641
market_cap_change_percentage_24h: 1.37786
market_cap_rank: 1
max_supply: 21000000
name: "Bitcoin"
price_change_24h: 498.23
price_change_percentage_24h: 1.3733
roi: null
sparkline_in_7d: {price: Array(168)}
symbol: "btc"
total_supply: 21000000
total_volume: 47406407137
*/