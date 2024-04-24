import profit from "../../../../assets/profit.png";
import tax from "../../../../assets/tax.png";
import { GoArrowRight } from "react-icons/go";

const HoldingBitcoin = ({ coinData }) => {
  return (
    <section className="">
      <h1 className="text-2xl font-semibold my-3">
        Already Holding {coinData?.name}
      </h1>
      <div className="flex flex-wrap gap-6 my-6">
        <div className="w-[24rem] h-[10rem] p-3 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-800 flex justify-between">
          <div className="rounded-lg">
            <img src={profit} alt="profit" className="bg-cover bg-center " />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <h1 className="text-white text-xl font-bold">
              Calculate Your Profits
            </h1>
            <button className="bg-white w-[8.25rem] h-[2rem] p-2 rounded-xl text-md font-medium flex items-center justify-center">
              Check Now{" "}
              <span className="mx-2">
                <GoArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[24rem] h-[10rem] p-3 rounded-lg bg-gradient-to-br from-orange-400 to-red-600 flex justify-between">
          <div className="rounded-lg flex items-center">
            <img
              src={tax}
              alt="tax"
              className="object-cover bg-center aspect-square"
            />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <h1 className="text-white text-xl font-bold">
              Calculate Your Tax Liability
            </h1>
            <button className="bg-white w-[8.25rem] h-[2rem] p-2 rounded-xl text-md font-medium flex items-center justify-center">
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
