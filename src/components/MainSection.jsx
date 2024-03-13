import GettingStarted from "../components/GettingStarted";
import TradingChart from "./TradingChart";
import TrendingCoin from "./TrendingCoin";

const MainSection = () => {
  return (
    <div className="flex m-auto w-[85%]">
      <div className="w-4/5 h-[70vh] mt-6 bg-blue-300">
        <TradingChart />
      </div>
      <div className="w-2/5">
        <GettingStarted />
        <TrendingCoin />
      </div>
    </div>
  );
};

export default MainSection;
