import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { trendingCoindata } from "../../../config/api";
import Loader from "../../Loader/Loader";

const AlsoLike = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const [trending, setTrending] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchTrending = async () => {
    setLoad(true);

    const { data } = await axios.get(trendingCoindata());

    const trendingCoins = data.coins;

    setTrending(trendingCoins);

    setLoad(false);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="w-[85%] m-auto">
      <div className="mb-16">
        <h1 className="text-3xl font-semibold my-3">You May Also Like</h1>
        <div>
          <div className="w-full h-fit">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              spaceBetween={20}
              navigation={true}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
            >
              <ul className="flex gap-3">
                {load ? (
                  <Loader />
                ) : (
                  trending.map((coin) => {
                    return (
                      <div key={coin.item.id}>
                        <SwiperSlide>
                          <li className="w-full h-fit my-4 rounded-lg border border-slate-300 ">
                            <Link>
                              <div className="p-2">
                                <div className="flex items-center ">
                                  <img
                                    src={coin.item.large}
                                    alt={coin.item.symbol}
                                    className="rounded-lg size-8"
                                  />
                                  <h1 className="text-xl uppercase mx-2 font-medium">
                                    {coin.item.symbol}
                                  </h1>
                                  {coin.item.data.price_change_percentage_24h.usd.toFixed(
                                    2
                                  ) < 0 ? (
                                    <h1 className="text-red-600">
                                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                                        2
                                      )}{" "}
                                      %
                                    </h1>
                                  ) : (
                                    <h1 className="text-green-600">
                                      +
                                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                                        2
                                      )}{" "}
                                      %
                                    </h1>
                                  )}
                                </div>
                                <h1 className="text-2xl font-semibold mt-3">
                                  $ {coin.item.data.price}
                                </h1>
                                <div className="w-full h-[6rem] mt-1">
                                  <div className="w-4/5 h-full m-auto flex justify-center">
                                    <img
                                      src={coin.item.data.sparkline}
                                      alt="sparkline"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </SwiperSlide>
                      </div>
                    );
                  })
                )}
              </ul>
            </Swiper>
          </div>
          <div className="w-full h-fit">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              spaceBetween={20}
              navigation={true}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
            >
              <ul className="flex gap-3">
                {load ? (
                  <Loader />
                ) : (
                  trending.map((coin) => {
                    return (
                      <div key={coin.item.id}>
                        <SwiperSlide>
                          <li className="w-full h-fit my-4 rounded-lg border border-slate-300">
                            <Link>
                              <div className="p-2">
                                <div className="flex items-center ">
                                  <img
                                    src={coin.item.large}
                                    alt={coin.item.symbol}
                                    className="rounded-lg size-8"
                                  />
                                  <h1 className="text-xl uppercase mx-2 font-medium">
                                    {coin.item.symbol}
                                  </h1>
                                  {coin.item.data.price_change_percentage_24h.usd.toFixed(
                                    2
                                  ) < 0 ? (
                                    <h1 className="text-red-600">
                                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                                        2
                                      )}{" "}
                                      %
                                    </h1>
                                  ) : (
                                    <h1 className="text-green-600">
                                      +
                                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                                        2
                                      )}{" "}
                                      %
                                    </h1>
                                  )}
                                </div>
                                <h1 className="text-2xl font-semibold mt-3">
                                  $ {coin.item.data.price}
                                </h1>
                                <div className="w-full h-[6rem] mt-1">
                                  <div className="w-4/5 h-full m-auto flex justify-center">
                                    <img
                                      src={coin.item.data.sparkline}
                                      alt="sparkline"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </SwiperSlide>
                      </div>
                    );
                  })
                )}
              </ul>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlsoLike;
