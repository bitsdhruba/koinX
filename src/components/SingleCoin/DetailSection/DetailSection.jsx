import Detail_Nav from "./Detail_Nav";
import OverviewSection from "./OverviewSection";

const DetailSection = ({ coinData }) => {
  return (
    <div className="w-[85%] m-auto">
      <Detail_Nav />
      <OverviewSection coinData={coinData} />
    </div>
  );
};

export default DetailSection;
