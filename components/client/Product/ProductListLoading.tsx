"use client";
const ProductListLoading = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.85)] w-full h-full  min-h-screen d:mt-[-50px]">
      <div className="mx-auto flex flex-col items-center">
        <div className="bg-[url('/image/img_list_product.jpg')] bg-cover w-full bg-[0%_80%] text-white h-[35vh]">
          <div className="w-full flex h-full justify-center items-center flex-col  py-3  px-5"></div>
        </div>
        <div className="d:w-[1200px] w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 mt-4">
          <div className="md:bg-white w-full md:w-[253px] bg-blue-400 relative flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-2 bg-gray-200">
              <div className="w-full md:h-[253px] min-h-[200px] flex justify-center items-center overflow-hidden relative "></div>
              <div className=" flex flex-col gap-1 relative pb-2 p:bg-gray-200 md:bg-transparent min-h-[60px]">
                <div className="font-normal mt-2 text-[9px] uppercase text-gray-500 p:px-2 md:p-0"></div>
                <div className="font-Questrial font-bold text-textHeadSession md:text-[13px] text-[10px] p:px-2 md:p-0"></div>
              </div>
            </div>
          </div>
          <div className="md:bg-white w-full md:w-[253px] bg-gray-400 relative flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-2 bg-gray-200">
              <div className="w-full md:h-[253px] min-h-[200px] flex justify-center items-center overflow-hidden relative "></div>
              <div className=" flex flex-col gap-1 relative pb-2 p:bg-gray-200 md:bg-transparent min-h-[60px]">
                <div className="font-normal mt-2 text-[9px] uppercase text-gray-500 p:px-2 md:p-0"></div>
                <div className="font-Questrial font-bold text-textHeadSession md:text-[13px] text-[10px] p:px-2 md:p-0"></div>
              </div>
            </div>
          </div>
          <div className="md:bg-white w-full md:w-[253px] bg-gray-400 relative flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-2 bg-gray-200">
              <div className="w-full md:h-[253px] min-h-[200px] flex justify-center items-center overflow-hidden relative "></div>
              <div className=" flex flex-col gap-1 relative pb-2 p:bg-gray-200 md:bg-transparent min-h-[60px]">
                <div className="font-normal mt-2 text-[9px] uppercase text-gray-500 p:px-2 md:p-0"></div>
                <div className="font-Questrial font-bold text-textHeadSession md:text-[13px] text-[10px] p:px-2 md:p-0"></div>
              </div>
            </div>
          </div>
          <div className="md:bg-white w-full md:w-[253px] bg-gray-400 relative flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-2 bg-gray-200">
              <div className="w-full md:h-[253px] min-h-[200px] flex justify-center items-center overflow-hidden relative "></div>
              <div className=" flex flex-col gap-1 relative pb-2 p:bg-gray-200 md:bg-transparent min-h-[60px]">
                <div className="font-normal mt-2 text-[9px] uppercase text-gray-500 p:px-2 md:p-0"></div>
                <div className="font-Questrial font-bold text-textHeadSession md:text-[13px] text-[10px] p:px-2 md:p-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListLoading;
