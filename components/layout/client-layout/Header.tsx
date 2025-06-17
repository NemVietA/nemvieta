"use client";
import { HeaderItems, HeaderItemsLagre } from "@assets/item";
import { getAllDocuments } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { formatPhoneNumber } from "@ultis/formatPhoneNumber";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaPhone, FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";

// Định nghĩa kiểu dữ liệu cho sản phẩm
type Product = {
  title: string;
  id: string;
  url: string;
};
const Header = () => {
  const { ContactData, setContactData, Products } = useData();
  const [search, setSearch] = useState<string>("");
  const [searchRs, setSearchRs] = useState<Product[]>([]);
  const [openSearchMB, setOpenSearchMB] = useState<boolean>(false);
  const [openTypeMB, setOpenTypeMB] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [tradeMarkData, setTradeMarkData] = useState<any>();
  const [cartItems, setCartItems] = useState<any[]>([]); // State lưu trữ danh sách sản phẩm trong giỏ hàng
  const [totalItems, setTotalItems] = useState<number>(0); // Tổng số lượng sản phẩm trong giỏ hàng
  const router = useRouter();
   // Hàm chuẩn hóa không dấu
   function normalizeText(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  // Hàm đọc giỏ hàng từ localStorage
  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart); // Cập nhật state `cartItems`
    }
  };
 // Tính tổng số lượng sản phẩm khi `cartItems` thay đổi
 useEffect(() => {
  const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  setTotalItems(total);
}, [cartItems]); // Chỉ chạy khi `cartItems` thay đổi
// Cập nhật giỏ hàng từ localStorage khi component mount
useEffect(() => {
  loadCartFromLocalStorage();
  // Lắng nghe sự thay đổi từ localStorage và đồng bộ
  window.addEventListener("storage", loadCartFromLocalStorage);
  return () => {
    window.removeEventListener("storage", loadCartFromLocalStorage);
  };
}, []);
  // Lọc sản phẩm theo từ khóa tìm kiếm
  useEffect(() => {
    const filteredProducts = Products.filter((product: Product) =>
      normalizeText(product.title).includes(normalizeText(search))
    );
    setSearchRs(filteredProducts); // Cập nhật kết quả tìm kiếm
  }, [search, Products]);
  // Handle Search khi nhấn Enter hoặc click vào nút tìm kiếm
  const HandleSearch = () => {
    if (search) {
      router.push(`/san-pham?search=${search}`); // Chuyển hướng đến trang kết quả tìm kiếm
      setSearch(""); // Reset search input
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      HandleSearch();
    }
  };
   // Hàm đóng danh sách tìm kiếm khi chọn sản phẩm
   const handleSelectProduct = (productUrl: string) => {
    router.push(`/chi-tiet-san-pham/${productUrl}`); // Chuyển hướng tới trang chi tiết sản phẩm
    setSearch(""); // Reset lại ô tìm kiếm
  };
  return (
    <>
      <div className="d:block sticky z-50 w-full top-[-70px] p:hidden">
        <div className="relative bg-gradient-to-r from-customBgHeader to-customBgHeader">
          <div className="grid grid-cols-5 justify-between items-center d:w-[1400px] mx-auto p:w-auto">
          <a href={`/`} className="p-1 h-[70px]">
            <img
              src="image/LOGO.png"
              className="p-1 h-[70px]"
              alt="VA Logo"
            />
          </a>
             {/* Giao diện tìm kiếm */}
        <div className="relative col-span-2 flex justify-center w-full">
          <div className="w-full rounded-full flex items-center overflow-hidden" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="pl-4 w-full justify-between items-center grid grid-cols-7">
              <input
                type="text"
                className="outline-none text-textCustom mr-2 col-span-6 font-Questrial font-medium bg-transparent"
                placeholder="Bạn đang tìm gì?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown} // Nhấn Enter để tìm kiếm
              />
            </div>
            <div
              className="py-3 px-6 text-white rounded-r-full cursor-pointer"
              style={{ backgroundColor: "#1e88e5" }}
              onClick={HandleSearch}
            >
              <FaSearch />
            </div>
          </div>
          {/* Kết quả tìm kiếm */}
          {search && searchRs.length > 0 && (
            <div className="absolute w-full bg-blue-100 top-full flex flex-col shadow-inner z-50 mt-2">
              <div className="flex flex-col">
                {searchRs.map((product: Product, idx: number) => (
                  <div
                    key={idx}
                    className="cursor-pointer p-2 hover:bg-blue-200"
                    onClick={() => handleSelectProduct(product.url)} // Chọn sản phẩm và đóng danh sách
                  >
                    {product.title}
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <div
                  className={`${search ? "block" : "hidden"} text-black w-max p-1 rounded-full text-[15px] cursor-pointer`}
                  onClick={() => setSearch("")}>
                  <RxCross2 />
                </div>
              </div>
            </div>
          )}
          {search && searchRs.length === 0 && (
            <div className="absolute w-full bg-red-100 top-full flex flex-col shadow-inner z-50 mt-2">
              <div className="p-2 text-center">Không Có Sản Phẩm Nào!</div>
            </div>
          )}
        </div>
            <div className="flex justify-end col-span-2">
             <div className="py-2 px-4 text-white h-[50px] rounded-[50%] ml-5 relative">
                <Link href="/gio-hang">
                  <span className="uppercase font-normal text-[20px] p-2 -translate-y-3">
                    <FaShoppingCart />
                  </span>
                </Link>
                {/* Hiển thị số lượng sản phẩm */}
                {totalItems > 0 && (
                  <span className="absolute top-[8px] right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </div>
              <div className="py-2 px-4 text-red-500 flex justify-center">
                <span className="uppercase font-normal text-[22px] col-span-1 p-4 animate__animated animate__infinite">
                  <FaPhone />
                </span>
                <span className="col-span-1 font-normal">
                <span className="text-white">Hotline: </span>
                <a href={`tel:${ContactData.phone}`} className="font-medium">
                  0888 400 007
                </a>
                <span className="text-white font-medium"> - </span>
                <a href="tel:18008384" className="font-medium">
                  1800 8384
                </a>
                <br />
                <span
                  className="text-white font-normal"
                  style={{ fontSize: "13px" }}
                >
                  (Mua Hàng - Góp Ý - Bảo Hành)
                </span>
              </span>
                <span className="h-[50px] rounded-[50%] ml-5">
                  <img
                    src="image/ISOlogo.png"
                    className="object-contain w-full h-full"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full absolute bottom-0 translate-y-[120%]">
            <div
              className="col-span-3 bg-gradient-to-b from-customBgHeader via-gray-100 to-colortopdownBlue text-textCustom px-10 rounded-3xl pl-18"
              style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="flex gap-10 mt-4 w-full justify-center">
                {HeaderItemsLagre.map((item: any, idx: number) => (
                  <div className="relative group/main" key={idx}>
                    <Link
                      className="uppercase font-medium duration-300 flex items-center text-[16px] gap-2"
                      href={`/${item.value}`}
                    >
                      <p> {item.label}</p>
                      {item.label === "Sản phẩm" && (
                        <AiOutlineDown className="text-[10px] group-hover/main:rotate-180 duration-300 text-red" />
                      )}
                    </Link>
                    <div className="h-[2px] bg-white w-0 group-hover/main:w-full duration-300 mt-3 "></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d:hidden p:block">
        <div className="h-[64px] fixed z-50 w-full top-0 bg-customBgHeader text-white shadow-xl">
          <div className="px-4 w-full h-full flex justify-between items-center">
            {/* Nút menu */}
            <div className="h-[50px] w-[50px] flex items-center justify-center text-white cursor-pointer">
              <IoIosMenu onClick={() => setOpen(!open)} />
            </div>
            {/* Logo (Căn giữa khung) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-[150px]">
                <a href="/" className="block">
                  <img
                    src="image/LOGO.png"
                    alt="Logo"
                    className="object-contain w-full h-full"
                  />
                </a>
              </div>
            {/* Nút tìm kiếm và giỏ hàng */}
          <div
            className="flex items-center space-x-2"
            onClick={() => {
              if (openSearchMB) setOpenSearchMB(false); // Đóng tìm kiếm khi nhấp ra ngoài
            }}
          >
            {/* Giao diện tìm kiếm */}
            <div
              className="relative col-span-2 flex justify-center w-full"
              onClick={(e) => e.stopPropagation()} // Ngăn sự kiện lan ra ngoài vùng tìm kiếm
            >
             <div className="w-full rounded-full flex items-center overflow-hidden">
              {/* Ô nhập tìm kiếm trên di động */}
              <div className={`w-full flex items-center justify-between ${openSearchMB ? 'px-8' : 'px-2'}`}>
                <input
                  type="text"
                  className="outline-none text-textCustom mr-2 w-full font-Questrial font-medium"
                  placeholder="Bạn đang tìm gì?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    display: openSearchMB ? 'block' : 'none',
                    backgroundColor: "#ffffff", // Nền trắng
                    color: "#000000", // Chữ đen
                    borderRadius: '50px', // Bo góc tròn cho ô nhập
                    padding: '8px 16px', // Thêm padding cho ô nhập
                    border: '1px solid #ddd', // Viền nhẹ
                  }}
                />
                {/* Icon tìm kiếm */}
                <div
                  className={`text-white w-[40px] h-[40px] flex items-center justify-center cursor-pointer ${openSearchMB ? 'hidden' : 'block'}`}
                  onClick={() => setOpenSearchMB(true)} // Mở ô nhập tìm kiếm khi nhấn vào icon
                >
                  <FaSearch size={20} />
                </div>                
                {/* Nút xóa hoặc đóng thanh tìm kiếm */}
                <div
                  className={`absolute top-0 right-1 p-2 text-white cursor-pointer ${openSearchMB ? 'block' : 'hidden'}`}
                  onClick={() => {
                    setSearch(""); // Xóa nội dung tìm kiếm
                    setOpenSearchMB(false); // Đóng thanh tìm kiếm
                  }}
                >
                  <RxCross2 size={15} />
                </div>
              </div>
            </div>
              {/* Kết quả tìm kiếm */}
              {search && searchRs.length > 0 && (
                <div className="absolute w-full bg-blue-500 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className="flex flex-col">
                    {searchRs.map((product: Product, idx: number) => (
                      <div
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-blue-200"
                        onClick={() => {
                          handleSelectProduct(product.url); // Chọn sản phẩm và đóng danh sách
                          setOpenSearchMB(false); // Đóng thanh tìm kiếm
                        }}
                      >
                        {product.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {search && searchRs.length === 0 && (
                <div className="absolute w-full bg-red-100 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className="p-2 text-center">Không Có Sản Phẩm Nào!</div>
                </div>
              )}
            </div>
              {/* Nút giỏ hàng */}
              <div className="h-[50px] w-[50px] flex items-center justify-center text-white cursor-pointer">
                <Link href="/gio-hang">
                  <FaShoppingCart />
                </Link>
                {/* Hiển thị số lượng sản phẩm */}
                {totalItems > 0 && (
                  <span className="absolute top-[8px] right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full leading-[calc(40%-2px)]">
                    {totalItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={300}>
      <div className="flex flex-col">
          {HeaderItems.map((item: any, idx: number) => (
            <Link
              href={`/${item.value}`}
              className="text-[16px] py-2 border-b border-mainblue"
              key={idx}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Header;
