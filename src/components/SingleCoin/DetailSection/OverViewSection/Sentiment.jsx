import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import { IoNewspaperOutline } from "react-icons/io5";

const Sentiment = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="my-8">
      <div className="border-t-2 border-b-2 border-slate-200">
        <h1 className="text-2xl font-semibold my-3">Sentiments</h1>
        <h1 className="text-2xl text-slate-500 ">Key Events</h1>
        <div className="">
          <div className="my-5 h-[13rem]">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={2}
              spaceBetween={12}
              navigation={false}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
            >
              <ul className="flex gap-3 ">
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-blue-100">
                    <div className=" w-full h-[12rem] flex ">
                      <div className="w-fit">
                        <span className="flex size-12 justify-center items-center rounded-full bg-cyan-300 m-3">
                          <IoNewspaperOutline className="size-8" />
                        </span>
                      </div>
                      <div className=" overflow-hidden py-3 pr-3">
                        <h2 className="text-lg font-medium mb-3 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-md text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-blue-100">
                    <div className=" w-full h-[12rem] flex ">
                      <div className="w-fit">
                        <span className="flex size-12 justify-center items-center rounded-full bg-cyan-300 m-3">
                          <IoNewspaperOutline className="size-8" />
                        </span>
                      </div>
                      <div className=" overflow-hidden py-3 pr-3">
                        <h2 className="text-lg font-medium mb-3 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-md text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-blue-100">
                    <div className=" w-full h-[12rem] flex ">
                      <div className="w-fit">
                        <span className="flex size-12 justify-center items-center rounded-full bg-cyan-300 m-3">
                          <IoNewspaperOutline className="size-8" />
                        </span>
                      </div>
                      <div className=" overflow-hidden py-3 pr-3">
                        <h2 className="text-lg font-medium mb-3 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-md text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-blue-100">
                    <div className=" w-full h-[12rem] flex ">
                      <div className="w-fit">
                        <span className="flex size-12 justify-center items-center rounded-full bg-cyan-300 m-3">
                          <IoNewspaperOutline className="size-8" />
                        </span>
                      </div>
                      <div className=" overflow-hidden py-3 pr-3">
                        <h2 className="text-lg font-medium mb-3 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-md text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-blue-100">
                    <div className=" w-full h-[12rem] flex ">
                      <div className="w-fit">
                        <span className="flex size-12 justify-center items-center rounded-full bg-cyan-300 m-3">
                          <IoNewspaperOutline className="size-8" />
                        </span>
                      </div>
                      <div className=" overflow-hidden py-3 pr-3">
                        <h2 className="text-lg font-medium mb-3 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-md text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-blue-100">
                    <div className=" w-full h-[12rem] flex ">
                      <div className="w-fit">
                        <span className="flex size-12 justify-center items-center rounded-full bg-cyan-300 m-3">
                          <IoNewspaperOutline className="size-8" />
                        </span>
                      </div>
                      <div className=" overflow-hidden py-3 pr-3">
                        <h2 className="text-lg font-medium mb-3 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-md text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              </ul>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
