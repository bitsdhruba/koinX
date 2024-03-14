import GettingStarted from "./MainSection/GettingStarted";
import TradingChart from "./MainSection/TradingChart";
import TrendingCoin from "./MainSection/TrendingCoin";

const MainSection = () => {
  return (
    <div className="flex m-auto w-[85%]">
      <div className="w-4/5 h-[70vh] mt-6 bg-blue-100"></div>
      <div className="w-2/5">
        <GettingStarted />
        <TrendingCoin />
      </div>
    </div>
  );
};

export default MainSection;
