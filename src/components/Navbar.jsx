

const Navbar = () => {
  return (
    <div className="w-full h-[8vh] flex justify-evenly shadow-lg">
      <div className="w-2/5 h-full">
        <div className="max-w-fit max-h-fit flex mt-[1.25rem]">
          <span className="text-3xl font-bold">Koin</span>{" "}
          <span className="text-4xl font-bold text-orange-400">X</span>{" "}
          <span className="text-sm">TM</span>
        </div>
      </div>
      <div className="w-2/5 h-full">
        <ul className="flex justify-evenly h-full text-2xl">
          <li className="self-center">Crypto Taxes</li>
          <li className="self-center">Free Tools</li>
          <li className="self-center">Resource Center</li>
          <button className="w-40 h-12 p-2 rounded-lg bg-blue-600 self-center text-white">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
