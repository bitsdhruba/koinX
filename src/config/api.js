const APIKEY = "CG-XBVkinVyfp6UkibhTbo5tDva";

export const coinslistdata = () =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h?x_cg_demo_api_key=CG-XBVkinVyfp6UkibhTbo5tDva`;

export const trendingCoindata = () =>
  `https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-XBVkinVyfp6UkibhTbo5tDva`;

export const singleCoinDetail = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false?x_cg_demo_api_key=CG-XBVkinVyfp6UkibhTbo5tDva`;
