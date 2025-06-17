"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../Product/ProductCard";
import TopSellingProductsMobile from "./TopSellingProductsMobile";

const TopSellingProducts = () => {
  const { Products } = useData();
  let ProductFiltered: any;

  if (Products?.length > 0) {
    ProductFiltered = Products.filter((item: any) => {
      if (item.parent2Url === "san-pham-ban-chay") return true;
      return false;
    });
  }

  return (
    <div id="top-sell" className="scroll-middle-view">
      {ProductFiltered?.length > 0 && (
        <div className="grid grid-cols-12 justify-between items-center bg-slate-200 md:bg-slate-100 d:w-[1400px] mx-auto p:w-auto md:mt-20">
          <div
            id="discount"
            className="scroll-middle-view bg-no-repeat bg-cover col-span-12 md:pt-10 md:bg-transparent"
          >
            <div className="w-full p:w-auto d:mx-0 p:mx-2">
              <div className="h-10 md:pb-10 flex  justify-center items-center gap-5">
                <div>
                <h2 className="md:pl-5 font-Questrial font-bold md:text-[24px] pt-5 md:pt-0 text-[17px] text-textHeadSession">
                  SẢN PHẨM BÁN CHẠY
                </h2>
                </div>
              </div>
              <div className="d:flex p:hidden bg-[url('/image/')] bg-no-repeat bg-fill bg-center">
                <div className="w-full py-10 d:flex justify-between">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={30}
                    slidesPerView={5}
                    centeredSlides={true}
                  >
                    {ProductFiltered?.map((item: any, idx: number) => (
                      <SwiperSlide key={idx} className="col-span-1 w-full">
                        <ProductCard Data={item} labelProduct="Best selling" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <TopSellingProductsMobile />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopSellingProducts;
