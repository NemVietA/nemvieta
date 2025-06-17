"use client";
import React from "react";

const DisplayPost = ({ Data }: any) => {
  const markup = { __html: Data[0]?.content };
  return (
    <div>
      <div className="  ">
        <h1 className="text-[28px] font-semibold">{Data[0]?.topic}</h1>
        <div dangerouslySetInnerHTML={markup} className="mt-5"></div>
      </div>
    </div>
  );
};

export default DisplayPost;
