const Detail_Nav = () => {
  return (
    <div className="h-[6vh] text-lg border-b border-slate-200 shadow-md shadow-slate-300 overflow-hidden">
      <ul className="flex justify-between h-full items-center">
        {[
          "Overview",
          "Fundamentals",
          "News Insight",
          "Sentiments",
          "Team",
          "Technical",
          "Tokenomics",
        ].map((title, i) => {
          return (
            <li key={i} className="mx-4 cursor-pointer">
              <a>{title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Detail_Nav;
