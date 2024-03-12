

const PerformanceSection = () => {
  return (
    <div className="mt-4">
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-6">Performance</h1>
        <div>
          <ul>
            <li className="my-4 flex justify-between">
              <div className="w-1/5">
                <p className="text-slate-600">Today&apos;s low</p>
                <p className="text-xl my-2">441161.212</p>
              </div>
              <div className="w-full h-1 self-center bg-gradient-to-r from-red-500 via-orange-300 to-green-500 rounded-md"></div>
              <div className="w-1/5 text-end ml-3">
                <p className="text-slate-600">Today&apos;s High</p>
                <p className="text-xl my-2">118420.32</p>
              </div>
            </li>
            <li className="my-4 flex justify-between">
              <div className="w-1/5">
                <p className="text-slate-600">52 W low</p>
                <p className="text-xl my-2">174431.121</p>
              </div>
              <div className="w-full h-1 self-center bg-gradient-to-r from-red-500 via-orange-300 to-green-500 rounded-md"></div>
              <div className="w-1/5 text-end ml-3">
                <p className="text-slate-600">52 W High</p>
                <p className="text-xl my-2">613211.32</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PerformanceSection
