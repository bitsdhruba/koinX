import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import { IoNewspaperOutline } from "react-icons/io5";

const Sentiment = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="my-6">
      <div>
        <h1 className="text-3xl font-semibold p-3 my-5">Sentiments</h1>
        <h1 className="text-2xl text-slate-500 p-3 mb-4">Key Events</h1>
        <div className="pl-3">
          <div className="my-5 h-[16rem]">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={2}
              spaceBetween={30}
              navigation={true}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
            >
              <ul className="flex gap-3 ">
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-blue-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-cyan-300" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-green-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-blue-400" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-red-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-green-300" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-slate-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-red-200" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-blue-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-cyan-300" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-green-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-blue-400" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-red-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-green-300" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-slate-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-red-200" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-slate-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-red-200" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-xl bg-slate-100">
                    <div className=" w-full h-[15rem] flex ">
                      <div className="w-3/5">
                        <span>
                          <IoNewspaperOutline className="w-[3rem] h-[3rem] rounded-full ml-4 mt-6 bg-red-200" />
                        </span>
                      </div>
                      <div className="py-5 pr-5 h-full overflow-hidden ">
                        <h2 className="text-lg font-medium mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
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
