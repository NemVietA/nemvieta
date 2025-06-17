"use client";
import React, { useEffect } from "react";
import { useData } from "@context/DataProviders";
import ProductCard from "@components/client/Product/ProductCard";
import { pathMapper } from "@ultis/mapPath";
import Link from "next/link";
import { FiBox } from "react-icons/fi"; // Import icon (ví dụ: FiBox)

const DisplayProduct = ({ Data, Parent, Children, Type }: any) => {
  const [Topic, setTopic] = React.useState<any>("");

  const { productTypes, Products } = useData();
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (Type !== undefined) {
      const topic = productTypes.find((item: any) => item.typeUrl === Type);
      if (topic) {
        setTopic(topic.type);
      }
    } else if (Children !== undefined) {
      const childTopic = productTypes.find((item: any) =>
        item.children.some((child: any) => child.childrenUrl === Children)
      );
      if (childTopic) {
        const topic = childTopic.children.find(
          (child: any) => child.childrenUrl === Children
        );
        if (topic) {
          setTopic(topic.children);
        }
      }
    } else {
      const topic = productTypes.find((item: any) => item.parentUrl === Parent);
      if (topic) {
        setTopic(topic.parent);
      }
    }
  }, [Type, Parent, Children, productTypes]);

  return (
    <div className="bg-[rgba(255,255,255,0.85)] w-full h-full min-h-screen">
      <div className="mx-auto flex flex-col items-center">
        <div className="bg-[url('/image/img_list_product.jpg')] bg-cover w-full bg-[0%_80%] text-white h-[35vh]">
          <div className="w-full flex h-full justify-center items-center flex-col py-3 px-5">
            <h2 className="uppercase lg:text-[54px] text-[34px] font-[1000] text-customAqua font-Questrial animate__animated animate__fadeInLeft">
              <div className="uppercase font-Questrial lg:text-[14px] text-[14px] font-semibold">
                <Link href={"/"}>Trang Chủ </Link>
                {currentPath.split("/").map((item: string, idx: number) => {
                  return item ? (
                    <Link key={idx} href={`/${item}`}>
                      / {pathMapper(item)}
                    </Link>
                  ) : (
                    <></>
                  );
                })}
              </div>
              {Topic}
            </h2>
            {Data.length !== 0 ? (
              <p className="lg:text-[20px] text-[10px] font-Questrial animate__animated animate__fadeInRight">
                Tìm Thấy {Data.length} Sản Phẩm Trong {Products.length} Sản Phẩm
              </p>
            ) : (
              <div className="text-center animate__animated animate__fadeInRight">
                <p className="lg:text-[20px] text-[10px] font-Questrial">
                  Không Tìm Thấy Sản Phẩm Nào Trong {Products.length} Sản Phẩm
                </p>
              </div>
            )}
          </div>
        </div>

        {Data.length !== 0 ? (
          <div className="d:w-[1200px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 mt-4">
            {Data.map((item: any, idx: number) => (
              <ProductCard Data={item} key={idx} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-6">
            {/* Icon và thông báo khi không có sản phẩm */}
            <FiBox size={50} className="text-gray-500" />
            <p className="mt-2 text-lg font-Questrial text-gray-700">
              Hiện Tại Không Có Sản Phẩm Nào
            </p>

            {/* Nút chuyển sang trang tất cả sản phẩm */}
            <Link href="/san-pham/nem">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                Xem Sản Phẩm Khác
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayProduct;
