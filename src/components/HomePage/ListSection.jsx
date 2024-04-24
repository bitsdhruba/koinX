import axios from "axios";
import { useEffect, useState } from "react";
import { coinslistdata } from "../../config/api";
import Loader from "../Loader/Loader";
import CoinList from "./CoinList";

const ListSection = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoin = async () => {
    setLoading(true);
    const { data } = await axios.get(coinslistdata());
    setCoin(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className=" px-3 w-full">
      <div className="">
        <h1 className="text-center text-3xl my-8 bg-[#0052FE] text-white p-4 rounded-lg font-sans border-b border-slate-300 shadow-lg uppercase">
          Trending Crypto Currencies
        </h1>
        <div>
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <div className="my-4">
              <ul>
                {coin.map((coindata) => {
                  return <CoinList key={coindata.id} coindata={coindata} />;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListSection;
