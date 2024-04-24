import Detail_Nav from "./Detail_Nav";
import OverviewSection from "./OverviewSection";

const DetailSection = ({ coinData }) => {
  return (
    <div className="px-3 mt-8">
      <Detail_Nav />
      <OverviewSection coinData={coinData} />
    </div>
  );
};

export default DetailSection;
