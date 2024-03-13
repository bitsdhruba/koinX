import robin from "../assets/robin.png";

const Team = () => {
  return (
    <section className="p-5 my-6">
      <h1 className="text-3xl font-semibold my-5">Team</h1>
      <p className="text-lg my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
        iste? Adipisci at distinctio, molestiae dolore earum mollitia? Eos natus
        ipsum quibusdam facilis sunt magni nam voluptatum tempora molestias aut!
        Natus.
      </p>
      <div className="flex bg-blue-100 p-2 my-6 rounded-lg">
        <div className="w-2/5 flex flex-col items-center">
          <div className="">
            <img
              src={robin}
              alt="robin"
              className="bg-cover rounded-lg bg-center"
            />
          </div>
          <div>
            <h1 className=" mt-2 text-md font-medium text-center">
              Robin Hood
            </h1>
            <h1 className="text-sm text-center">Designation Here</h1>
          </div>
        </div>
        <div className="p-4 flex items-center">
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            amet porro facilis in minus asperiores repellendus, deserunt
            perspiciatis dicta optio, ducimus officia accusantium sit
            necessitatibus impedit quaerat aut. Rerum molestiae laudantium
            provident iure explicabo nam iusto sed quo maxime esse.
          </p>
        </div>
      </div>
      <div className="flex bg-blue-100 p-2 my-6 rounded-lg">
        <div className="w-2/5 flex flex-col items-center">
          <div className="">
            <img
              src={robin}
              alt="robin"
              className="bg-cover rounded-lg bg-center"
            />
          </div>
          <div>
            <h1 className=" mt-2 text-md font-medium text-center">
              Robin Hood
            </h1>
            <h1 className="text-sm text-center">Designation Here</h1>
          </div>
        </div>
        <div className="p-4 flex items-center">
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            amet porro facilis in minus asperiores repellendus, deserunt
            perspiciatis dicta optio, ducimus officia accusantium sit
            necessitatibus impedit quaerat aut. Rerum molestiae laudantium
            provident iure explicabo nam iusto sed quo maxime esse.
          </p>
        </div>
      </div>
      <div className="flex bg-blue-100 p-2 my-6 rounded-lg">
        <div className="w-2/5 flex flex-col items-center">
          <div className="">
            <img
              src={robin}
              alt="robin"
              className="bg-cover rounded-lg bg-center"
            />
          </div>
          <div>
            <h1 className=" mt-2 text-md font-medium text-center">
              Robin Hood
            </h1>
            <h1 className="text-sm text-center">Designation Here</h1>
          </div>
        </div>
        <div className="p-4 flex items-center">
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            amet porro facilis in minus asperiores repellendus, deserunt
            perspiciatis dicta optio, ducimus officia accusantium sit
            necessitatibus impedit quaerat aut. Rerum molestiae laudantium
            provident iure explicabo nam iusto sed quo maxime esse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
