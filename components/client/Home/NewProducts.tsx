"use client";
import { useData } from "@context/DataProviders";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../Product/ProductCard";
import { Pagination } from "antd";
import { ITEMS_PER_PAGE } from "@assets/item";

const NewProducts = () => {
  const { Products } = useData();
  let ProductFiltered: any;

  if (Products?.length > 0) {
    ProductFiltered = Products.filter((item: any) => {
      if (item.parent2Url === "san-pham-moi") return true;
      return false;
    });
  }

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = ProductFiltered?.slice(startIndex, endIndex);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div id="new-product" className="scroll-middle-view">
      {ProductFiltered?.length > 0 && (
        <div className="grid grid-cols-12 justify-between md:bg-slate-100 bg-slate-200 items-center d:w-[1400px] mx-auto p:w-auto md:mt-20">
          <div className="md:col-span-4 hidden md:block col-span-12 h-full md:min-h-[500px] max-h-[800px] sm:max-h-[200px] relative">
            <img
              src="image/sumenh.png"
              className="w-full h-full object-contain"
              alt="SuMenh Image"
            />
            {/* <div className=" md:bg-slate-100 sm:bg-slate-200  absolute top-[50%] w-9/12 left-[50%] translate-x-[-50%] translate-y-[-50%] font-Questrial text-[30px] rounded-2xl opacity-70 p-5 text-textHeadSession">
              Sản phẩm mới ra mắt
            </div> */}
          </div>
          <div
            id="discount"
            className="scroll-middle-view bg-no-repeat bg-cover md:col-span-8 col-span-12 md:pt-10 md:bg-transparent"
          >
            <div className="w-full p:w-auto d:mx-0 p:mx-2">
              <div className="md:h-10 md:pb-10 flex  md:justify-start justify-center items-center gap-5">
                <div className="p:flex flex-col items-center md:block">
                  <h2 className="md:pl-5 font-Questrial font-bold md:text-[24px] pt-5 md:pt-0 text-[17px] text-textHeadSession">
                    SẢN PHẨM MỚI
                  </h2>
                  <h3 className="font-Questrial md:text-[15px] text-[10px] text-gray-400 font-medium md:pl-5">
                    Cùng khám phá các sản phẩm mới của chúng tôi
                  </h3>
                </div>
              </div>
              <div className="d:flex p:hidden">
                <div className="w-full pl-5 d:flex justify-between">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={30}
                    slidesPerView={3}
                  >
                    {ProductFiltered?.map((item: any, idx: number) => (
                      <SwiperSlide key={idx} className="col-span-1 w-full">
                        <ProductCard Data={item} labelProduct="Hot New" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="d:hidden p:block">
                {/* Hiển thị danh sách sản phẩm theo phân trang */}
                <div className="grid grid-cols-2 gap-3">
                  {currentProducts?.map((items: any, idx: number) => (
                    <div key={idx} className="col-span-1">
                      <ProductCard Data={items} labelProduct="Hot New" />
                    </div>
                  ))}
                </div>

                <Pagination
                  current={currentPage}
                  pageSize={ITEMS_PER_PAGE}
                  total={ProductFiltered?.length}
                  onChange={onPageChange}
                  className="mt-4 flex justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProducts;
