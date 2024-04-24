import { useEffect, useState } from "react";
import DetailSection from "../components/SingleCoin/DetailSection/DetailSection";
import MainSection from "../components/SingleCoin/MainSection/MainSection";
import axios from "axios";
import { singleCoinDetail } from "../config/api";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import AlsoLike from "../components/SingleCoin/AlsoLike/AlsoLike";
import GettingStarted from "../components/SingleCoin/MainSection/GettingStarted";
import TrendingCoin from "../components/SingleCoin/MainSection/TrendingCoin";

const SingleCoin = () => {
  const { id } = useParams();
  const [load, setLoad] = useState(false);
  const [coinData, setCoinData] = useState();
  const fetchCoinData = async () => {
    setLoad(true);
    const { data } = await axios.get(singleCoinDetail(id));
    setCoinData(data);
    setLoad(false);
  };

  useEffect(() => {
    fetchCoinData();
  }, [id]);

  return (
    <div className="max-w-[1200px] mx-auto h-fit ">
      {load ? (
        <div className="flex items-center justify-center mt-[5rem] h-50vh">
          <Loader />
        </div>
      ) : (
        <>
          <div>
            <div>
              <MainSection coinData={coinData} />
              <DetailSection coinData={coinData} />
              <AlsoLike />
            </div>
            <div className="sm:hidden">
              <GettingStarted />
              <TrendingCoin />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCoin;
