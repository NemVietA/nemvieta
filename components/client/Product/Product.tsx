import React from "react";
import ProductCard from "./ProductCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Product = ({ Data, topic }: any) => {
  return (
    <div>
      <div className="w-full mt-5">
        <div className="flex items-center justify-between border-b border-black cursor-pointer">
          <h2 className="border-b-2 py-2 uppercase border-maingreen font-semibold text-[18px] text-maingreen hover:border-mainyellow hover:text-mainyellow duration-300 ">
            {topic}
          </h2>
          <div className="flex items-center ">
            <div className=" p-2 hover:bg-maingreen hover:text-white duration-300">
              <FaAngleLeft />
            </div>
            <div className=" p-2 hover:bg-maingreen hover:text-white duration-300">
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
      <div className="grid p:grid-cols-2 d:grid-cols-4 gap-3 mt-5">
        {Data?.map((item: any, idx: number) => (
          <div
            key={idx}
            className="border cursor-pointer hover:shadow-xl duration-300"
          >
            <div className="p-2">
              <ProductCard Data={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
