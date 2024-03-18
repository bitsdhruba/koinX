import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <>
      <SwiperSlide>
        <li className="w-fit h-fit">
          <Link>
            <div className="p-2">
              <div className="flex">
                <img src="" alt="" className="rounded-lg size-4" />
                <h1 className="text-lg uppercase mx-2">BTC</h1>
                <h1 className="">234 %</h1>
              </div>
              <h1>$ 234253</h1>
              <div className="w-16 h-12 m-2">sparkline</div>
            </div>
          </Link>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="w-fit h-fit">
          <Link>
            <div className="p-2">
              <div className="flex">
                <img src="" alt="" className="rounded-lg size-4" />
                <h1 className="text-lg uppercase mx-2">BTC</h1>
                <h1 className="">234 %</h1>
              </div>
              <h1>$ 234253</h1>
              <div className="w-16 h-12 m-2">sparkline</div>
            </div>
          </Link>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="w-fit h-fit">
          <Link>
            <div className="p-2">
              <div className="flex">
                <img src="" alt="" className="rounded-lg size-4" />
                <h1 className="text-lg uppercase mx-2">BTC</h1>
                <h1 className="">234 %</h1>
              </div>
              <h1>$ 234253</h1>
              <div className="w-16 h-12 m-2">sparkline</div>
            </div>
          </Link>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="w-fit h-fit">
          <Link>
            <div className="p-2">
              <div className="flex">
                <img src="" alt="" className="rounded-lg size-4" />
                <h1 className="text-lg uppercase mx-2">BTC</h1>
                <h1 className="">234 %</h1>
              </div>
              <h1>$ 234253</h1>
              <div className="w-16 h-12 m-2">sparkline</div>
            </div>
          </Link>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="w-fit h-fit">
          <Link>
            <div className="p-2">
              <div className="flex">
                <img src="" alt="" className="rounded-lg size-4" />
                <h1 className="text-lg uppercase mx-2">BTC</h1>
                <h1 className="">234 %</h1>
              </div>
              <h1>$ 234253</h1>
              <div className="w-16 h-12 m-2">sparkline</div>
            </div>
          </Link>
        </li>
      </SwiperSlide>
    </>
  );
};

export default Carousel;
