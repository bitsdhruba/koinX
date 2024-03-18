const PerformanceSection = ({ coinData }) => {
  return (
    <div className="mt-4">
      <div className="p-5">
        <h1 className="text-3xl font-semibold mb-6">Performance</h1>
        <div>
          <ul>
            <li className="my-4 flex justify-between">
              <div className="w-1/5">
                <p className="text-slate-600">Today&apos;s low</p>
                <p className="text-xl my-2">
                  $ {coinData?.market_data.low_24h.usd}
                </p>
              </div>
              <div className="w-full h-1 self-center bg-gradient-to-r from-red-500 via-orange-300 to-green-500 rounded-md"></div>
              <div className="w-1/5 text-end ml-3">
                <p className="text-slate-600">Today&apos;s High</p>
                <p className="text-xl my-2">
                  $ {coinData?.market_data.high_24h.usd}
                </p>
              </div>
            </li>
            <li className="my-4 flex justify-between">
              <div className="w-1/5">
                <p className="text-slate-600">52 w low</p>
                <p className="text-xl my-2">
                  $ {coinData?.market_data.atl.usd}
                </p>
              </div>
              <div className="w-full h-1 self-center bg-gradient-to-r from-red-500 via-orange-300 to-green-500 rounded-md"></div>
              <div className="w-1/5 text-end ml-3">
                <p className="text-slate-600">52 w High</p>
                <p className="text-xl my-2">
                  $ {coinData?.market_data.ath.usd}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
