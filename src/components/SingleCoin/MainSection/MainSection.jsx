import GettingStarted from "./GettingStarted";
import SingleCoinPrice from "./SingleCoinPrice";
import TrendingCoin from "./TrendingCoin";
import TradeChart from "./TradeChart";

const MainSection = ({ coinData }) => {
  return (
    <div className="sm:flex">
      <div className="mt-6 rounded-lg w-full">
        <div className="border-b border-slate-300 w-full h-fit">
          <SingleCoinPrice coinData={coinData} />
        </div>
        <div className="w-full mt-6 overflow-hidden p-2">
          <TradeChart />
        </div>
      </div>
      <div className="w-2/5 hidden sm:inline ml-4">
        <GettingStarted />
        <TrendingCoin />
      </div>
    </div>
  );
};

export default MainSection;
