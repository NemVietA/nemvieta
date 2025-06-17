import Introduction from "@components/client/Introduction/Introduction";
import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const IntroductionPage = async () => {
  return (
    <div>
      <div className="mt-[-50px] d:mx-auto p:w-auto">
        <Introduction />
      </div>
    </div>
  );
};

export default IntroductionPage;
