export default function rows(coins) {
  return coins.map((coin) => {
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
}