import GettingStarted from "./GettingStarted";
import SingleCoinPrice from "./SingleCoinPrice";
import TrendingCoin from "./TrendingCoin";
import TradeChart from "./TradeChart";

const MainSection = ({ coinData }) => {
  return (
    <div className="flex m-auto w-[85%]">
      <div className="w-4/5 mt-6 rounded-lg">
        <div className="border-b border-slate-300 w-full h-fit">
          <SingleCoinPrice coinData={coinData} />
        </div>
        <div className="w-full h-[70%]  mt-6 overflow-hidden p-2">
          <TradeChart />
        </div>
      </div>
      <div className="w-2/5">
        <GettingStarted />
        <TrendingCoin />
      </div>
    </div>
  );
};

export default MainSection;
