"use client";
import moment from "moment";

import Link from "next/link";
import React from "react";

const HomeNews = ({ Data }: any) => {
  const DetailFirstPostDate = moment
    .unix(Data[0]?.createdAt.seconds)
    .format("MMMM DD, YYYY");
  const truncatedContent = Data[0]?.content
    ? Data[0]?.content.substring(0, 300)
    : "";
  const markupFirst = { __html: truncatedContent };
  return (
    <div
      id="news"
      className="scroll-middle-view p:bg-slate-200 d:bg-transparent py-3 grid grid-cols-4 justify-between gap-10 items-center d:w-[1400px] mx-auto p:w-auto"
    >
      <div className="col-span-4  p:w-auto d:mx-auto font-LexendDeca font-extralight ">
        <div className="font-Questrial font-bold md:text-[24px] relative text-[17px] text-textHeadSession pb-2 w-full flex flex-col items-center justify-center">
          <h2 className="p:bg-slate-200 d:bg-slate-100 px-5 z-[2]">
            CHIA SẺ VỚI BẠN
          </h2>
          <div className="w-full border-b-2 border-gray-300 absolute"></div>
        </div>
        <div className="grid grid-cols-3  mt-1 d:gap-4 d:flex-row p:flex-col min-h-[600px]">
          <div className="d:col-span-1 p:col-span-4 relative">
            <div className="h-full cursor-pointer bg-black overflow-hidden">
              <div className="h-full w-full bg-gray-500 bg-gradient-to-b  from-white hidden to-colortopdownBlue opacity-50 absolute"></div>
              <img
                src={Data[0]?.image}
                alt="first post image"
                className="h-full w-full object-cover hover:scale-125 cursor-default duration-1000"
              />
            </div>
            <div className="w-full font-LexendDeca font-extralight mt-5 p-5 bg-[#55a6f78c] absolute bottom-0 rounded-tl-3xl rounded-tr-3xl text-white">
              <Link href={`/tin-tuc/${Data[0]?.url}`}>
                <p className="md:text-[15px] text-[10px] font-Questrial text-mainyellow">
                  {DetailFirstPostDate}
                </p>
                <h2 className="font-Questrial font-bold hover:text-mainorange duration-300 text-[15px] d:text-[20px]">
                  {Data[0]?.title}
                </h2>
              </Link>
              <div
                dangerouslySetInnerHTML={markupFirst}
                className=" text-[14px] truncate2 mt-2 p:hidden d:block font-Questrial"
              ></div>
            </div>
          </div>
          <div className="d:col-span-2 col-span-3 grid sm:max-h-[60vh] d:max-h-[600px] grid-cols-2 justify-items-end overflow-hidden md:grid-rows-2 md:py-10 md:pl-5 gap-2">
            {Data.slice(1, 4).map((item: any, idx: number) => {
              const DetailPostDate = moment
                .unix(item?.createdAt.seconds)
                .format("MMMM DD, YYYY");
              const content = item?.content;
              const maxLength = 200;
              const truncatedContent = content
                ? content.substring(0, maxLength)
                : "";

              const markup = { __html: truncatedContent };
              return (
                <div
                  key={idx}
                  className={
                    idx !== 2
                      ? "hover:bg-gray-100 duration-300 w-full max-f-[100%] col-span-1"
                      : "hover:bg-gray-100 duration-300 w-full col-span-2 md:block hidden row-span-1"
                  }
                >
                  <div className="pt-0 relative h-full w-full">
                    <Link href={`/tin-tuc/${item.url}`}>
                      <div className="w-full  h-full overflow-hidden col-span-3 bg-red-400">
                        <img
                          src={item.image}
                          alt="news"
                          className="w-full h-full object-cover hover:scale-110 duration-300"
                        />
                      </div>
                    </Link>
                    <div className=" font-LexendDeca font-extralight mt-5 p-5 bg-[#55a6f78c] absolute bottom-0 rounded-tl-3xl rounded-tr-3xl text-white">
                      <Link href={`/tin-tuc/${item.url}`}>
                        <p className="md:text-[15px] text-[10px] font-Questrial text-mainyellow">
                          {DetailPostDate}
                        </p>
                        <h2 className="font-Questrial font-bold hover:text-mainorange duration-300 text-[15px] d:text-[20px]">
                          {item.title}
                        </h2>
                      </Link>

                      <div
                        dangerouslySetInnerHTML={markup}
                        className=" text-[14px] mt-2 truncate2 font-Questrial "
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
