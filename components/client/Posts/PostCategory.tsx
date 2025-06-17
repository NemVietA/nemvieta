import { TypePostItems } from "@assets/item";
import Link from "next/link";
import React from "react";

const PostCategory = () => {
  return (
    <>
      {" "}
      <div className="border h-max border-gray-400">
        <div className="p-3">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết liên quan
          </h2>
          <div className="flex flex-col gap-2 text-[15px] mt-2">
            {TypePostItems.slice(1, TypePostItems.length).map(
              (item: any, idx: number) => (
                <Link
                  key={idx}
                  href={`/bai-viet/${item.value}`}
                  className="hover:text-blue-600 hover:underline duration-300"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCategory;
