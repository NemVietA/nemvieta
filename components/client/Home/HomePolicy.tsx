"use client";
import { TypePostItems } from "@assets/item";
import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";

const HomePolicy = () => {
  return (
    <div className="py-20 bg-slate-100 grid grid-cols-4 justify-between gap-10 items-center d:w-[1400px] mx-auto p:w-auto">
      <div className=" col-span-4 ">
        <div className="flex justify-between d:flex-row p:flex-col d:gap-0 p:gap-10">
          {TypePostItems.slice(1, 5).map((item, index) => (
            <Link
              href={`/bai-viet/${item.value}`}
              key={index}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="p-5 rounded-full w-max bg-white flex items-center justify-center  hover:scale-110 duration-300">
                <div className="w-24 h-24 ">
                  <Lottie animationData={item.animation} />
                </div>
              </div>
              <h2 className="font-LexendDeca text-[20px] font-normal hover:text-blue-600 duration-300">
                {item.label}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePolicy;
