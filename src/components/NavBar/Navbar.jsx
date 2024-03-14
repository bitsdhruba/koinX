import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[8vh] flex justify-evenly shadow-lg">
      <div className="w-2/5 h-full">
        <Link to="/">
          <div className="max-w-fit max-h-fit flex mt-[1.25rem] cursor-pointer">
            <span className="text-3xl font-bold">Koin</span>{" "}
            <span className="text-4xl font-bold text-orange-400">X</span>{" "}
            <span className="text-sm">TM</span>
          </div>
        </Link>
      </div>
      <div className="w-2/5 h-full">
        <ul className="flex justify-evenly h-full text-2xl">
          <li className="self-center cursor-pointer">
            <Link to="/cryptoTax">Crypto Taxes</Link>
          </li>
          <li className="self-center cursor-pointer">
            <Link to="freeTool">Free Tools</Link>
          </li>
          <li className="self-center cursor-pointer">
            <Link to="resourceCenter">Resource Center</Link>
          </li>
          <li className="cursor-pointer flex items-center justify-center">
            <div className="w-40 h-12 p-2 rounded-lg bg-blue-600 text-white text-center">
              <Link to="getStart">Get Started</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
