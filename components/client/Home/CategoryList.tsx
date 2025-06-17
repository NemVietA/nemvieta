import Link from "next/link";

export default function CategoryGrid() {
  return (
    <div
      id="category-grid"
      className="bg-transparent md:bg-slate-100 md:grid grid-cols-4 justify-between lg:mt-10 items-center d:w-[1400px] mx-auto p:w-auto hidden scroll-middle-view"
    >
      <div className="grid grid-cols-4 grid-rows-2 gap-2 col-span-4 h-[380px]">
        {/* Ô lớn phía trên */}
        <div className="col-span-3 row-span-1 items-center justify-center grid grid-cols-2 grid-rows-1 gap-2">
          <Link
            href="san-pham/nem?type=nem-cao-su"
            className="col-span-1 relative h-full cursor-default overflow-hidden"
          >
            <img
              src="image/nemcaosu.jpg"
              className="object-cover w-full h-full hover:scale-x-110 transition-all duration-500"
            />
            <div className="w-2/4 h-1/3 bg-white uppercase text-textHeadSession font-Questrial text-[20px] font-bold rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-60 flex justify-center items-center">
              Nệm cao su
            </div>
          </Link>
          <Link
            href="san-pham/nem?type=nem-foam"
            className="col-span-1 relative bg-yellow-50 row-span-1 h-full cursor-default overflow-hidden"
          >
            <img
              src="image/foam.jpg"
              className="object-cover w-full h-full hover:scale-x-110 transition-all duration-500"
            />
            <div className="w-2/4 h-1/3 uppercase shadow-2xl bg-white text-textHeadSession font-bold font-Questrial text-[20px] rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-60 flex justify-center items-center">
              Nệm Foam
            </div>
          </Link>
        </div>

        <div className="col-span-1 row-span-2 relative flex items-center justify-center overflow-hidden">
          <Link
            href="san-pham/nem?type=nem-thong-hoi"
            className="h-full w-full relative overflow-hidden"
          >
            <img
              src="image/thonghoi.jpg"
              className="object-cover w-full h-full hover:scale-x-110 transition-all duration-500"
            />
          </Link>

          <div className="cursor-default text-center absolute top-[50%] translate-y-[-50%] left-1/2 transform -translate-x-1/2 w-3/4 h-1/6 bg-white uppercase text-textHeadSession font-Questrial font-bold text-[20px] rounded-xl opacity-60 flex justify-center items-center">
            Nệm Thông Hơi
          </div>
        </div>

        {/* Ba ô nhỏ phía dưới */}
        <Link
          href="san-pham/nem?type=bong-ep"
          className="col-span-1 row-span-1 relative bg-blue-300 flex items-center justify-center cursor-default overflow-hidden"
        >
          <img
            src="image/bongepresize.jpg"
            className="object-cover w-full h-full hover:scale-x-110 transition-all duration-500"
          />
          <div className="w-3/4 h-1/3 bg-white uppercase text-textHeadSession font-Questrial font-bold text-[20px] rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-60 flex justify-center items-center">
            Bông Ép
          </div>
        </Link>

        <div className="col-span-1 row-span-1 bg-blue-300 flex items-center justify-center relative overflow-hidden">
          <Link
            href="san-pham/nem?type=nem-pe"
            className="h-full w-1/3 relative overflow-hidden"
          >
            <img
              src="image/nempe.webp"
              className="object-cover w-full h-full hover:scale-x-[200%] transition-all duration-500"
            />
          </Link>
          <Link
            href="san-pham/nem?type=nem-loxo"
            className="h-full w-2/3 relative overflow-hidden"
          >
            <img
              src="image/loxo.jpg"
              className="object-cover w-full h-full hover:scale-x-[150%] transition-all duration-500"
            />
          </Link>
          <div className="w-2/4 h-1/3 cursor-default bg-white uppercase text-textHeadSession font-Questrial font-bold text-[20px] rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-60 flex justify-center items-center">
            Nệm PE/Lò Xo
          </div>
        </div>
        <Link
          href="san-pham/phu-kien"
          className="col-span-1 row-span-1 bg-customBgHeader relative flex items-center justify-center overflow-hidden"
        >
          <div className="h-full">
            <img
              src="image/drap.jpg"
              className="object-cover w-full h-full hover:scale-x-[200%] transition-all duration-500"
            />
          </div>
          <div className="h-full w-[100%]">
            <img
              src="image/goi.jpg"
              className="object-cover w-full h-full hover:scale-x-[220%] transition-all duration-500"
            />
          </div>
          <div className="h-full w-[150%]">
            <img
              src="image/phukien.jpg"
              className="object-cover w-full h-full hover:scale-x-[220%] transition-all duration-500"
            />
          </div>
          <div className="text-center cursor-default w-3/4 h-1/3 bg-white uppercase text-textHeadSession font-Questrial font-bold text-[20px] rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-60 flex justify-center items-center">
            Drap-Gối-Phụ kiện
          </div>
        </Link>
      </div>
    </div>
  );
}
