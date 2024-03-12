

const Detail_Nav = () => {
  return (
    <div className="h-[6vh] w-[66%]  text-xl border-b border-slate-200">
      <ul className="flex justify-between h-full items-center">
        <li>
          <a className="active:text-blue-500 cursor-pointer text-blue-600 pb-3 border-b-4 border-blue-600">
            Overview
          </a>
        </li>
        <li>
          <a className="active:text-blue-500 cursor-pointer pb-3">
            Fundamentals
          </a>
        </li>
        <li>
          <a className="active:text-blue-500 cursor-pointer pb-3">
            News Insight
          </a>
        </li>
        <li>
          <a className="active:text-blue-500 cursor-pointer pb-3">
            Sentiments
          </a>
        </li>
        <li>
          <a className="active:text-blue-500 cursor-pointer pb-3">
            Team
          </a>
        </li>
        <li>
          <a className="active:text-blue-500 cursor-pointer pb-3">
            Technical
          </a>
        </li>
        <li>
          <a className="active:text-blue-500 cursor-pointer pb-3">
            Tokenomics
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Detail_Nav;
