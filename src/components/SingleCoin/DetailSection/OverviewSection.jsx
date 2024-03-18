import AboutBitcoin from "./OverViewSection/AboutBitcoin";
import AnalystEstimates from "./OverViewSection/AnalystEstimates";
import Fundamental from "./OverViewSection/Fundamental";
import HoldingBitcoin from "./OverViewSection/HoldingBitcoin";
import PerformanceSection from "./OverViewSection/PerformanceSection";
import Sentiment from "./OverViewSection/Sentiment";
import Team from "./OverViewSection/Team";
import Tokenomics from "./OverViewSection/Tokenomics";

const OverviewSection = ({ coinData }) => {
  return (
    <div className="w-[67%]">
      <PerformanceSection coinData={coinData} />
      <Fundamental coinData={coinData} />
      <Sentiment />
      <AnalystEstimates />
      <AboutBitcoin coinData={coinData} />
      <HoldingBitcoin coinData={coinData} />
      <Tokenomics />
      <Team />
    </div>
  );
};

export default OverviewSection;
