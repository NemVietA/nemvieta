import React from "react";
import ProductCard from "../Product/ProductCard";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const DisplayHomeProduct = ({ Data, Topic, url, isEven = false }: any) => {
  return !Data?.length ? (
    <></>
  ) : (
    <div className={" pt-5 pb-5 px-2 bg-gray-100"}>
      <div>
        <div
          className={
            "w-full flex p:gap-2 d:gap-20 p:items-start border-b-4 border-mainblue   d:items-center d:flex-row p:flex-col"
          }
        >
          <div className="flex items-center justify-between w-full cursor-pointer">
            <h2
              className={
                " py-2 uppercase font-semibold text-[18px] text-textHeadSession hover:border-mainyellow hover:text-mainyellow duration-300 "
              }
            >
              {Topic}
            </h2>
            <div className="flex gap-3 text-black my-2 items-center justify-center scrollbar-thin overflow-x-auto  scrollbar-thumb-blue-300 scrollbar-track-gray-200">
              <Link
                href={`/san-pham/${url}`}
                className={
                  "px-4 py-1 cursor-pointer hover:bg-gray-100 duration-300 rounded-full"
                }
              >
                <p
                  className={
                    isEven ? "w-max font-semibold" : "w-max font-semibold "
                  }
                >
                  <AiOutlineArrowRight />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid p:grid-cols-2 d:grid-cols-5 gap-2 mt-4">
        {Data.map((item: any, idx: number) => {
          return <ProductCard Data={item} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default DisplayHomeProduct;
