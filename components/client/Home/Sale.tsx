"use client";
import TimeSale from "@components/items/client-items/TimeSale";
import { convertListIdToProduct } from "@components/items/server-items/Handle";
import { useData } from "@context/DataProviders";
import moment from "moment";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProductCard from "../Product/ProductCard";

const Sale = () => {
  const { Products, Sale } = useData();
  const currentTime = new Date();
  const formatCurrentTime = moment(currentTime).format("YYYY-MM-DD");
  let ProductFiltered: any;
  if (Sale?.salelist?.length > 0) {
    ProductFiltered = convertListIdToProduct(Sale.salelist, Products);
  }

  return (
    <div>
      {ProductFiltered?.length !== 0 && (
        <div className="grid grid-cols-4 justify-between items-center d:w-[1400px] mx-auto p:w-auto">
          <div className=" flex justify-end col-span-4">
            <div className="pr-5">{/* <TimeSale /> */}</div>
          </div>
          <div
            id="discount"
            className="scroll-middle-view bg-no-repeat bg-cover col-span-4 md:pt-10 md:bg-transparent bg-slate-200"
          >
            <div className=" bg-red p:w-auto d:mx-0 p:mx-2">
              <div className="h-10 md:py-10 py-5 flex  justify-center items-center gap-5">
                <div className=" text-center">
                  {/* <img
                    src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/Your%20paragraph%20text.png?alt=media&token=414f819b-9c58-4836-84f9-80fb359a7fea"
                    alt="sale topic"
                    className="w-full h-[150px]"
                  /> */}
                  <h2 className="font-Questrial font-bold md:text-[24px] text-[17px] text-textHeadSession">
                    SẢN PHẨM KHUYẾN MÃI
                  </h2>
                  <h3 className="font-Questrial md:text-[15px] text-[10px] text-gray-400 font-medium">
                    Các chương trình khuyến mãi đặc biệt đến từ Nệm Việt Á
                  </h3>
                </div>
              </div>
              <div className="flex justify-between md:flex-wrap-reverse lg:flex-nowrap">
                <div className="d:grid grid-cols-1 p:hidden w-full  items-center">
                  <div className=" col-span-1 gap-4 pr-5 ">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      spaceBetween={30}
                      slidesPerView={3}
                    >
                      {ProductFiltered?.map((item: any, idx: number) => (
                        <SwiperSlide key={idx}>
                          <ProductCard Data={item} labelProduct={"Sale"} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className=" d:hidden p:w-full p:flex justify-center p:mt-5">
                  <div className=" grid grid-cols-2 gap-2">
                    {ProductFiltered?.map((items: any, idx: number) => (
                      <div key={idx} className="col-span-1">
                        <ProductCard Data={items} labelProduct={"Sale"} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-[700px] md:w-full min-h-[500px] hidden md:block">
                  <img
                    src="image/caycaoxu.png"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sale;
