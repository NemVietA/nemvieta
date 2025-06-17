"use client";
import { Image, Modal, notification } from "antd";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";
import { useRouter } from "next/navigation";
import { FacebookProvider, Comments } from "react-facebook";
import {
  convertStringToNumber,
  formatNumber,
} from "@ultis/convertStringToNumber";
import { FaEye, FaPen } from "react-icons/fa";
import ProductList from "./PaginationProduct";

const ProductDetail = ({ Data, SimilarProduct }: any) => {
  const { ContactData } = useData();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDiscount, setIsDiscount] = React.useState(false);
  const router = useRouter();
  let isHasPrice = false;
  let headers: any;

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

    // Hiển thị thông báo thành công
    notification.success({
      message: 'Thêm thành công!',
      description: `${product.title} đã được thêm vào giỏ hàng.`,
      duration: 1, // Thời gian hiển thị thông báo (1 giây)
    });
  };

  if (Object.keys(Data?.price[0]).includes("1m4x2m")) {
    headers = ["Size", "1mx2m", "1m2x2m", "1m4x2m", "1m6x2m", "1m8x2m"];
  } else if (Data.type === "NỆM THÔNG HƠI") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "NỆM PE") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "NỆM FOAM") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "NỆM LOXO") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "NỆM CAO SU") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  } else if (Data.type === "DRAP") {
    headers = ["Size", "1m", "1m2", "1m4", "1m6", "1m8"];
  }

  let formattedTable = Data?.price.map((rowData: any, index: any) => {
    if (index === 0) {
      return headers;
    } else {
      return headers?.map((header: any) => {
        if (convertStringToNumber(rowData[header])) isHasPrice = true;
        return rowData[header] || "";
      });
    }
  });

  let formattedNewPrice: any;
  if (Data?.newPrice !== undefined) {
    formattedNewPrice = Data?.newPrice.map((rowData: any, index: any) => {
      if (index === 0) {
        return headers;
      } else {
        return headers.map((header: any) => rowData[header] || "");
      }
    });
  }

  return (
    <div className="flex flex-col gap-5  d:w-[1400px] d:mx-auto p:w-auto p:mx-2 py-14">
      <div>
        <div className="grid p:grid-cols-1 d:grid-cols-2 d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 pb-14">
          <div className=" rounded-lg d:h-max p:h-auto overflow-hidden">
            <div className="w-full flex justify-center">
              <Image.PreviewGroup>
                <Image
                  className="p-2 h-full  object-contain hover:scale-110 duration-500"
                  src={Data?.image}
                />
              </Image.PreviewGroup>
            </div>
            {Data?.subimage?.length > 0 && (
              <div className="w-full bg-gray-100 mt-3">
                <div className="p-2 flex ">
                  <Image.PreviewGroup>
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      slidesPerView={5}
                      slidesPerGroup={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      {Data?.subimage?.map((item: any, idx: number) => (
                        <SwiperSlide key={idx}>
                          <Image
                            className="p-2 h-full w-full object-contain"
                            src={item.url}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Image.PreviewGroup>
                </div>
              </div>
            )}
          </div>
          <div className=" flex flex-col gap-5 font-Questrial">
            <div>
              <h1 className="text-[26px] uppercase text-textHeadSession font-bold">
                {Data?.title}
              </h1>
              <div className="bg-black w-24 h-1"></div>
            </div>
            <div>
              Bảng Giá:
              {formattedTable?.length !== 0 && isHasPrice ? (
                <div className="mt-2">
                  <div className=" overflow-x-scroll scrollbar-hide">
                    <table className="min-w-full">
                      <thead>
                        <tr
                          key={`row-${0}`}
                          className="font-Questrial text-red-500 font-bold"
                        >
                          {formattedTable[0]?.map(
                            (cell: any, colIndex: any) => {
                              return (
                                <td
                                  key={`cell-${0}-${colIndex}`}
                                  className="border border-black px-4 py-2 w-max truncate"
                                >
                                  {cell || "X"}
                                </td>
                              );
                            }
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {formattedTable?.map((row: any, rowIndex: any) => {
                          if (rowIndex !== 0) {
                            return (
                              <tr key={`row-${rowIndex}`}>
                                {row?.map((cell: any, colIndex: any) => {
                                  let sizeCol =
                                    "border border-black px-4 py-2 w-max truncate text-red-500 font-bold";
                                  if (colIndex !== 0)
                                    sizeCol =
                                      "border border-black px-4 py-2 w-max truncate";
                                  return (
                                    <td
                                      key={`cell-${rowIndex}-${colIndex}`}
                                      className={sizeCol}
                                    >
                                      {cell ? (
                                        `${formatNumber(cell)}`
                                      ) : (
                                        <i></i>
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <span className="ml-3 text-red-500 font-bold">Liên Hệ</span>
              )}
            </div>

            <div className="flex gap-5 d:flex-row p:flex-col  ">
              {Data.discount !== 0 && (
                <div className="flex">
                  <div
                    className="border p-2  cursor-pointer bg-red-400 hover:bg-red-600 rounded-xl text-white text-[14px] font-semibold w-full"
                    onClick={() => setIsDiscount(true)}
                  >
                    <FaEye className="inline-block" /> Xem Ưu Đãi
                  </div>
                </div>
              )}
            </div>

            <div className="d:flex-row p:flex-col gap-5 d:mt-4 p:mt-8">
              <button
                onClick={() => addToCart(Data)}
                className="d:w-[50%] p:w-full text-white bg-red-500 hover:bg-red-600 duration-300 p:py-3 p:font-bold d:font-bold rounded-lg"
              >
                Thêm Vào Giỏ Hàng
              </button>
              <button
                onClick={() => {
                  const facebookURL = "https://www.facebook.com/ctynemvietaa"; // Thay bằng URL trang Facebook của bạn
                  window.location.href = facebookURL;
                }}
                className="d:w-[50%] p:w-full text-white bg-black hover:bg-gray-700 duration-300 p:py-3 p:font-bold d:font-bold rounded-lg"
              >
                <FaPen className="inline-block mr-2" /> Tư Vấn Ngay
              </button>
            </div>
            <div className="font-bold mt-2">
              {Data?.discount !== 0 && isDiscount && (
                <span className="text-red-500">{Data?.discount}%</span>
              )}
            </div>
          </div>
        </div>
        {/* Render phần thông tin chi tiết */}
      </div>
    </div>
  );
};

export default ProductDetail;
