import DisplayPost from "@components/client/Posts/DisplayPost";
import PostCategory from "@components/client/Posts/PostCategory";
import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const IntroductionPage = async ({
  params,
}: {
  params: { introduction: string };
}) => {
  const Data = await getDataByTypeProps(
    "posts",
    "topicUrl",
    params.introduction
  );

  return (
    <div>
      <div className="d:w-[1400px] d:mx-auto p:w-auto p:mx-2 grid p:grid-cols-1 d:grid-cols-5 gap-10 py-10">
        <div className="flex flex-col gap-5">
          <div className="border h-max border-gray-400">
            <PostCategory />
          </div>
        </div>
        <div className="col-span-4">
          <DisplayPost Data={Data} />
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
