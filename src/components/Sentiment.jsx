import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";

const Sentiment = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="my-6">
      <div className="p-3">
        <h1 className="text-3xl font-bold my-5">Sentiments</h1>
        <h1 className="text-2xl text-slate-500 mb-4">Key Events</h1>
        <div>
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
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
                        </p>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="h-full rounded-lg bg-blue-200">
                    <div className="p-3 w-[30rem] h-[15rem] flex ">
                      <div className="w-[10%] ">ICON</div>
                      <div className="p-3 overflow-hidden ">
                        <h2 className="text-xl mb-4 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Porro, sunt. Cumque dignissimos suscipit
                          placeat. Asperiores?
                        </h2>
                        <p className="text-lg text-slate-700 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque laudantium magni illo, praesentium
                          similique aliquid nemo? Praesentium eaque
                          reprehenderit, tempora inventore labore autem optio
                          quasi aperiam dicta omnis. Ea, doloribus.
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
