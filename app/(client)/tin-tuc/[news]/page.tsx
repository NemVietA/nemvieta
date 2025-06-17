import NewsCategory from "@components/client/News/NewsCategory";
import { getDataByTypeProps } from "@lib/get-data";

import moment from "moment";
import { Metadata } from "next";

import React from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const NewsDetailPage = async ({ params }: { params: { news: string } }) => {
  const Data = await getDataByTypeProps("posts", "url", params.news);
  const DataCategory = await getDataByTypeProps("posts", "topic", "Tin tức");

  const markup = { __html: Data[0]?.content };
  const DetailPostDate = moment
    .unix(Data[0]?.createdAt.seconds)
    .format("MMMM DD, YYYY");
  return (
    <div className="p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
      <div className="border h-max border-gray-400 col-span-2 d:block p:hidden">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-3 border-b-2 border-black text-gray-800 hover:text-blue-500">
            Bài viết liên quan
          </h2>
          <NewsCategory Data={DataCategory} />
        </div>
      </div>
      <div className="p:col-auto d:col-span-5">
        <div className="pb-6 border-b flex flex-col gap-5">
          <h3 className="text-4xl font-semibold text-gray-800">{Data[0]?.title}</h3>
          <div className="flex gap-6 text-sm text-gray-600">
            <div className="uppercase p-2 text-blue-600 border-2 border-blue-600 rounded-md font-medium">
              {Data[0]?.topic}
            </div>
            <div className="flex items-center gap-2 text-gray-700 pr-6 border-r-2 border-gray-400 hover:bg-gray-100 rounded-lg transition-all duration-300 ease-in-out">
              <AiOutlineClockCircle className="text-blue-500 text-xl hover:text-blue-600 transition-all duration-300 ease-in-out" />
              <p className="text-gray-800 font-medium text-lg hover:text-blue-600 transition-all duration-300 ease-in-out">{DetailPostDate}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out">
              <AiOutlineUser className="text-blue-500 text-2xl hover:text-blue-700 transition-all duration-300 ease-in-out" />
              <p className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-all duration-300 ease-in-out">VietACompany</p>
            </div>
          </div>
        </div>
        {markup && (
          <div
            className="mt-6 font-LexendDeca text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={markup}
          />
        )}
      </div>
      <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <NewsCategory Data={Data} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
