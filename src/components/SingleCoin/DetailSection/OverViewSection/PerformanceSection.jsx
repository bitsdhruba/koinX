import { RxTriangleUp } from "react-icons/rx";

const PerformanceSection = ({ coinData }) => {
  const high = coinData?.market_data.high_24h.usd;
  const current = coinData?.market_data.current_price.usd;
  const percent = ((current / high) * 100).toFixed(0);

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-semibold mb-6">Performance</h1>
      <div>
        <div className="mt-4">
          <div className="flex justify-between">
            <div className="">
              <p className="text-slate-600">Today&apos;s low</p>
              <p className="text-lg my-1">
                $ {coinData?.market_data.low_24h.usd}
              </p>
            </div>

            <div className=" text-end">
              <p className="text-slate-600">Today&apos;s High</p>
              <p className="text-lg my-1">
                $ {coinData?.market_data.high_24h.usd}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-end">
            <div className="w-full h-1 self-center bg-gradient-to-r from-red-500 via-orange-300 to-green-500 rounded-md"></div>
            <div
              style={{ width: `${percent}%` }}
              className="h-fit flex justify-end"
            >
              <div className="w-fit h-fit flex flex-col justify-center items-center">
                <RxTriangleUp />
                <h1>$ {coinData?.market_data.current_price.usd}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex justify-between">
            <div className="">
              <p className="text-slate-600">52 w low</p>
              <p className="text-lg my-1">$ {coinData?.market_data.atl.usd}</p>
            </div>
            <div className=" text-end">
              <p className="text-slate-600">52 w High</p>
              <p className="text-lg my-1">$ {coinData?.market_data.ath.usd}</p>
            </div>
          </div>

          <div className="w-full h-1 self-center bg-gradient-to-r from-red-500 via-orange-300 to-green-500 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
