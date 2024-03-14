import GettingStarted from "../components/SingleCoin/MainSection/GettingStarted";
import CoinList from "../components/HomePage/CoinList";

const Home = () => {
  return (
    <div className="w-[85%] h-full m-auto">
      <div className="bg-gradient-to-b from-[#0052FE] to-bg-white h-[20rem] shadow-lg flex items-center justify-center">
        <h1 className="text-center text-5xl font-sans font-bold">
          Welcome to Koin<span className="text-orange-500">X</span>
        </h1>
      </div>
      <div className="my-6">
        <div className="flex">
          <div className=" px-5 w-full">
            <div className="w-3/5 m-auto">
              <h1 className="text-center text-3xl font-sans">
                Trending Crypto Currencies
              </h1>
              <CoinList />
            </div>
          </div>

          <div className="w-1/2">
            <GettingStarted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
