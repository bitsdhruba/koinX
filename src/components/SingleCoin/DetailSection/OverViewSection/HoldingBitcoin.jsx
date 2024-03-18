import profit from "../../../../assets/profit.png";
import tax from "../../../../assets/tax.png";
import { GoArrowRight } from "react-icons/go";

const HoldingBitcoin = ({ coinData }) => {
  return (
    <section className="my-5 p-5">
      <h1 className="text-3xl font-semibold my-3">
        Already Holding {coinData?.name}
      </h1>
      <div className="flex justify-between my-6">
        <div className="w-[48%] h-[12rem] p-3 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-800 flex">
          <div className="w-2/5 bg-cover flex items-center">
            <img
              src={profit}
              alt="profit"
              className="m-auto bg-center rounded-lg"
            />
          </div>
          <div className="p-6">
            <h1 className="text-white text-2xl font-bold">
              Calculate Your Profits
            </h1>
            <button className="bg-white w-[9.25rem] h-[2.25rem] p-2 mt-6 rounded-xl text-lg font-medium flex items-center justify-center">
              Check Now{" "}
              <span className="mx-2">
                <GoArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[48%] h-[12rem] p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex">
          <div className="w-2/5 bg-cover flex items-center">
            <img src={tax} alt="tax" className="m-auto bg-center rounded-lg" />
          </div>
          <div className="p-6">
            <h1 className="text-white text-2xl font-bold">
              Calculate Your Tax Liability
            </h1>
            <button className="bg-white w-[9.25rem] h-[2.25rem] p-2 mt-6 rounded-xl text-lg font-medium flex items-center justify-center">
              Check Now{" "}
              <span className="mx-2">
                <GoArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <p className="text-lg text-slate-700 my-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        est asperiores quasi, officia eaque animi porro quaerat dignissimos
        quibusdam id at accusamus aut, soluta rerum quam enim. In dolores
        voluptates praesentium iste voluptas illo nobis rem, perspiciatis
        explicabo dignissimos. Ad.
      </p>
    </section>
  );
};

export default HoldingBitcoin;
