import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-[1500px] mx-auto bg-[rgba(255,255,200,0.2)] shadow-lg rounded-xl p-8 border border-[rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 font-Inter font-bold text-black">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;

