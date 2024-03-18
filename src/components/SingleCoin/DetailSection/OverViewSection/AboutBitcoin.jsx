const AboutBitcoin = ({ coinData }) => {
  return (
    <div className="p-5 my-5 ">
      <h1 className="text-3xl font-semibold mb-5">About {coinData?.name}</h1>
      <section className="border-b border-slate-200 mb-4">
        <h2 className="text-2xl font-semibold mb-4">
          What is {coinData?.name}
        </h2>
        <p className="text-xl mb-3 font-medium text-slate-700">
          {coinData?.description.en.slice(0, 250)}
        </p>
      </section>
      <section className="border-b border-slate-200">
        <h1 className="text-2xl font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur{" "}
        </h1>
        <p className="text-xl mb-6 text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          excepturi? Soluta numquam dicta obcaecati, quia sed ea mollitia
          molestias neque laborum magni amet iusto fugit eos velit eius atque
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          magni quo, architecto omnis eveniet magnam debitis accusamus adipisci
          consequuntur esse? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Dolore alias maiores error molestias dolores? Delectus rerum
          libero dolorem a accusamus nulla velit officiis, nemo eum veritatis
          cum animi illo quae natus veniam nostrum quidem quibusdam?
          Necessitatibus, odit consequuntur? Obcaecati, suscipit?
        </p>
        <p className="text-xl mb-6 text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          excepturi? Soluta numquam dicta obcaecati, quia sed ea mollitia
          molestias neque laborum magni amet iusto fugit eos velit eius atque
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          magni quo, architecto omnis eveniet magnam debitis accusamus adipisci
          consequuntur esse? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sint atque ipsam minima. Dolorem consequatur, ex unde totam
          temporibus nulla omnis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet magni maiores vel tempore ipsa dolores dolor
          debitis? Quibusdam, quo magnam.
        </p>
        <p className="text-xl mb-6 text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          excepturi? Soluta numquam dicta obcaecati, quia sed ea mollitia
          molestias neque laborum magni amet iusto fugit eos velit eius atque
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          magni quo, architecto omnis eveniet magnam debitis accusamus adipisci
          consequuntur esse? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ipsam ratione vero quod esse ad omnis deserunt, et earum neque
          voluptatibus alias, rem, quae a aspernatur in sit porro iste
          exercitationem. Illo dolor facilis eos quo ut necessitatibus.
          Reiciendis, eius earum!
        </p>
      </section>
    </div>
  );
};

export default AboutBitcoin;
