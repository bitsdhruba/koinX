import axios from "axios";
import { useEffect, useState } from "react";
import { trendingCoindata } from "../../../config/api";
import Loader from "../../Loader/Loader";
import { RxTriangleUp } from "react-icons/rx";
import { Link } from "react-router-dom";

const TrendingCoin = () => {
  const [trending, setTrending] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchTrending = async () => {
    setLoad(true);

    const { data } = await axios.get(trendingCoindata());

    const trendingCoins = data.coins.slice(0, 3);

    setTrending(trendingCoins);

    setLoad(false);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className=" rounded-lg shadow-md m-6 p-3">
      <h1 className="text-2xl m-2 font-bold">Trending Coins (24HR)</h1>
      <div className="p-2">
        {load ? (
          <Loader />
        ) : (
          <div>
            {trending.map((coin) => {
              return (
                <div
                  className="border-b border-slate-400 text-xl mb-2 pb-2 p-2"
                  key={coin.item.id}
                >
                  <Link to={`/coin/${coin.item.id}`}>
                    <div className="flex justify-between items-center h-fit ">
                      <div className="flex items-center">
                        <img
                          src={coin.item.small}
                          alt={coin.item.name}
                          className="w-8 h-8 bg-cover rounded-full m-2"
                        />
                        <div className="flex items-center">
                          <span className="text-xl my-2 font-medium">
                            {coin.item.name}
                          </span>
                          <span className="text-xl font-medium uppercase">
                            ({coin.item.symbol})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        ) < 0 ? (
                          <span className="text-lg p-1 bg-red-200 rounded-lg text-red-600">
                            🔻
                            {coin.item.data.price_change_percentage_24h.usd.toFixed(
                              2
                            )}{" "}
                            %
                          </span>
                        ) : (
                          <span className="text-lg p-1 bg-green-200 text-green-600 rounded-lg flex items-center">
                            <RxTriangleUp />
                            {coin.item.data.price_change_percentage_24h.usd.toFixed(
                              2
                            )}{" "}
                            %
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingCoin;
