

const Fundamental = () => {
  return (
    <div>
      <h1 className="text-2xl mb-4 ml-5 text-slate-500">Fundamentals</h1>
      <div className="flex justify-between">
        <div className="w-[47%]">
          <ul>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">Bitcoin Price</span>{" "}
              <span className="text-lg m-3">$454561</span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">
                24h low/ 24h high
              </span>{" "}
              <span className="text-lg m-3">564646</span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">
                7d low/ 7d high
              </span>{" "}
              <span className="text-lg m-3">6546113</span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">Trading Volume</span>{" "}
              <span className="text-lg m-3">456454313</span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">
                Market Cap Rank
              </span>{" "}
              <span className="text-lg m-3">464464621</span>
            </li>
          </ul>
        </div>
        <div className="w-[47%]">
          <ul>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">Market Cap</span>{" "}
              <span className="text-lg m-3">212143131</span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">
                Market Cap Dominace
              </span>{" "}
              <span className="text-lg m-3">546421215</span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">
                Volume / Market Cap
              </span>{" "}
              <span className="text-lg m-3">54612318</span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">All time high</span>{" "}
              <span className="text-lg m-3">213165</span>
            </li>
            <li className="flex justify-between border-b border-slate-300 m-2">
              <span className="text-lg text-slate-400 m-3">All time low</span>{" "}
              <span className="text-lg m-3">21324561</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Fundamental
