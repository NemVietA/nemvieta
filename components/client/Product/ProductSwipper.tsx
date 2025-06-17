"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import { Autoplay } from "swiper/modules";

interface ProductSwiperProps {
  products: any[];
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({ products }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      navigation
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {products.slice(0, 8).map((item, idx) => (
        <SwiperSlide key={idx}>
          <ProductCard Data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
