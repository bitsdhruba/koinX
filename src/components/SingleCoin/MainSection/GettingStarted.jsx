import { GoArrowRight } from "react-icons/go";
import join from "../../../assets/join.png";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <div className="bg-[#0052FE] h-fit flex flex-col items-center justify-between text-center m-3 p-14 rounded-xl">
      <h1 className="text-3xl font-bold text-white">
        Get Started with KoinX for FREE
      </h1>
      <p className="mt-8 text-white">
        With our range of features that you can eqip for free, koinX allows you
        to be more educated and more aware of your tax reports.
      </p>
      <div>
        <img src={join} alt="join Koinx" className="bg-cover bg-no-repeat" />
      </div>
      <Link to="/getStart">
        <button className="bg-white w-[15rem] h-[3rem] text-xl rounded-lg flex items-center justify-center mt-2 p-2">
          Get Started for FREE{" "}
          <span className="mx-2">
            <GoArrowRight />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default GettingStarted;
