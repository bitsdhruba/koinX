import { RxTriangleUp } from "react-icons/rx";

const SingleCoinPrice = ({ coinData }) => {
  return (
    <div className="w-full h-fit border-b border-slate-300">
      <div className="pl-5 my-6">
        <div className="mb-4 flex items-center">
          <img
            src={coinData?.image.large}
            alt={coinData?.name}
            className="rounded-lg size-12"
          />
          <div className="flex items-center">
            <h1 className="text-2xl mx-1 font-medium">{coinData?.name}</h1>
            <h1 className="text-xl text-slate-600 mx-1 uppercase">
              ({coinData?.symbol})
            </h1>
          </div>
          <h1 className="bg-[#768396] rounded-lg p-1 mx-10 text-lg text-white">
            Rank #{coinData?.market_cap_rank}
          </h1>
        </div>
        <div className="mt-2 pl-1 flex items-center">
          <h1 className="text-3xl font-medium mr-12">
            $ {coinData?.market_data.current_price.usd}
          </h1>
          {coinData?.market_data.price_change_percentage_24h.toFixed(2) < 0 ? (
            <h1 className="text-lg font-medium mr-10 text-red-600 p-1 bg-red-100 rounded-lg">
              🔻 {coinData?.market_data.price_change_percentage_24h.toFixed(2)}{" "}
              %
            </h1>
          ) : (
            <h1 className="text-lg font-medium mr-10 text-green-600 p-1 bg-green-100 rounded-lg flex items-center">
              <RxTriangleUp />
              {coinData?.market_data.price_change_percentage_24h.toFixed(2)} %
            </h1>
          )}
          <span className="text-slate-500">(24H)</span>
        </div>
        <div className="pl-2 mt-1 flex ">
          <h1 className="text-xl font-medium ">
            ₹ {coinData?.market_data.current_price.inr}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleCoinPrice;
