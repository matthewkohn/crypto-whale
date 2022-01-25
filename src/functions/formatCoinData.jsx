export default function formatCoinData(coin) {
  const imageUrl = coin.image;
  const id = coin.id;
  const name = coin.name;
  const symbol = (coin.symbol).toUpperCase();
  const price = formatPrice(coin.current_price);
  const rank = coin.market_cap_rank;
  const high = formatPrice(coin.high_24h);
  const low = formatPrice(coin.low_24h);
  const changePercent = (coin.price_change_percentage_24h / 100).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
  const marketCap = `$${(coin.market_cap / 1000000).toFixed(3)} million`;
  const sparklineData = coin.sparkline_in_7d.price;
  
  return [ imageUrl, id, name, symbol, price, rank, high, low, changePercent, marketCap, sparklineData ];
}

const formatPrice = (price) => {
  return price.toLocaleString(undefined, { style: "currency", currency: "USD" });
}
