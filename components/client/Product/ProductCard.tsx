import { Badge } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import "animate.css";
import { formatNumber } from "@ultis/convertStringToNumber";

// Thêm vào giỏ hàng
const addToCart = (product: any) => {
  // Lấy giỏ hàng hiện tại từ localStorage
  const storedCart = localStorage.getItem("cart");
  let cartItems = storedCart ? JSON.parse(storedCart) : [];

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const existingProductIndex = cartItems.findIndex(
    (item: any) => item.id === product.id
  );

  if (existingProductIndex === -1) {
    // Nếu sản phẩm chưa có, thêm vào giỏ hàng
    cartItems.push({ ...product, quantity: 1 });
  } else {
    // Nếu sản phẩm đã có, tăng số lượng lên 1
    cartItems[existingProductIndex].quantity += 1;
  }

  // Lưu lại giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const ProductCard = ({ Data, labelProduct = "" }: any) => {
  const [successMessage, setSuccessMessage] = useState(""); // State để lưu thông báo thành công

  // Get price and newPrice from Data with loop
  let price;
  let sizes: any;
  if (Data?.price[0]) {
    sizes = Object.keys(Data?.price[0]);
  }

  if (sizes) {
    const index = sizes.indexOf("Size");
    if (index > -1) {
      sizes.splice(index, 1);
    }
    sizes.unshift("Size");
  }

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j < sizes.length; j++) {
      if (Data.price[i] && Data.price[i][sizes[j]]) {
        price = Data.price[i][sizes[j]];
        break;
      }
    }
    if (price) {
      break;
    }
  }

  // Xử lý giá mới nếu có
  let newPrice;
  if (Data?.newPrice) {
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j < sizes.length; j++) {
        if (Data.newPrice[i] && Data.newPrice[i][sizes[j]]) {
          newPrice = Data.newPrice[i][sizes[j]];
          break;
        }
      }
      if (newPrice) {
        break;
      }
    }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Ngừng chuyển hướng khi nhấn vào nút Thêm vào giỏ hàng

    // Lấy giỏ hàng hiện tại từ localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const product = {
      id: Data.id,
      title: Data.title,
      image: Data.image,
      price: Data.price,
    };
    // Kiểm tra sản phẩm đã tồn tại hay chưa
    const existingProductIndex = storedCart.findIndex((item: any) => item.id === product.id);
    if (existingProductIndex !== -1) {
      // Sản phẩm đã tồn tại, tăng số lượng
      storedCart[existingProductIndex].quantity += 1;
    } else {
      // Sản phẩm chưa tồn tại, thêm mới với số lượng 1
      storedCart.push({ ...product, quantity: 1 });
    }
    // Cập nhật lại localStorage
    localStorage.setItem("cart", JSON.stringify(storedCart));
    // Hiển thị thông báo thành công
    setSuccessMessage("Sản phẩm đã thêm!");
    setTimeout(() => setSuccessMessage(""), 1000); // Xóa thông báo sau 1 giây
  };

  return (
    <div className="relative">
      {Data.discount === undefined || Data.discount === 0 ? (
        <div className="md:bg-white w-full md:w-[253px] relative flex flex-col justify-between overflow-hidden">
          {labelProduct && (
            <div className="bg-gradient-to-b from-customBgHeader via-white to-colortopdownBlue font-semibold text-[10px] md:text-[13px] text-textHeadSession absolute top-0 z-20 left-0 px-4 rounded-tr-lg rounded-br-lg">
              {labelProduct}
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Link  href={`/chi-tiet-san-pham/${Data.url}`} passHref>
              <div className="w-full md:h-[253px] min-h-[200px] flex justify-center items-center overflow-hidden relative cursor-pointer">
                <img
                  src={Data.image}
                  alt="product"
                  className="object-cover h-full min-h-[200px] hover:scale-110 duration-300 w-full"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-1 relative pb-2 p:bg-white md:bg-transparent">
              <div className="font-normal mt-2 text-[9px] uppercase text-gray-500 p:px-2 md:p-0">
                {Data.type}
              </div>
              <div className="font-Questrial font-bold text-textHeadSession md:text-[13px] text-[10px] p:px-2 md:p-0">
                {Data.title}
              </div>
              <div className="text-redPrimmary flex md:text-[16px] text-[13px] p:px-2 md:p-0">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
              <div className="flex px-2 font-Questrial items-end gap-2 text-red-600 absolute bg-gradient-to-tl from-customBgHeader via-white to-colortopdownBlue top-0 translate-y-[-100%] w-full py-0 md:py-2">
                {Data.newPrice === undefined ? (
                  <p className="md:text-[15px] text-[13px] font-bold">
                    {price === "Liên hệ"
                      ? "Liên hệ"
                      : `${formatNumber(price)}₫`}
                  </p>
                ) : (
                  <>
                    <p className="md:text-[15px] text-[13px] text-redPrimmary font-bold">
                      {price === "Liên hệ"
                        ? "Liên hệ"
                        : `${formatNumber(price)}₫`}
                    </p>
                    <p className="line-through text-[9px] md:text-[11px]">
                      {price === "Liên hệ"
                        ? "Liên hệ"
                        : `${formatNumber(price)}₫`}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Nút Thêm vào giỏ hàng */}
          <button
            onClick={handleAddToCart}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 duration-300 w-full max-w-xs mx-auto text-center flex justify-center items-center whitespace-nowrap"
            >
            Thêm Vào Giỏ Hàng
          </button>
          {/* Thông báo thành công khi thêm vào giỏ hàng */}
          {successMessage && (
            <div className="mt-2 text-green-500 font-medium">{successMessage}</div>
          )}
        </div>
      ) : (
        <div className="md:w-[253px]">
          <Badge.Ribbon
            className="animate__animated animate__backInLeft text-[10px] md:text-[13px]"
            text={`Giảm ${Data.discount}%`}
            color="red"
          >
            <div className="md:bg-white w-full md:w-[253px] relative flex flex-col justify-between overflow-hidden">
              {labelProduct && (
                <div className="bg-gradient-to-b from-customBgHeader via-white to-colortopdownBlue font-semibold text-[10px] md:text-[13px] text-textHeadSession absolute top-0 z-20 left-0 px-4 rounded-tr-lg rounded-br-lg">
                  {labelProduct}
                </div>
              )}
              <div className="flex flex-col gap-2">
                <Link href={`/product/${Data.id}`} passHref>
                  <div className="w-full md:h-[253px] sm:min-h-[200px] flex justify-center items-center overflow-hidden relative md:pb-2 cursor-pointer">
                    <img
                      src={Data.image}
                      alt="product"
                      className="object-cover h-full min-h-[200px] hover:scale-110 duration-300 w-full"
                    />
                  </div>
                </Link>
                <div className="flex flex-col gap-1 relative p:bg-white md:bg-transparent">
                  <div className="font-normal mt-2 text-[9px] uppercase text-gray-500 p:px-2 md:p-0">
                    {Data.type}
                  </div>
                  <div className="font-Questrial font-bold text-textHeadSession md:text-[13px] text-[10px] p:px-2 md:p-0">
                    {Data.title}
                  </div>
                  <div className="text-redPrimmary flex md:text-[16px] text-[13px] p:px-2 md:p-0">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div>
                  <div className="flex px-2 font-Questrial items-end gap-2 text-red-600 absolute bg-gradient-to-tl from-customBgHeader via-white to-colortopdownBlue top-0 translate-y-[-100%] w-full py-0 md:py-2">
                    {Data.newPrice === undefined ? (
                      <p className="md:text-[15px] text-[13px] font-bold">
                        {price === "Liên hệ"
                          ? "Liên hệ"
                          : `${formatNumber(price)}₫`}
                      </p>
                    ) : (
                      <>
                        <p className="md:text-[15px] text-[13px] text-redPrimmary font-bold">
                          {price === "Liên hệ"
                            ? "Liên hệ"
                            : `${formatNumber(price)}₫`}
                        </p>
                        <p className="line-through text-[9px] md:text-[11px]">
                          {price === "Liên hệ"
                            ? "Liên hệ"
                            : `${formatNumber(price)}₫`}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Badge.Ribbon>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
