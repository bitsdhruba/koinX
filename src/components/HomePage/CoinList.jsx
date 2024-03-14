import { Link } from "react-router-dom";

const CoinList = () => {
  return (
    <div>
      <div className="my-4">
        <ul>
          <li className="border-b border-slate-200 my-2 p-2">
            <Link to="/coin/:id">
              <div className="flex justify-between items-center">
                <div>
                  <img src="" alt="" />
                  <span className="text-xl">Bitcoin</span>
                </div>
                <span>975687</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoinList;
