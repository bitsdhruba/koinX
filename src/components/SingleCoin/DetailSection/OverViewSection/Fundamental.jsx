const Fundamental = ({ coinData }) => {
  return (
    <div className="mt-12">
      <h1 className="text-2xl text-slate-600">Fundamentals</h1>
      <div className="sm:flex sm:justify-between">
        <div className="sm:w-[47%]">
          <ul>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-500 m-3">
                {coinData?.name} Price
              </span>{" "}
              <span className="text-lg m-3">
                $ {coinData?.market_data.current_price.usd}
              </span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-500 m-3">
                24h low / 24h high
              </span>{" "}
              <span className="text-lg m-3">
                $ {coinData?.market_data.low_24h.usd} / ${" "}
                {coinData?.market_data.high_24h.usd}
              </span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-500 m-3">
                7d low / 7d high
              </span>{" "}
              <span className="text-lg m-3">
                $ {coinData?.market_data.low_24h.usd} / ${" "}
                {coinData?.market_data.high_24h.usd}
              </span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-500 m-3">Trading Volume</span>{" "}
              <span className="text-lg m-3">
                $ {coinData?.market_data.total_volume.usd}
              </span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-500 m-3">
                Market Cap Rank
              </span>{" "}
              <span className="text-lg m-3"># {coinData?.market_cap_rank}</span>
            </li>
          </ul>
        </div>
        <div className="sm:w-[47%]">
          <ul>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-500 m-3">Market Cap</span>{" "}
              <span className="text-lg m-3">
                $ {coinData?.market_data.market_cap.usd}
              </span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-500 m-3">
                Market Cap Dominace
              </span>{" "}
              <span className="text-lg m-3">
                {coinData?.sentiment_votes_up_percentage.toFixed(3)} %
              </span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-500 m-3">
                Volume / Market Cap
              </span>{" "}
              <span className="text-lg m-3">
                {coinData?.market_data.market_cap_fdv_ratio}
              </span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-500 m-3">All time high</span>{" "}
              <div className="">
                <h1 className="m-1">
                  <span>$ {coinData?.market_data.ath.usd}</span>
                  {coinData?.market_data.ath_change_percentage.usd.toFixed(2) <
                  0 ? (
                    <span className="text-red-500 mx-1">
                      {coinData?.market_data.ath_change_percentage.usd.toFixed(
                        2
                      )}{" "}
                      %
                    </span>
                  ) : (
                    <span className="text-green-500 mx-1">
                      {coinData?.market_data.ath_change_percentage.usd.toFixed(
                        2
                      )}{" "}
                      %
                    </span>
                  )}
                </h1>
                <h1 className="mb-1 text-end mr-1">
                  {coinData?.market_data.ath_date.usd.slice(0, 10)}
                </h1>
              </div>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">All time high</span>{" "}
              <div className="">
                <h1 className="m-1">
                  <span>$ {coinData?.market_data.atl.usd}</span>
                  {coinData?.market_data.atl_change_percentage.usd.toFixed(2) <
                  0 ? (
                    <span className="text-red-500 mx-1">
                      {coinData?.market_data.atl_change_percentage.usd.toFixed(
                        2
                      )}{" "}
                      %
                    </span>
                  ) : (
                    <span className="text-green-500 mx-1">
                      {coinData?.market_data.atl_change_percentage.usd.toFixed(
                        2
                      )}{" "}
                      %
                    </span>
                  )}
                </h1>
                <h1 className="mb-1 text-end mr-1">
                  {coinData?.market_data.atl_date.usd.slice(0, 10)}
                </h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fundamental;
