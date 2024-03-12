import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Poll",
        data: [80, 20],
        backgroundColor: ["blue", "orange"],
      },
    ],
  };

  const options = {};

  return (
    <section className="my-6 p-5">
      <h1 className="text-3xl font-bold my-3">Tokenomics</h1>
      <h1 className="text-2xl my-5">Initial Distribution</h1>
      <div className="flex gap-5">
        <div className=" h-[15rem] w-[15rem]">
          <Doughnut data={data} options={options}></Doughnut>
        </div>
        <div className="px-3 flex flex-col  justify-center">
          <h1 className="text-xl  my-2">🟡 Crowdsale Investors: 80%</h1>
          <h1 className="text-xl  my-2">🔵 Foundation: 20%</h1>
        </div>
      </div>
      <p className="text-lg  my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum
        eum possimus repellendus cum tempora sit corrupti error voluptas,
        voluptatem ipsa quaerat iure repellat accusamus est velit perspiciatis
        nesciunt quia autem commodi reprehenderit necessitatibus. Perferendis
        sint laborum expedita nisi quas ratione modi odio, eius quo vel tenetur
        asperiores non sunt. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quia, expedita suscipit. Nisi laboriosam blanditiis aut architecto
        est quam dicta molestias dolorum ab labore sint, dolor similique esse
        error natus ipsa aspernatur eius, molestiae aperiam veniam eligendi
        ullam voluptatum! Temporibus illum fugit eos, necessitatibus vero non
        enim modi architecto doloribus tenetur.
      </p>
    </section>
  );
};

export default Tokenomics;
