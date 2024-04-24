import { Link } from "react-router-dom";
import { RxTriangleUp } from "react-icons/rx";

const CoinList = ({ coindata }) => {
  return (
    <li className="border-b border-slate-300 shadow-md shadow-slate-300 my-3 hover:shadow-lg hover:scale-[1.025] transition duration-300 ease-in-out hover:shadow-slate-400 hover:bg-slate-200 rounded-lg">
      <Link to={`/coin/${coindata.id}`}>
        <div className="flex justify-between items-center h-fit ">
          <div className="flex items-center">
            <img
              src={coindata.image}
              alt={coindata.name}
              className="w-8 h-8 bg-cover rounded-full m-2"
            />
            <div className="flex items-center">
              <span className="text-xl m-2 font-medium hidden">
                {coindata.name}
              </span>
              <span className="text-xl m-2 font-medium uppercase">
                {coindata.symbol}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-lg m-2 font-medium ">
              ₹ {coindata.current_price}
            </span>
            {coindata.price_change_percentage_24h.toFixed(2) < 0 ? (
              <span className="text-lg m-2 px-1 bg-red-200 text-red-600 rounded-lg">
                🔻{coindata.price_change_percentage_24h.toFixed(2)} %
              </span>
            ) : (
              <span className="text-lg m-2 px-1 bg-green-200 text-green-600 rounded-lg flex items-center">
                <RxTriangleUp />
                {coindata.price_change_percentage_24h.toFixed(2)} %
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CoinList;
