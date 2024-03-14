import AboutBitcoin from "./OverViewSection/AboutBitcoin";
import AnalystEstimates from "./OverViewSection/AnalystEstimates";
import Fundamental from "./OverViewSection/Fundamental";
import HoldingBitcoin from "./OverViewSection/HoldingBitcoin";
import PerformanceSection from "./OverViewSection/PerformanceSection";
import Sentiment from "./OverViewSection/Sentiment";
import Team from "./OverViewSection/Team";
import Tokenomics from "./OverViewSection/Tokenomics";

const OverviewSection = () => {
  return (
    <div className="w-[67%]">
      <PerformanceSection />
      <Fundamental />
      <Sentiment />
      <AnalystEstimates />
      <AboutBitcoin />
      <HoldingBitcoin />
      <Tokenomics />
      <Team />
    </div>
  );
};

export default OverviewSection;
