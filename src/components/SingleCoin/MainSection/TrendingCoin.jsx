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
    <div className=" rounded-lg shadow-md p-3">
      <h1 className="text-2xl m-2 font-bold">Trending Coins (24HR)</h1>
      <div>
        {load ? (
          <Loader />
        ) : (
          <div>
            {trending.map((coin) => {
              return (
                <div
                  className="border-b border-slate-400 mb-2 my-2 py-2"
                  key={coin.item.id}
                >
                  <Link to={`/coin/${coin.item.id}`}>
                    <div className="flex justify-between items-center h-fit ">
                      <div className="flex items-center">
                        <img
                          src={coin.item.small}
                          alt={coin.item.name}
                          className="size-8 bg-cover rounded-full m-2"
                        />
                        <div className="flex items-center">
                          <span className="text-lg font-medium">
                            {coin.item.name}
                          </span>
                          <span className="text-lg font-medium uppercase">
                            ({coin.item.symbol})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        ) < 0 ? (
                          <span className="text-md px-1 bg-red-200 rounded-lg text-red-600">
                            🔻
                            {coin.item.data.price_change_percentage_24h.usd.toFixed(
                              2
                            )}{" "}
                            %
                          </span>
                        ) : (
                          <span className="text-md px-1 bg-green-200 text-green-600 rounded-lg flex items-center">
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
