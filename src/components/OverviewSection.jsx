import AboutBitcoin from "./AboutBitcoin";
import AnalystEstimates from "./AnalystEstimates";
import Fundamental from "./Fundamental";
import HoldingBitcoin from "./HoldingBitcoin";
import PerformanceSection from "./PerformanceSection";
import Sentiment from "./Sentiment";
import Team from "./Team";
import Tokenomics from "./Tokenomics";

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
