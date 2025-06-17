"use client";
import React from "react";
import "swiper/css";

const SlideLoading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center d:mt-[-50px] z-50">
      <div className="flex flex-col items-center w-full">
        <div className="classic-4">Đang tải ...</div>
      </div>
    </div>
  );
};

export default SlideLoading;
