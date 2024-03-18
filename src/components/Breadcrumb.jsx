import { Link, useLocation } from "react-router-dom";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const breadCrumbpath = pathname
    .split("/")
    .filter((e) => e)
    .slice(1);

  return (
    <div className="w-[85%] m-auto">
      <div className="mt-4 mb-2 text-xl flex items-center ">
        <Link to="/">
          <span className="text-gray-600">Cryptocurrencies</span>
        </Link>
        <HiMiniChevronDoubleRight className="mx-1 mt-1" />
        <span className="capitalize font-medium">{breadCrumbpath}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
