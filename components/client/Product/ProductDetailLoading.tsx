const ProductDetailLoading = () => {
  return (
    <div className="flex flex-col gap-5 d:w-[1400px] d:mx-auto p:w-auto p:mx-2 py-14">
      <div className="grid p:grid-cols-1 d:grid-cols-2 d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 pb-14">
        <div className="rounded-lg d:h-max p:h-auto overflow-hidden">
          <div className="w-full flex justify-center">
            <div className="bg-gray-300 animate-pulse h-80 w-full"></div>
          </div>
          <div className="w-full bg-gray-300 mt-3 h-20"></div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="bg-gray-300 animate-pulse h-8 w-3/4"></div>
            <div className="bg-gray-300 h-1 w-24"></div>
          </div>
          <div className="bg-gray-300 animate-pulse h-6 w-1/2"></div>
          <div className="flex gap-5 d:flex-row p:flex-col">
            <div className="flex">
              <div className="border p-2 bg-mainyellow animate-pulse cursor-default text-white rounded-lg h-8 w-40"></div>
            </div>
            <div className="flex">
              <div className="bg-gray-300 animate-pulse h-8 w-40"></div>
            </div>
          </div>
          <div className="py-4 border-t border-b w-full font-light">
            <h3 className="bg-gray-300 animate-pulse h-8 w-1/4"></h3>
            <div className="bg-gray-300 animate-pulse h-6 w-3/4"></div>
          </div>
          <div className="flex gap-3 items-center font-light">
            <span className="bg-gray-300 animate-pulse h-6 w-1/4"></span>
          </div>
        </div>
      </div>
      <div className="grid p:grid-cols-1 d:grid-cols-4 gap-5">
        <div className="d:px-16 py-5 p:px-2 border col-span-3">
          <div className="bg-gray-300 animate-pulse h-12 w-full"></div>
        </div>
        <div className="col-span-1">
          <h3 className="text-mainred py-2 border-b-2 border-mainred uppercase font-bold">
            Sản Phẩm Liên Quan
          </h3>
          <div>
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="flex gap-3 py-3 border-b hover:bg-gray-100 duration-300"
              >
                <div className="flex-[30%]">
                  <div className="bg-gray-300 animate-pulse h-24 w-full"></div>
                </div>
                <div className="flex-[60%]">
                  <div className="bg-gray-300 animate-pulse h-6 w-3/4"></div>
                  <div className="flex">
                    <div className="py-1 bg-mainred text-maingreen flex gap-2 items-center text-[15px]">
                      <div className="bg-gray-300 animate-pulse h-6 w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailLoading;
