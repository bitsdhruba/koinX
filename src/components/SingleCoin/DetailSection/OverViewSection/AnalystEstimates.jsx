const AnalystEstimates = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-slate-600">Analysts Estimates</h1>
      <div className="flex my-5 items-center">
        <div className="flex items-center">
          <div className="w-[130px] h-[130px] rounded-full bg-green-200 flex items-center">
            <div className="m-auto flex items-center">
              <span className="text-5xl text-green-500">76</span>
              <span className="text-green-500 text-xl mx-1">%</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <div className="mx-3">Buy</div>
            <div className="w-full h-full flex items-center">
              <div className="w-[76%] h-2 bg-green-500 rounded-lg"></div>
              <span className="m-2">76%</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mx-3">Hold</div>
            <div className="w-full h-full flex items-center">
              <div className="w-[37%] h-2 bg-yellow-500 rounded-lg"></div>
              <span className="m-2">37%</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mx-3">Sell</div>
            <div className="w-full h-full flex items-center">
              <div className="w-[8%] h-2 bg-red-500 rounded-lg"></div>
              <span className="m-2">8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystEstimates;
