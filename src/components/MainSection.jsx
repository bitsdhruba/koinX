import GettingStarted from "../components/GettingStarted";
import TrendingCoin from "./TrendingCoin";

const MainSection = () => {
  return (
    <div className="flex m-auto w-[85%]">
      <div className="w-4/5 h-[70vh] bg-blue-300 blur-sm">
        <h1>This is the home page for the Crypto.</h1>
        <h1 className="text-4xl text-blue-500 text-center">The chart is here.</h1>
      </div>
      <div className="w-2/5">
        <GettingStarted />
        <TrendingCoin/>
      </div>
    </div>
  );
};

export default MainSection;
