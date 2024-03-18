import { useEffect, useState } from "react";
import DetailSection from "../components/SingleCoin/DetailSection";
import MainSection from "../components/SingleCoin/MainSection";
import axios from "axios";
import { singleCoinDetail } from "../config/api";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";

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
    <div>
      {load ? (
        <div className="flex items-center justify-center mt-[5rem] h-50vh">
          <Loader />
        </div>
      ) : (
        <>
          <MainSection coinData={coinData} />
          <DetailSection coinData={coinData} />
        </>
      )}
    </div>
  );
};

export default SingleCoin;
