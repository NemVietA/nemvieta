"use client";
import { useData } from "@context/DataProviders";
import React from "react";

import DisplayHomeProduct from "./DisplayProductHome";

const HomeContent = () => {
  const { productTypes, Products } = useData();
  return (
    <div className="flex flex-col">
      {productTypes?.map((item: any, idx: number) => {
        const sortProduct = Products.filter(
          (product: any) => product.type === item.type
        );
        return (
          <div key={idx}>
            <DisplayHomeProduct
              Data={sortProduct}
              Topic={item.type}
              isEven={!(idx % 2)}
            />
          </div>
        );
      })}

      {/* <DisplayProduct Data={saleProducts} Topic="Sản phẩm khuyến mãi" />
    <DisplayProduct Data={bestSellerProducts} Topic="Sản phẩm bán chạy" />
    <DisplayProduct Data={newProducts} Topic="Sản phẩm mới" />
    <DisplayProduct Data={hotProducts} Topic="Sản phẩm nổi bật" /> */}
    </div>
  );
};

export default HomeContent;
