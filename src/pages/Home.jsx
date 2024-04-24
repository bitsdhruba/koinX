import GettingStarted from "../components/SingleCoin/MainSection/GettingStarted";
import ListSection from "../components/HomePage/ListSection";

const Home = () => {
  return (
    <div className="max-w-[1200px] h-full mx-auto">
      <div className="bg-gradient-to-b from-[#0052FE] to-bg-white h-[20rem] shadow-lg flex items-center justify-center">
        <h1 className="text-center text-5xl font-sans font-bold">
          Welcome to Koin<span className="text-orange-500">X</span>
        </h1>
      </div>
      <div className="my-6">
        <div className="">
          <div className="">
            <ListSection />
          </div>
          <div className="">
            <GettingStarted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
