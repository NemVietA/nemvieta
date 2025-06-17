"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const ItemIntro = ({ item }: any) => {
  return (
    <div className="lg:min-h-[100px] lg:min-w-[150px] flex flex-col items-center bg-white font-Questrial p-5  w-[49%]">
      <div className="lg:text-[70px] text-[30px] font-bold text-colortopdownBlue">
        {item.value ?? ""}
      </div>
      <div className="lg:text-[20px] text-[15px] font-bold text-textHeadSession">
        {item.unit ?? ""}
      </div>
      <div className="lg:text-[18px] text-[10px] text-textHeadSession">
        {item.label ?? ""}
      </div>
    </div>
  );
};

export default ItemIntro;
